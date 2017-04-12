
var lastKey,
    BTN_ADD = 1,
    BTN_ADD_ALL = 2,
    BTN_REMOVE = 3,
    BTN_REMOVE_ALL = 4,
    MODE_ADD = 1,
    MODE_REMOVE = 2;

function GetPublishXml(onlySelected) {
    for (var sXml = "<publish><entities>",
        oList = XUI.Html.DomUtils.GetFirstChild(AvailableEntities),
        oRowCount = oList.childNodes.length,
        i = 0;
        i < oRowCount;
        i++)
        if (!onlySelected ||
            XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oList.childNodes[i])).checked) {
            var entityName = oList.childNodes[i].id,
                entityId = document.getElementById(entityName + "_id").value;
            sXml += "<entity>" + CrmEncodeDecode.CrmXmlEncode(entityId) + "</entity>"
        }
    for (var oList = XUI.Html.DomUtils.GetFirstChild(SelectedEntities),
        oRowCount = oList.childNodes.length,
        i = 0;
        i < oRowCount;
        i++)
        if (!onlySelected ||
            XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oList.childNodes[i])).checked) {
            var entityName = oList.childNodes[i].id,
                entityId = document.getElementById(entityName + "_id").value;
            sXml += "<entity>" + CrmEncodeDecode.CrmXmlEncode(entityId) + "</entity>"
        }
    sXml += "</entities></publish>";
    return sXml
}

function publishEntities() {
    var oCommand = new RemoteCommand("SystemCustomization", "PublishCustomizations");
    oCommand.SetParameter("data", GetPublishXml(true));
    executeRemoteCommand(oCommand, LOCID_ENTUTL_PUBLISHINGENT)
}

function publishAllEntities() {
    var oCommand = new RemoteCommand("SystemCustomization", "PublishCustomizations");
    oCommand.SetParameter("data", GetPublishXml(false));
    executeRemoteCommand(oCommand, LOCID_ENTUTL_PUBLISHINGENT)
}

function submitForm(btnId) {
    switch (btnId) {
    case BTN_ADD:
        document.getElementById("ConfigurationXml").value = BuildHomePageXML(true);
        document.getElementById("submitMode").value = MODE_ADD;
        break;
    case BTN_ADD_ALL:
        document.getElementById("ConfigurationXml").value = BuildHomePageXML(false);
        document.getElementById("submitMode").value = MODE_ADD;
        break;
    case BTN_REMOVE:
        document.getElementById("ConfigurationXml").value = BuildHomePageXML(true);
        document.getElementById("submitMode").value = MODE_REMOVE;
        break;
    case BTN_REMOVE_ALL:
        document.getElementById("ConfigurationXml").value = BuildHomePageXML(false);
        document.getElementById("submitMode").value = MODE_REMOVE;
        break
    }
    document.getElementById("ConsoleForm").submit()
}

function homePageWindowOnloadHandler() {
    oList = XUI.Html.DomUtils.GetFirstChild(AvailableEntities);
    if (XUI.DomUtilities.HasChildElements(oList)) {
        _oRow = oList.childNodes[0];
        _oRowWithoutShift = _oRow;
        _oRow.className = SelectedRowStyle;
        XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(_oRow)).checked = true;
        AvailableEntities.focus()
    }
    SelectionChanged()
}

window.onload = homePageWindowOnloadHandler;

function SelectRow() {
    lastKey = 0;
    if (event.button != MOUSE_LEFT_BUTTON)
        return;
    var oRow = event.srcElement;
    while (oRow.tagName != "LI") {
        oRow = oRow.parentElement;
        if (IsNull(oRow))
            return
    }
    if (IsNull(_oRowWithoutShift) || !event.shiftKey)
        _oRowWithoutShift = oRow;
    _oRow = oRow;
    if (GetListName() == "AvailableEntities")
        UnselectRows(XUI.Html.DomUtils.GetFirstChild(SelectedEntities));
    else
        UnselectRows(XUI.Html.DomUtils.GetFirstChild(AvailableEntities));
    !event.ctrlKey &&
        UnselectRows(XUI.Html.DomUtils.GetFirstChild(document.getElementById(GetListName())));
    var oList = XUI.Html.DomUtils.GetFirstChild(document.getElementById(GetListName())),
        oldIndex = GetRowIndex(oList, _oRowWithoutShift),
        newIndex = GetRowIndex(oList, oRow);
    if (oldIndex == -1) {
        _oRowWithoutShift = oRow;
        oldIndex = newIndex
    }
    if (event.shiftKey && newIndex > -1)
        SelectInterval(oList, oldIndex, newIndex);
    else {
        var checkbox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oRow));
        if (checkbox.checked) {
            oRow.className = RowStyle;
            checkbox.checked = false
        } else {
            oRow.className = SelectedRowStyle;
            checkbox.checked = true
        }
    }
    SelectionChanged()
}

function SelectionChanged() {
    var EditButton = document.getElementById("EditButton");
    EditButton.disabled = SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(SelectedEntities)) != 1;
    AddButton = document.getElementById("AddButton");
    if (!IsNull(AddButton))
        AddButton.disabled = !AddEntity();
    RemoveButton = document.getElementById("RemoveButton");
    if (!IsNull(RemoveButton))
        RemoveButton.disabled = !RemoveEntity();
    AddAllButton = document.getElementById("AddAllButton");
    if (!IsNull(AddAllButton))
        AddAllButton.disabled = !AddAllEntities();
    RemoveAllButton = document.getElementById("RemoveAllButton");
    if (!IsNull(RemoveAllButton))
        RemoveAllButton.disabled = !RemoveAllEntities();
    PublishButton = document.getElementById("PublishButton");
    if (!IsNull(PublishButton))
        PublishButton.disabled = SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(SelectedEntities)) == 0 &&
            SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(AvailableEntities)) == 0
}

function BuildHomePageXML(useOnlySelected) {
    for (var sXml = "<Entities><AvailableEntities>",
        oList = XUI.Html.DomUtils.GetFirstChild(AvailableEntities),
        oRowCount = oList.childNodes.length,
        i = 0;
        i < oRowCount;
        i++)
        if (XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oList.childNodes[i])).checked ||
            !useOnlySelected)
            sXml += '<Entity name="' + CrmEncodeDecode.CrmXmlAttributeEncode(oList.childNodes[i].id) + '"/>';
    sXml += "</AvailableEntities><SelectedEntities>";
    for (var oList = XUI.Html.DomUtils.GetFirstChild(SelectedEntities),
        oRowCount = oList.childNodes.length,
        i = 0;
        i < oRowCount;
        i++)
        if (XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oList.childNodes[i])).checked ||
            !useOnlySelected)
            sXml += '<Entity name="' + CrmEncodeDecode.CrmXmlAttributeEncode(oList.childNodes[i].id) + '"/>';
    sXml += "</SelectedEntities></Entities>";
    return sXml
}

function AddEntity() {
    return SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(AvailableEntities)) != 0
}

function RemoveEntity() {
    return SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(SelectedEntities)) != 0
}

function AddAllEntities() {
    return XUI.Html.DomUtils.GetFirstChild(AvailableEntities).childNodes.length != 0
}

function RemoveAllEntities() {
    return XUI.Html.DomUtils.GetFirstChild(SelectedEntities).childNodes.length != 0
}

function RemoveEntitityWarning() {
    return window.confirm(LOCID_REMOVE_ENTITY_WARNING)
}

function PublishEntities() {
    if (SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(SelectedEntities)) == 0 &&
        SelectedRowsCount(XUI.Html.DomUtils.GetFirstChild(AvailableEntities)) == 0)
        return false;
    return window.confirm(LOCID_PUBLISH_SELECTED_WARNING)
}

function PublishAllEntities() {
    return window.confirm(LOCID_PUBLISH_ENTITIES_WARNING)
}

function EditEntity() {
    var oList = XUI.Html.DomUtils.GetFirstChild(SelectedEntities);
    if (SelectedRowsCount(oList) != 1) {
        alert(LOCID_MUST_SELECT_ENTITY_WARNING);
        return
    }
    var selectedRow = GetSelectedRow(oList);
    if (!IsNull(selectedRow)) {
        var oUrl = Mscrm.CrmUri.create("/m/console/EntityConfig.aspx");
        oUrl.get_query()["etn"] = selectedRow.id;
        openStdDlg(oUrl, null, 700, 600, true, true, "maximize:yes")
    } else
        alert(LOCID_MUST_SELECT_ENTITY_WARNING)
}

function InitList(listName) {
    if (lastKey != TAB_KEY)
        return;
    var oList = XUI.Html.DomUtils.GetFirstChild(document.getElementById(listName));
    if (IsNull(GetSelectedRow(oList)) && XUI.DomUtilities.HasChildElements(oList)) {
        UnselectRows(XUI.Html.DomUtils.GetFirstChild(AvailableEntities));
        UnselectRows(XUI.Html.DomUtils.GetFirstChild(SelectedEntities));
        _oRow = oList.childNodes[0];
        XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(_oRow)).checked = true;
        _oRow.className = SelectedRowStyle;
        _oRowWithoutShift = _oRow;
        SelectionChanged();
        document.getElementById(listName).scrollTop = 0;
        lastKey = 0
    }
}

function HandleKeyDown(listName) {
    var iKeyPressed = event.keyCode;
    lastKey = iKeyPressed;
    if (iKeyPressed == TAB_KEY)
        return true;
    if (IsNull(_oRow))
        return false;
    switch (iKeyPressed) {
    case ENTER_KEY:
        var btn = document.getElementById("EditButton");
        Mscrm.Utilities.click(btn);
        break;
    case DELETE_KEY:
        var btn = document.getElementById("RemoveButton");
        Mscrm.Utilities.click(btn);
        break;
    case LEFT_KEY:
        var btn = document.getElementById("RemoveButton");
        Mscrm.Utilities.click(btn);
        break;
    case RIGHT_KEY:
        var btn = document.getElementById("AddButton");
        Mscrm.Utilities.click(btn);
        break;
    case SPACE_KEY:
        var btn;
        if (GetListName() == "SelectedEntities")
            btn = document.getElementById("RemoveButton");
        else
            btn = document.getElementById("AddButton");
        Mscrm.Utilities.click(btn);
        break;
    case UP_KEY:
        var oList = XUI.Html.DomUtils.GetFirstChild(document.getElementById(GetListName())),
            rowIndex = GetRowIndex(oList, _oRow);
        if (rowIndex == 0)
            return false;
        !event.ctrlKey &&
            UnselectRows(oList);
        var newRowIndex = rowIndex - 1,
            rowHeight = _oRow.offsetHeight + 2;
        ScrollVerticalListUp(document.getElementById(GetListName()), newRowIndex, rowHeight);
        var oRow = oList.childNodes[newRowIndex];
        _oRow = oRow;
        if (!event.shiftKey)
            _oRowWithoutShift = oRow;
        if (event.shiftKey)
            SelectInterval(oList, newRowIndex, GetRowIndex(oList, _oRowWithoutShift));
        else if (event.ctrlKey) {
            var rowCheckbox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oRow));
            rowCheckbox.checked = !rowCheckbox.checked;
            oRow.className = rowCheckbox.checked ? SelectedRowStyle : RowStyle;
            if (!rowCheckbox.checked)
                _oRow = oList.childNodes[rowIndex]
        } else {
            oRow.className = SelectedRowStyle;
            rowCheckbox.checked = true
        }
        SelectionChanged();
        break;
    case DOWN_KEY:
        var oList = XUI.Html.DomUtils.GetFirstChild(document.getElementById(GetListName())),
            rowIndex = GetRowIndex(oList, _oRow);
        if (rowIndex >= oList.childNodes.length - 1)
            return false;
        !event.ctrlKey &&
            UnselectRows(oList);
        var newRowIndex = rowIndex + 1,
            listHeight = document.getElementById(GetListName()).offsetHeight,
            rowHeight = _oRow.offsetHeight + 2;
        ScrollVerticalListDown(document.getElementById(GetListName()), rowIndex + 2, rowHeight, listHeight);
        var oRow = oList.childNodes[newRowIndex];
        _oRow = oRow;
        if (!event.shiftKey)
            _oRowWithoutShift = oRow;
        if (event.shiftKey)
            SelectInterval(oList, newRowIndex, GetRowIndex(oList, _oRowWithoutShift));
        else if (event.ctrlKey) {
            var rowCheckbox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oRow));
            rowCheckbox.checked = !rowCheckbox.checked;
            oRow.className = rowCheckbox.checked ? SelectedRowStyle : RowStyle;
            if (!rowCheckbox.checked)
                _oRow = oList.childNodes[rowIndex]
        } else {
            oRow.className = SelectedRowStyle;
            rowCheckbox.checked = true
        }
        SelectionChanged();
        break;
    default:
        break
    }
    return false
}

function DoubleClick() {
    if (IsNull(_oRow))
        return;
    var oList = XUI.Html.DomUtils.GetFirstChild(document.getElementById(GetListName()));
    UnselectRows(oList);
    _oRow.className = SelectedRowStyle;
    XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(_oRow)).checked = true;
    _oRowWithoutShift = null;
    SelectionChanged();
    var btn;
    if (GetListName() == "SelectedEntities")
        btn = document.getElementById("EditButton");
    else
        btn = document.getElementById("AddButton");
    Mscrm.Utilities.click(btn)
}