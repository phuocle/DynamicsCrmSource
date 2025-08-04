
var CurrentFormXml,
    lastKey;

function entityConfigWindowOnloadHandler() {
    document.getElementById("FormName").value = FORM_NAME;
    document.getElementById("FormDescription").value = FORM_DESCRIPTION;
    _bEntityConfig = true;
    CurrentFormXml = BuildFormXML(false);
    $addHandler(window, "resize", LayoutElements);
    attachWindowOnBeforeUnload(Close);
    attachWindowOnUnload(entityConfigWindowOnUnloadHandler);
    if (CAN_CUSTOMIZE) {
        oList = GetList("AvailableAttributes");
        if (XUI.DomUtilities.HasChildElements(oList)) {
            _oRow = oList.childNodes[0];
            _oRowWithoutShift = _oRow;
            var rowItem = GetRowCheckbox(_oRow);
            rowItem.checked = true;
            UpdateRowStyle(_oRow);
            document.getElementById("mnucrmMenuBarfile").focus()
        }
        SelectionChanged()
    } else {
        formEditorHeader.disabled = true;
        formEditorBody.disabled = true
    }
    LayoutElements()
}

Sys.Application.add_load(entityConfigWindowOnloadHandler);

function entityConfigWindowOnUnloadHandler() {
    $removeHandler(window, "load", entityConfigWindowOnloadHandler);
    $removeHandler(window, "resize", LayoutElements);
    detachWindowOnUnload(entityConfigWindowOnUnloadHandler);
    RefreshGrid()
}

function LayoutElements() {
    var formMenu = document.getElementById("formEditorMenu"),
        formHeader = document.getElementById("formEditorHeader"),
        formBody = document.getElementById("formEditorBody"),
        bodyPaddingPx = 5;
    formBody.style.top = formHeader.offsetHeight + formMenu.offsetHeight + "px";
    formBody.style.bottom = 0;
    var availableAttributesCol = document.getElementById("formEditorBodyAvailableAttributesCol"),
        buttonsCol = document.getElementById("formEditorBodyButtonsCol"),
        selectedAttributesCol = document.getElementById("formEditorBodySelectedAttributesCol"),
        colBorderPx = 1,
        columnSpacingPx = 20,
        listColWidth = (formBody.offsetWidth -
                2 * bodyPaddingPx -
                buttonsCol.offsetWidth -
                4 * colBorderPx -
                2 * columnSpacingPx) /
            2;
    if (listColWidth < 0)
        listColWidth = 0;
    availableAttributesCol.style.width = listColWidth + "px";
    var leftColLabel = document.getElementById("AvailableAttributesText"),
        leftColList = document.getElementById("AvailableAttributes");
    leftColList.style.top = leftColLabel.offsetHeight + "px";
    if (LOCID_UI_DIR == "RTL")
        buttonsCol.style.right = (formBody.offsetWidth - buttonsCol.offsetWidth) / 2 + "px";
    else
        buttonsCol.style.left = (formBody.offsetWidth - buttonsCol.offsetWidth) / 2 + "px";
    var buttonsPanel = document.getElementById("formEditorBodyButtonList"),
        buttonsOffsetTopPx = 0;
    if (formBody.offsetHeight > buttonsPanel.offsetHeight)
        buttonsOffsetTopPx = (formBody.offsetHeight - buttonsPanel.offsetHeight) / 2;
    buttonsPanel.style.top = buttonsOffsetTopPx + "px";
    if ((Mscrm.Utilities.get_ieBrowserVersion() == 7 || Mscrm.Utilities.get_isIEBrowserInOlderCompatibilityMode()) &&
        !buttonsPanel.style.width)
        buttonsPanel.style.width = buttonsCol.clientWidth + "px";
    selectedAttributesCol.style.width = listColWidth + "px";
    var rightColLabel = document.getElementById("SelectedAttributesText"),
        rightColList = document.getElementById("SelectedAttributes");
    rightColList.style.top = rightColLabel.offsetHeight + "px"
}

function Close(oEvent) {
    oEvent = oEvent.rawEvent;
    var currentFormName = document.getElementById("FormName").value,
        currentFormDescription = document.getElementById("FormDescription").value;
    if (CurrentFormXml != BuildFormXML(false) ||
        currentFormName != FORM_NAME ||
        currentFormDescription != FORM_DESCRIPTION) {
        oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
        return LOCID_FORMS_SAVE_CONFIRM_TITLE
    }
}

function RefreshGrid() {
    !IsNull(window.top) &&
        !IsNull(window.top.opener) &&
        window.top.opener.auto(Mscrm.EntityTypeCode.SystemForm)
}

function SelectRow(event) {
    lastKey = 0;
    if (event.button != MOUSE_LEFT_BUTTON)
        return;
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
    if (GetListName() == "SelectedAttributes")
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
        if (GetListName() == "SelectedAttributes") {
            oList = GetList("SelectedAttributes");
            selectedCount = SelectedRowsCount(oList);
            if (selectedCount == 1)
                disabledButtonFlag = false;
            else
                disabledButtonFlag = true
        } else {
            oList = GetList("AvailableAttributes");
            selectedCount = SelectedRowsCount(oList);
            disabledButtonFlag = true
        }
    MoveUpButton = document.getElementById("MoveUpButton");
    if (!IsNull(MoveUpButton))
        if (!IsNull(oList))
            MoveUpButton.disabled = disabledButtonFlag || GetRowIndex(oList, _oRow) == 0;
        else
            MoveUpButton.disabled = disabledButtonFlag;
    MoveDownButton = document.getElementById("MoveDownButton");
    if (!IsNull(MoveDownButton))
        if (!IsNull(oList))
            MoveDownButton.disabled = disabledButtonFlag || GetRowIndex(oList, _oRow) == oList.childNodes.length - 1;
        else
            MoveDownButton.disabled = disabledButtonFlag;
    var availableAttributesFirstChild = GetList("AvailableAttributes");
    AddButton = document.getElementById("AddButton");
    if (!IsNull(AddButton))
        AddButton.disabled = SelectedRowsCount(availableAttributesFirstChild) == 0;
    var selectedAttributesFirstChild = GetList("SelectedAttributes");
    RemoveButton = document.getElementById("RemoveButton");
    if (!IsNull(RemoveButton))
        RemoveButton.disabled = SelectedNotRequiredRowsCount(selectedAttributesFirstChild) == 0;
    AddAllButton = document.getElementById("AddAllButton");
    if (!IsNull(AddAllButton))
        AddAllButton.disabled = availableAttributesFirstChild.childNodes.length == 0;
    RemoveAllButton = document.getElementById("RemoveAllButton");
    if (!IsNull(RemoveAllButton))
        RemoveAllButton.disabled = selectedAttributesFirstChild.childNodes.length ==
            RequiredRowsCount(selectedAttributesFirstChild);
    ReadonlyButton = document.getElementById("ReadOnlyButton");
    if (!IsNull(ReadonlyButton))
        ReadonlyButton.disabled = SelectedRowsCount(selectedAttributesFirstChild) == 0
}

function RemoveOrder(formXml) {
    var formXmlDoc = XUI.Xml.LoadXml(formXml),
        node = XUI.Xml.SelectSingleNode(formXmlDoc, "/entity/form/DisplayConditions", null);
    if (IsNull(node))
        return formXml;
    node.removeAttribute("Order");
    return XUI.Xml.XMLSerializer.serializeToString(formXmlDoc)
}

function SaveForm(closePage) {
    CurrentFormXml = BuildFormXML(false);
    FORM_NAME = document.getElementById("FormName").value;
    FORM_DESCRIPTION = document.getElementById("FormDescription").value;
    document.getElementById("FormXml").value = BuildFormXML(true);
    document.getElementById("ClosePage").value = closePage;
    document.getElementById("ParentFormId").value = parentFormId;
    document.getElementById("ConsoleForm").submit()
}

function SaveAndClose() {
    SaveForm(true)
}

function Save() {
    SaveForm(false)
}

function SaveAs() {
    var oArgs = {};
    oArgs.formXml = RemoveOrder(BuildFormXML(true));
    oArgs.objectTypeCode = CURRENT_ENTITY_OBJECT_TYPE_CODE;
    oArgs.formType = Mscrm.FormTypes.mobile;
    oArgs.isUserForm = false;
    oArgs.targetFormType = Mscrm.FormTypes.mobile;
    oArgs.formId = CURRENT_FORM_ID;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 300;
    dialogOptions.width = 400;
    var saveAsUrl = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/SaveAs.aspx");
    Xrm.Internal.openDialog(saveAsUrl.toString(), dialogOptions, oArgs, null, saveAsCallBack)
}

function saveAsCallBack(oRet) {
    if (!IsNull(oRet) && oRet.success) {
        CurrentFormXml = BuildFormXML(false);
        var url = Mscrm.CrmUri.create(window.location.href);
        url.get_query()["formid"] = oRet.id;
        window.location.href = url
    }
}

function AssignRoles() {
    var oArgs = {};
    oArgs.formId = CURRENT_FORM_ID;
    var url = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/FormRoleAssignment.aspx");
    url.get_query()["formId"] = CURRENT_FORM_ID;
    url.get_query()["type"] = Mscrm.FormTypes.mobile;
    url.get_query()["objectTypeCode"] = CURRENT_ENTITY_OBJECT_TYPE_CODE;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.width = 800;
    dialogOptions.height = 550;
    Xrm.Internal.openDialog(url.toString(), dialogOptions, oArgs, null, CallbackAssignRoles)
}

function CallbackAssignRoles(displayConditionsXml) {
    if (!IsNull(displayConditionsXml))
        DISPLAY_CONDITIONS_XML = displayConditionsXml
}

function FormProperties() {
    var url = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/FormProperties.aspx?mobile=1"),
        formNameElem = document.getElementById("FormName"),
        formDescElem = document.getElementById("FormDescription"),
        formObject = {};
    formObject.Name = formNameElem.value;
    formObject.Description = formDescElem.value;
    var formPropertiesObj = openStdDlg(url, formObject, 650, 550);
    if (!IsNull(formPropertiesObj)) {
        if (formPropertiesObj.Name != formNameElem.value)
            formNameElem.value = formPropertiesObj.Name;
        if (formPropertiesObj.Description != formDescElem.value)
            formDescElem.value = formPropertiesObj.Description
    }
}

function MoveUp() {
    var oList = GetList("SelectedAttributes");
    _oRow = GetSelectedRow(oList);
    if (IsNull(_oRow)) {
        alert(LOCID_MUST_SELECT_ATTRIBUTE_WARNING);
        return
    }
    XUI.Html.DomUtils.GetPrevSibling(_oRow) != null &&
        oList.insertBefore(_oRow, XUI.Html.DomUtils.GetPrevSibling(_oRow));
    SelectionChanged()
}

function MoveDown() {
    var oList = GetList("SelectedAttributes");
    _oRow = GetSelectedRow(oList);
    if (IsNull(_oRow)) {
        alert(LOCID_MUST_SELECT_ATTRIBUTE_WARNING);
        return
    }
    XUI.Html.DomUtils.GetNextSibling(_oRow) != null &&
        oList.insertBefore(_oRow, XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetNextSibling(_oRow)));
    SelectionChanged()
}

function UnselectLeft() {
    UnselectRows(GetList("AvailableAttributes"))
}

function UnselectRight() {
    UnselectRows(GetList("SelectedAttributes"))
}

function SelectRowAt(oList, selectedIndex) {
    GetRowCheckbox(oList.childNodes[selectedIndex]).checked = true;
    UpdateRowStyle(oList.childNodes[selectedIndex]);
    _oRow = GetSelectedRow(oList)
}

function MoveLeft() {
    for (var oList = GetList("SelectedAttributes"),
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
            var haveDuplicates = DuplicateRowsCount(oList, oRow) > 0,
                req = oRow.attributes.getNamedItem("req").nodeValue;
            if (req != SYSTEM_REQUIRED && req != BUSINESS_REQUIRED || haveDuplicates) {
                movedCount++;
                if (haveDuplicates)
                    GetList("SelectedAttributes").removeChild(oRow);
                else {
                    var readonlyAttr = oRow.attributes.getNamedItem("ro");
                    !IsNull(readonlyAttr) &&
                        readonlyAttr.value == "true" &&
                        SetReadonlyAttributes(oRow, false);
                    GetList("AvailableAttributes").insertBefore(oRow, null)
                }
            }
        }
    }
    if (movedCount > 0) {
        if (movedCount == selectedCount)
            _oRow = null;
        else {
            _oRow = GetSelectedRow(oList);
            alert(REMOVE_REQUIRED_ATTRIBUTES_WARNING)
        }
        SortList(GetList("AvailableAttributes"));
        UnselectLeft()
    }
    movedCount == 0 &&
        selectedCount > 0 &&
        alert(LOCID_REMOVE_REQUIRED_FIELD_WARNING);
    if (selectedCount == 1 && movedCount == 1) {
        if (selectedIndex == oRowCount - 1)
            selectedIndex = oRowCount - 2;
        selectedIndex >= 0 &&
            SelectRowAt(oList, selectedIndex)
    }
    selectedCount == 0 &&
        alert(LOCID_MUST_SELECT_ATTRIBUTE_WARNING);
    SelectionChanged()
}

function MoveRight() {
    for (var oList = GetList("AvailableAttributes"),
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
            GetList("SelectedAttributes").insertBefore(oRow, null)
        }
    }
    _oRow = null;
    if (selectedCount == 1) {
        if (selectedIndex == oRowCount - 1)
            selectedIndex = oRowCount - 2;
        selectedIndex >= 0 &&
            SelectRowAt(oList, selectedIndex)
    }
    UnselectRight();
    selectedCount == 0 &&
        alert(LOCID_MUST_SELECT_ATTRIBUTE_WARNING);
    SelectionChanged()
}

function MoveLeftAll() {
    if (!IsNull(_oRow)) {
        GetRowCheckbox(_oRow).checked = false;
        UpdateRowStyle(_oRow);
        _oRow = null
    }
    for (var oList = GetList("SelectedAttributes"),
        oRowCount = oList.childNodes.length,
        movedCount = 0,
        i = 0;
        i < oRowCount;
        i++) {
        var oRow = oList.childNodes[i - movedCount],
            req = oRow.attributes.getNamedItem("req").nodeValue,
            haveDuplicates = DuplicateRowsCount(oList, oRow) > 0;
        if (req != SYSTEM_REQUIRED && req != BUSINESS_REQUIRED || haveDuplicates) {
            movedCount++;
            if (haveDuplicates)
                GetList("SelectedAttributes").removeChild(oRow);
            else {
                var readonlyAttr = oRow.attributes.getNamedItem("ro");
                !IsNull(readonlyAttr) &&
                    readonlyAttr.value == "true" &&
                    SetReadonlyAttributes(oRow, false);
                GetList("AvailableAttributes").insertBefore(oRow, null)
            }
        }
    }
    SortList(GetList("AvailableAttributes"));
    UnselectLeft();
    SelectionChanged();
    movedCount > 0 &&
        XUI.DomUtilities.HasChildElements(oList) &&
        alert(REMOVE_REQUIRED_ATTRIBUTES_WARNING)
}

function MoveRightAll() {
    if (!IsNull(_oRow)) {
        GetRowCheckbox(_oRow).checked = false;
        UpdateRowStyle(_oRow);
        _oRow = null
    }
    for (var oList = GetList("AvailableAttributes"),
        oRowCount = oList.childNodes.length,
        i = 0;
        i < oRowCount;
        i++)
        GetList("SelectedAttributes").insertBefore(oList.childNodes[0], null);
    UnselectRight();
    SelectionChanged()
}

function MarkReadonly() {
    for (var oList = GetList("SelectedAttributes"),
        oRowCount = oList.childNodes.length,
        numberOfCheckedFields = 0,
        numberOfReadonlyFields = 0,
        i = 0;
        i < oRowCount;
        i++) {
        var oRow = oList.childNodes[i];
        if (GetRowCheckbox(oRow).checked) {
            numberOfCheckedFields++;
            var readonlyAttr = oRow.attributes.getNamedItem("ro");
            if (!IsNull(readonlyAttr) && readonlyAttr.value == "true")
                numberOfReadonlyFields++
        }
    }
    for (var shouldBeReadonly = numberOfCheckedFields > numberOfReadonlyFields,
        i = oRowCount - 1;
        i >= 0;
        i--) {
        var oRow = oList.childNodes[i];
        if (GetRowCheckbox(oRow).checked) {
            if (!shouldBeReadonly)
                for (var fieldName = oRow.attributes.getNamedItem("name").nodeValue,
                    j = 0;
                    j < oRowCount;
                    j++)
                    oList.childNodes[j].attributes.getNamedItem("name").nodeValue == fieldName &&
                        SetReadonlyAttributes(oList.childNodes[j], true);
            SetReadonlyAttributes(oRow, shouldBeReadonly)
        }
    }
}

function SetReadonlyAttributes(oRow, shouldBeReadonly) {
    oRow.setAttribute("ro", shouldBeReadonly);
    UpdateRowStyle(oRow);
    var aElement = XUI.Html.DomUtils.GetFirstChild(oRow),
        readonlyMarkExists = false,
        imgRO = XUI.Html.DomUtils.GetLastChild(aElement),
        imgRONameAttr = imgRO.attributes.getNamedItem("name"),
        haveReadonlyMark = imgRONameAttr != null && imgRONameAttr.value == "readonly_mark";
    if (shouldBeReadonly && !haveReadonlyMark) {
        var imgElementForRO = document.createElement("img");
        imgElementForRO.setAttribute("name", "readonly_mark");
        imgElementForRO.setAttribute("src", "/_imgs/frm_readonly.png");
        imgElementForRO.setAttribute("alt", FORMS_READONLY_ALTTAG);
        aElement.appendChild(imgElementForRO)
    } else
        !shouldBeReadonly &&
            haveReadonlyMark &&
            aElement.removeChild(imgRO)
}

function MoveToOtherList() {
    if (GetListName() == "AvailableAttributes")
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

function BuildFormXML(includeDisplayConditions) {
    var sXml = "<entity>";
    sXml += "<form>";
    sXml += "<tabs>";
    sXml += formatString('<tab name="general" verticallayout="true" id="{0}" {1} IsUserDefined="0">',
        CrmEncodeDecode.CrmXmlAttributeEncode(CURRENT_TAB_ID),
        GetEncodedLabelIdAttribute(CURRENT_TAB_LABEL_ID));
    sXml += "<labels></labels>";
    sXml += "<columns>";
    sXml += '<column width="100%">';
    sXml += "<sections>";
    sXml +=
        formatString('<section name="account information" showlabel="false" showbar="false" id="{0}" {1} IsUserDefined="0">', CrmEncodeDecode.CrmXmlAttributeEncode(CURRENT_SECTION_ID), GetEncodedLabelIdAttribute(CURRENT_SECTION_LABEL_ID));
    sXml += "<labels></labels>";
    sXml += "<rows>";
    sXml += "<row>";
    for (var oList = GetList("SelectedAttributes"),
        oRowCount = oList.childNodes.length,
        i = 0;
        i < oRowCount;
        i++) {
        var isDisabled = "false",
            ro = oList.childNodes[i].attributes.getNamedItem("ro");
        if (ro)
            isDisabled = oList.childNodes[i].attributes.getNamedItem("ro").value;
        sXml += formatString('<cell id="{0}" {1}>',
            CrmEncodeDecode.CrmXmlAttributeEncode(oList.childNodes[i].attributes.getNamedItem("cellid").value),
            GetEncodedLabelIdAttribute(oList.childNodes[i].attributes.getNamedItem("labelid").value));
        sXml += "<labels></labels>";
        sXml += formatString('<control id="{0}" classid="{1}" datafieldname="{0}" disabled="{2}" />',
            CrmEncodeDecode.CrmXmlAttributeEncode(oList.childNodes[i].attributes.getNamedItem("name").value),
            CrmEncodeDecode.CrmXmlAttributeEncode(oList.childNodes[i].attributes.getNamedItem("classid").value),
            CrmEncodeDecode.CrmXmlAttributeEncode(isDisabled));
        sXml += "</cell>"
    }
    sXml += "</row>";
    sXml += "</rows>";
    sXml += "</section>";
    sXml += "</sections>";
    sXml += "</column>";
    sXml += "</columns>";
    sXml += "</tab>";
    sXml += "</tabs>";
    if (includeDisplayConditions)
        sXml += DISPLAY_CONDITIONS_XML;
    sXml += "</form></entity>";
    return sXml
}

function GetEncodedLabelIdAttribute(labelId) {
    if ("" != labelId)
        return formatString('labelid="{0}"', CrmEncodeDecode.CrmXmlAttributeEncode(labelId));
    return ""
}

function HandleKeyDown(event, listName) {
    if (!CAN_CUSTOMIZE)
        return;
    var iKeyPressed = event.keyCode;
    lastKey = iKeyPressed;
    if (iKeyPressed == TAB_KEY)
        return true;
    if (IsNull(_oRow))
        return false;
    switch (iKeyPressed) {
    case LEFT_KEY:
        GetListName() == "SelectedAttributes" &&
            MoveLeft();
        break;
    case RIGHT_KEY:
        GetListName() == "AvailableAttributes" &&
            MoveRight();
        break;
    case SPACE_KEY:
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
    MoveToOtherList()
}

function UpdateRowStyle(oRow) {
    if (IsNull(oRow))
        return;
    var isReadonly = false,
        readonlyAttr = oRow.attributes.getNamedItem("ro");
    if (!IsNull(readonlyAttr) && readonlyAttr.value == "true")
        isReadonly = true;
    var isChecked = GetRowCheckbox(oRow).checked;
    if (isChecked)
        oRow.className = SelectedRowStyle;
    else
        oRow.className = RowStyle;
    if (isReadonly)
        XUI.Html.DomUtils.GetFirstChild(oRow).className = ReadonlyFieldStyle;
    else
        XUI.Html.DomUtils.GetFirstChild(oRow).className = null
}