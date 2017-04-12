
var _oRow = null,
    _oRowWithoutShift = null,
    lastKey,
    isChanged,
    SPACE_KEY = 32,
    TAB_KEY = 9,
    LEFT_KEY = 37,
    UP_KEY = 38,
    RIGHT_KEY = 39,
    DOWN_KEY = 40,
    MOUSE_LEFT_BUTTON = 0,
    RowStyle = "ms-crm-Dialog-ListItem",
    SelectedRowStyle = "ms-crm-Dialog-ListItem ms-crm-me-SelectOn",
    GlowOnStyle = "ms-crm-me-GlowOn",
    isManager,
    isManagerSelected,
    isPosition,
    isPositionSelected,
    hierarchyDepthControl,
    hierarchyDepthValue,
    hsmControl,
    hsmConfigurationSelected,
    excludeEntityChanged;

function AdminSecurityConfigOnloadHandler() {
    isChanged = true;
    excludeEntityChanged = false;
    attachWindowOnBeforeUnload(Close);
    attachWindowOnUnload(AdminSecurityConfigUnloadHandler);
    window.addEventListener("keydown", HandleKeyDown, true);
    isManager = document.getElementById("rad_rdSelectHierarchyType1");
    isPosition = document.getElementById("rad_rdSelectHierarchyType2");
    hierarchyDepthControl = document.getElementById("txtHierarchyDepth");
    hierarchyDepthValue = hierarchyDepthControl.value;
    hsmControl = document.getElementById("ckEnableHSMConfiguration");
    if (IsHsmControlChecked())
        hsmConfigurationSelected = true;
    else
        hsmConfigurationSelected = false;
    if (isManager != null)
        if (isManager.checked == false)
            isManagerSelected = false;
        else
            isManagerSelected = true;
    if (isPosition != null)
        if (isPosition.checked == false)
            isPositionSelected = false;
        else
            isPositionSelected = true;
    SelectionChanged()
}

function AdminSecurityConfigUnloadHandler() {
    $removeHandler(window, "load", AdminSecurityConfigOnloadHandler);
    detachWindowOnUnload(AdminSecurityConfigOnloadHandler)
}

Sys.Application.add_load(AdminSecurityConfigOnloadHandler);

function Close(oEvent) {
    oEvent = oEvent.rawEvent;
    if (isChanged != false)
        if (isManager.checked != isManagerSelected ||
            isPosition.checked != isPositionSelected ||
            hierarchyDepthValue != hierarchyDepthControl.value ||
            hsmControl.checked != hsmConfigurationSelected ||
            excludeEntityChanged == true) {
            oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
            return LOCID_FORMS_SAVE_CONFIRM_TITLE
        }
}

function SelectRow(event) {
    lastKey = 0;
    var oRow = event.target;
    while (oRow.tagName != "LI") {
        oRow = oRow.parentElement;
        if (IsNull(oRow))
            return
    }
    event.preventDefault();
    event.stopPropagation();
    _oRow = oRow;
    var oList = GetList(GetListName());
    if (IsNull(_oRowWithoutShift) || GetRowIndex(oList, _oRowWithoutShift) < 0 || !event.shiftKey)
        _oRowWithoutShift = oRow;
    !event.ctrlKey &&
        UnselectRows(oList);
    var rowCheckbox = GetRowCheckbox(oRow);
    rowCheckbox.checked = true;
    UpdateRowStyle(oRow);
    if (event.shiftKey) {
        UnselectRows(oList);
        var oldIndex = GetRowIndex(oList, _oRowWithoutShift),
            newIndex = GetRowIndex(oList, _oRow);
        newIndex > -1 &&
            oldIndex > -1 &&
            SelectInterval(oList, oldIndex, newIndex)
    }
    if (GetListName() == "SelectedEntities")
        UnselectLeft();
    else
        UnselectRight();
    SelectionChanged()
}

function SelectionChanged() {
    var disabledButtonFlag = true,
        selectedCount = 0,
        oList;
    if (!IsNull(_oRow))
        if (GetListName() == "SelectedEntities") {
            oList = GetList("SelectedEntities");
            selectedCount = SelectedRowsCount(oList);
            if (selectedCount == 1)
                disabledButtonFlag = false;
            else
                disabledButtonFlag = true
        } else {
            oList = GetList("AvailableEntities");
            selectedCount = SelectedRowsCount(oList);
            disabledButtonFlag = true
        }
    var availableAttributesFirstChild = GetList("AvailableEntities");
    AddButton = document.getElementById("AddButton");
    if (!IsNull(AddButton))
        if (IsHsmControlChecked())
            AddButton.disabled = SelectedRowsCount(availableAttributesFirstChild) == 0;
    var selectedAttributesFirstChild = GetList("SelectedEntities");
    RemoveButton = document.getElementById("RemoveButton");
    if (!IsNull(RemoveButton))
        if (IsHsmControlChecked())
            RemoveButton.disabled = SelectedRowsCount(selectedAttributesFirstChild) == 0
}

function SaveForm(closePage) {
    var oList = GetList("SelectedEntities"),
        oRowCount = oList.childNodes.length,
        oCommand = new RemoteCommand("HierarchySecurityConfiguration",
            "SaveHierarchySecurityModelingEntityConfiguration");
    oCommand.SetParameter("entityList", GetSelectedEntities());
    if (!IsNull(document
            .getElementById("ckEnableHSMConfiguration")) &&
        $get("ckEnableHSMConfiguration").checked == true)
        oCommand.SetParameter("isHierarchyModelingEnabled", true);
    else
        oCommand.SetParameter("isHierarchyModelingEnabled", false);
    var managerAttribute = document.getElementById("rad_rdSelectHierarchyType1");
    if (managerAttribute != null)
        if (managerAttribute.checked == false)
            oCommand.SetParameter("usePositionHierarchy", true);
        else
            oCommand.SetParameter("usePositionHierarchy", false);
    else
        oCommand.SetParameter("usePositionHierarchy", true);
    var maxDepth = document.getElementById("txtHierarchyDepth"),
        error = false;
    if (!IsNull(maxDepth)) {
        reWhiteSpace = new RegExp(/^\s+$/);
        if (maxDepth.value == "" || maxDepth.value == null || reWhiteSpace.test(maxDepth.value)) {
            error = true;
            alert(LOCID_BLANK_MAX_DEPTH)
        } else
            oCommand.SetParameter("hierarchyDepth", maxDepth.value)
    }
    if (error == false) {
        var oResult = oCommand.Execute();
        if (oResult.Success) {
            isChanged = false;
            if (closePage) {
                var oUrl = Mscrm.CrmUri.create("/Tools/adminsecurity/adminsecurity_area.aspx");
                window.parent.location.href = oUrl.toString()
            }
        }
    }
}

function SaveAndClose() {
    SaveForm(true)
}

function Save() {
    SaveForm(false)
}

function Discard() {
    isChanged = false;
    var oUrl = Mscrm.CrmUri.create("/Tools/adminsecurity/adminsecurity_area.aspx");
    window.parent.location.href = oUrl.toString()
}

function IsHsmControlChecked() {
    if (hsmControl != null)
        if (hsmControl.checked == true)
            return true;
        else
            return false;
    else
        return false
}

function UnselectLeft() {
    UnselectRows(GetList("AvailableEntities"))
}

function UnselectRight() {
    UnselectRows(GetList("SelectedEntities"))
}

function SelectRowAt(oList, selectedIndex) {
    GetRowCheckbox(oList.childNodes[selectedIndex]).checked = true;
    UpdateRowStyle(oList.childNodes[selectedIndex]);
    _oRow = GetSelectedRow(oList)
}

function MoveLeft() {
    for (var oList = GetList("SelectedEntities"),
        oRowCount = oList.childNodes.length,
        movedCount = 0,
        selectedCount = 0,
        selectedIndex = -1,
        i = 0;
        i < oRowCount;
        i++) {
        oRow = oList.childNodes[i - movedCount];
        if (GetRowCheckbox(oRow).checked) {
            selectedCount++;
            selectedIndex = i;
            movedCount++;
            GetList("AvailableEntities").insertBefore(oRow, null);
            excludeEntityChanged = true
        }
    }
    if (movedCount > 0) {
        _oRow = null;
        SortList(GetList("AvailableEntities"));
        UnselectLeft()
    }
    selectedCount == 0 &&
        alert(LOCID_MUST_SELECT_ENTITY_WARNING);
    SelectionChanged()
}

function MoveRight() {
    for (var oList = GetList("AvailableEntities"),
        oRowCount = oList.childNodes.length,
        selectedCount = 0,
        selectedIndex = -1,
        i = 0;
        i < oRowCount;
        i++) {
        oRow = oList.childNodes[i - selectedCount];
        if (GetRowCheckbox(oRow).checked) {
            selectedCount++;
            selectedIndex = i;
            GetList("SelectedEntities").insertBefore(oRow, null);
            excludeEntityChanged = true
        }
    }
    _oRow = null;
    UnselectRight();
    selectedCount == 0 &&
        alert(LOCID_MUST_SELECT_ENTITY_WARNING);
    SelectionChanged()
}

function MoveToOtherList() {
    if (GetListName() == "AvailableEntities")
        MoveRight();
    else
        MoveLeft()
}

function CompareDisplayName(row1, row2) {
    var name1 = XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(row1)).innerHTML.toLowerCase(),
        name2 = XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(row2)).innerHTML.toLowerCase();
    if (name1 < name2)
        return -1;
    else if (name1 > name2)
        return 1;
    else
        return 0
}

function SortList(oList) {
    for (var oRows = oList.childNodes,
        iRowCount = oRows.length,
        aAvailableFields = new Array(iRowCount),
        i = iRowCount - 1;
        i >= 0;
        i--) {
        aAvailableFields[i] = oRows[i];
        oList.removeChild(oRows[i])
    }
    aAvailableFields.sort(CompareDisplayName);
    for (var i = 0; i < iRowCount; i++)
        oList.insertBefore(aAvailableFields[i], null)
}

function GetSelectedEntities() {
    for (var oList = GetList("SelectedEntities"),
        oRowCount = oList.childNodes.length,
        entityList = "",
        i = 0;
        i < oRowCount;
        i++)
        if (i == 0)
            entityList = oList.childNodes[i].attributes.getNamedItem("name").value;
        else
            entityList += "," + oList.childNodes[i].attributes.getNamedItem("name").value;
    return entityList
}

function HandleKeyDown(event) {
    var iKeyPressed = event.keyCode;
    lastKey = iKeyPressed;
    if (iKeyPressed == TAB_KEY) {
        var oRow = event.target;
        if (oRow.tagName == "LI")
            if (oRow.nextElementSibling == null) {
                var oList = GetList(GetListName());
                UnselectRows(oList);
                SelectionChanged()
            }
    }
    if (event.ctrlKey || event.altKey || event.metaKey)
        switch (String.fromCharCode(event.which).toLowerCase()) {
        case "s":
            event.preventDefault();
            event.stopPropagation();
            if (event.altKey)
                SaveForm(true);
            else
                SaveForm(false);
            break
        }
    if (IsNull(_oRow))
        return false;
    switch (iKeyPressed) {
    case LEFT_KEY:
        if (GetListName() == "SelectedEntities")
            IsHsmControlChecked() &&
                MoveLeft();
        break;
    case RIGHT_KEY:
        if (GetListName() == "AvailableEntities")
            IsHsmControlChecked() &&
                MoveRight();
        break;
    case SPACE_KEY:
        IsHsmControlChecked() &&
            MoveToOtherList();
        break;
    case UP_KEY:
        if (IsNull(_oRow))
            return false;
        var oList = GetList(GetListName()),
            rowIndex = GetRowIndex(oList, _oRow);
        if (rowIndex == 0)
            return false;
        ScrollVerticalListUp(document.getElementById(GetListName()), _oRow);
        if (event.ctrlKey) {
            var oRow = oList.childNodes[rowIndex - 1],
                rowCheckbox = GetRowCheckbox(oRow);
            if (rowCheckbox.checked) {
                rowCheckbox.checked = false;
                UpdateRowStyle(oRow)
            } else {
                rowCheckbox.checked = true;
                UpdateRowStyle(oRow);
                _oRow = oRow;
                _oRowWithoutShift = oRow
            }
            SelectionChanged();
            return false
        } else
            UnselectRows(oList);
        if (event.shiftKey) {
            var oldIndex = GetRowIndex(oList, _oRowWithoutShift);
            if (oldIndex > -1) {
                var newIndex = rowIndex - 1;
                SelectInterval(oList, oldIndex, newIndex);
                _oRow = oList.childNodes[newIndex];
                SelectionChanged();
                return false
            }
        }
        GetRowCheckbox(_oRow).checked = false;
        UpdateRowStyle(_oRow);
        _oRow = oList.childNodes[rowIndex - 1];
        GetRowCheckbox(_oRow).checked = true;
        UpdateRowStyle(_oRow);
        _oRowWithoutShift = _oRow;
        SelectionChanged();
        break;
    case DOWN_KEY:
        if (IsNull(_oRow))
            return false;
        var oList = GetList(GetListName()),
            rowIndex = GetRowIndex(oList, _oRow);
        if (rowIndex == oList.childNodes.length - 1)
            return false;
        ScrollVerticalListDown(document.getElementById(GetListName()), _oRow);
        if (event.ctrlKey) {
            var oRow = oList.childNodes[rowIndex + 1],
                oRowCheckbox = GetRowCheckbox(oRow);
            if (oRowCheckbox.checked) {
                oRowCheckbox.checked = false;
                UpdateRowStyle(oRow)
            } else {
                oRowCheckbox.checked = true;
                UpdateRowStyle(oRow);
                _oRow = oRow;
                _oRowWithoutShift = oRow
            }
            SelectionChanged();
            return false
        } else
            UnselectRows(oList);
        if (event.shiftKey) {
            var oldIndex = GetRowIndex(oList, _oRowWithoutShift);
            if (oldIndex > -1) {
                var newIndex = rowIndex + 1;
                SelectInterval(oList, oldIndex, newIndex);
                _oRow = oList.childNodes[newIndex];
                SelectionChanged();
                return false
            }
        }
        GetRowCheckbox(_oRow).checked = false;
        UpdateRowStyle(_oRow);
        _oRow = oList.childNodes[rowIndex + 1];
        GetRowCheckbox(_oRow).checked = true;
        UpdateRowStyle(_oRow);
        _oRowWithoutShift = _oRow;
        SelectionChanged();
        break;
    default:
        break
    }
    return false
}

function DoubleClick(event) {
    if (IsNull(_oRow))
        return;
    var oList = GetList(GetListName());
    UnselectRows(oList);
    _oRowWithoutShift = _oRow;
    GetRowCheckbox(_oRow).checked = true;
    UpdateRowStyle(_oRow);
    IsHsmControlChecked() &&
        MoveToOtherList()
}

function UpdateRowStyle(oRow) {
    if (IsNull(oRow))
        return;
    var isChecked = GetRowCheckbox(oRow).checked;
    if (isChecked)
        oRow.className = SelectedRowStyle;
    else
        oRow.className = RowStyle;
    XUI.Html.DomUtils.GetFirstChild(oRow).className = null
}

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

function GetSelectedRow(oList) {
    if (IsNull(oList))
        return null;
    for (var i = oList.childNodes.length - 1; i >= 0; i--)
        if (GetRowCheckbox(oList.childNodes[i]).checked)
            return oList.childNodes[i];
    return null
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