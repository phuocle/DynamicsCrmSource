
var _oXml = XUI.Xml.CreateDocument(),
    _langCode = USER_LANGUAGE_CODE,
    isConfirmed = false;

function EnableDisableGrantButton() {
    return true
}

function EnableControlForMainBody() {
    if (!IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor) &&
        Mscrm.FormEditorVariables.fieldExpIsFor == "section")
        return true;
    else
        return false
}

function IsDashboardTabletEnabled() {
    if (!IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.isTabletEnabled) &&
        Mscrm.FormEditorVariables.isTabletEnabled.toUpperCase() === "TRUE")
        return true;
    else
        return false
}

function EnableControlForNavigation() {
    if (!IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor) &&
        Mscrm.FormEditorVariables.fieldExpIsFor == "navigation")
        return true;
    else
        return false
}

function DisableControlForNavigation() {
    if (!IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor) &&
        Mscrm.FormEditorVariables.fieldExpIsFor != "navigation")
        return true;
    else
        return false
}

function EnableDisableRemoveButton() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.removeButtonRule(_oActive)
}

function DisableIfReferencePanelSelected() {
    if (_oActive.className == Mscrm.DragDropUtils.TAB &&
        _oActive.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute("name")
        .startsWith("ref_pan_"))
        return false;
    return Mscrm &&
        Mscrm.FormEditorRibbonRules &&
        !Mscrm.FormEditorRibbonRules.isReferencePanelSectionOrControlSelected(_oActive)
}

function DisableIfHeaderOrFooterSelected() {
    return Mscrm && Mscrm.FormEditorRibbonRules && !Mscrm.FormEditorRibbonRules.isHeaderOrFooterSelected(_oActive)
}

function EnableDisablePreview() {
    if (Mscrm.FormEditorVariables.FormType == "card" || Mscrm.FormEditorVariables.FormType == "mainInteractionCentric")
        return false;
    else
        return true
}

function EnableDisableChangeProperties() {
    if (Mscrm.FormEditorVariables.FormType != "card")
        return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.changeProperties(_oActive);
    else
        return false
}

function EnableDisableUndoButton() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.undoRedoButtonRule("undo")
}

function EnableDisableRedoButton() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.undoRedoButtonRule("redo")
}

function EnableDisableIncreaseWidth() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.resizeColumnButtonRule(_oActive, true)
}

function EnableDisableDecreaseWidth() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.resizeColumnButtonRule(_oActive, false)
}

function EnableDisableIncreaseHeight() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.resizeRowButtonRule(_oActive, true)
}

function EnableDisableDecreaseHeight() {
    return Mscrm && Mscrm.FormEditorRibbonRules && Mscrm.FormEditorRibbonRules.resizeRowButtonRule(_oActive, false)
}

function EnableRequiredFieldsOnlyInHeader() {
    var objectTypeCode = GetObjectTypeCode();
    if (masterWindow().isEditMode(objectTypeCode.toString()))
        return false;
    else
        return true
}

function EnableDisableQuickViewFormButton() {
    if (typeof _isAirUpdated != "undefined" && (_isAirUpdated == "true" || _isAirUpdated == "True"))
        return true;
    else
        return false
}

function EnableDisableACIControl() {
    if (typeof _isAirUpdated != "undefined" && (_isAirUpdated == "true" || _isAirUpdated == "True"))
        return true;
    else
        return false
}

function GetGuid() {
    var sGuid = null;
    try {
        var oCommand = new RemoteCommand("SystemCustomization", "GetGuid"),
            oResult = oCommand.Execute();
        if (oResult.Success)
            sGuid = oResult.ReturnValue
    } catch (e) {
        sGuid = null
    }
    !sGuid &&
        openErrorDlg("0x80040363");
    return sGuid
}

function GetRecordsPerPage(gutterValue, rowSpan) {
    if (!IsNull(Mscrm
            .FormEditorVariables) &&
        Mscrm.FormEditorVariables.editorType === Mscrm.EditorType.dashboardEditor ||
        gutterValue > rowSpan)
        recordsPerPage = rowSpan - Math.ceil((gutterValue + 26 + 20) / 30);
    else
        recordsPerPage = rowSpan - gutterValue;
    return recordsPerPage
}

function GetGutterValue(showChartOnly, showViewSelection, showSearch, showDispOption, showIndex, isDashboard) {
    var gutter = 0;
    if (IsNull(isDashboard))
        if (!IsNull(Mscrm.FormEditorVariables))
            isDashboard = Mscrm.FormEditorVariables.editorType === Mscrm.EditorType.dashboardEditor;
        else
            isDashboard = false;
    if (!showChartOnly) {
        if (!isDashboard)
            gutter = 2;
        if (showViewSelection || showSearch || showDispOption)
            gutter = isDashboard ? showViewSelection && showSearch ? gutter + 52 : gutter + 26 : gutter++;
        if (showIndex)
            gutter = isDashboard ? gutter + 22 : gutter++
    }
    return gutter
}

function RegisterDragObject(domEvent, dragMode, passedObj) {
    if (!AllowRegisterNewObject())
        return;
    var oObj = GetObject(domEvent, passedObj);
    if (!IsNull(oObj)) {
        var attrName = oObj.attributes.getNamedItem("name");
        if (!IsNull(attrName) && attrName.nodeValue.search("spacer_System") == 0 || oObj.id.startsWith("spacer"))
            return;
        if (oObj.tagName != "IMG") {
            if (_draggedItem != null) {
                _draggedItem.dispose();
                _draggedItem = null
            }
            if (_dropItem != null) {
                _dropItem.dispose();
                _dropItem = null
            }
            _draggedItem = new Mscrm.DragSource(oObj, dragMode);
            _draggedItem.initialize()
        }
    }
}

function AllowRegisterNewObject() {
    var isObjectBeingDragged = _draggedItem != null && _draggedItem.get_isDragging();
    return !(isObjectBeingDragged &&
        (isMouseDown || Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.formEditor))
}

function GetLanguageCode() {
    if (!IsNull(Mscrm.FormEditorVariables.formAccessType) &&
        Mscrm.FormEditorVariables.formAccessType == Mscrm.EntityTypeCode.UserForm)
        return ORG_LANGUAGE_CODE;
    return USER_LANGUAGE_CODE
}

function SetActiveObject(domEvent, passedObj) {
    if (!IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.selectedStreamDiv) &&
        Mscrm.FormEditorVariables.setActiveStreamCalled != true) {
        $(Mscrm.FormEditorVariables.selectedStreamDiv).removeClass("stream-selected");
        Mscrm.FormEditorVariables.selectedStreamDiv = null
    }
    Mscrm.FormEditorVariables.setActiveStreamCalled = false;
    var oObj = GetObject(domEvent, passedObj);
    SetActive(oObj) &&
        _oActive.focus()
}

function SetFocusedElementActive(domEvent, passedObj) {
    oObj = GetObject(domEvent, passedObj);
    SetActive(oObj)
}

function SetActive(oObj) {
    if (oObj != null) {
        var className = "";
        switch (oObj.className) {
        case "ms-crm-Tab":
            className = "section";
            break;
        case "section":
        case "header":
        case "footer":
            className = oObj.className;
            break;
        case "cell":
        case "iframe":
        case "aci":
        case "powerbitile":
        case "subgrid":
        case "notes":
        case "webresource":
        case "quickformcollection":
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "interactionwall":
        case "bingmap":
        case "socialInsight":
        case "timercontrol":
        case "searchwidget":
        case "referencepanelsearchwidget":
        case "orgInsights":
            containingSection = oObj.parentNode.parentNode.parentNode;
            var attrName = oObj.attributes.getNamedItem("name");
            if (!IsNull(attrName) && attrName.nodeValue.search("spacer_System") == 0) {
                oObj = containingSection;
                className = oObj.className
            } else
                className = oObj.parentNode.parentNode.parentNode.className;
            break;
        case Mscrm.DragDropUtils.NAVGROUP:
        case Mscrm.DragDropUtils.NAVITEM:
            className = "navigation";
            break
        }
        refreshRibbon();
        if (Mscrm.FormEditorVariables.fieldExpIsFor === className) {
            if (_oActive)
                _oActive.style.border = Mscrm.FormXmlUtils.unSelectedElementBorder;
            _oActive = oObj;
            _oActive.style.border = Mscrm.FormXmlUtils.selectedElementBorder;
            Mscrm.FormEditorVariables.currentClassName = className;
            Mscrm.FormUndoRedo.addDirtyPartInfo(Mscrm.FormUndoRedo.fldExpRefreshed);
            return true
        }
    }
    return false
}

function RegUnRegDropTargets(oObj, className) {
    switch (oObj.className) {
    case "ms-crm-Tab":
        Mscrm.Register.registerTabsAsDropTargets();
        break;
    case "section":
        Mscrm.Register.registerSectionsAsDropTargets();
        break;
    case "cell":
    case "iframe":
    case "aci":
    case "powerbitile":
    case "subgrid":
    case "notes":
    case "webresource":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "timercontrol":
    case "referencepanelsearchwidget":
    case "searchwidget":
    case "orgInsights":
        switch (className) {
        case "section":
            var cellId = oObj.id,
                sectionObj = Mscrm.DragDropUtils.getContainingSection(cellId),
                secId = null;
            if (sectionObj != null)
                secId = sectionObj.getAttribute("id");
            Mscrm.Register.registerCellsAsDropTargets(secId);
            break;
        case "header":
            Mscrm.Register.registerHeaderCellsAsDropTargets();
            break;
        case "footer":
            Mscrm.Register.registerFooterCellsAsDropTargets();
            break
        }
        break;
    case "navGroup":
        Mscrm.Register.registerNavGroupsAsDropTargets();
        break;
    case "navItem":
        Mscrm.Register.registerNavGroupItemsAsDropTarget();
        break
    }
}

function GetObject(domEvent, oObj) {
    if (!IsNull(oObj)) {
        var retObj = null;
        if (oObj.tagName == "IFRAME" && oObj.id.indexOf("previewFrame") != -1) {
            retObj = oObj.parentNode;
            if (!IsNull(retObj) && retObj.className == "dashboardfield")
                retObj = retObj.parentNode.parentNode.parentNode.parentNode.parentNode;
            else
                retObj = null
        } else
            switch (oObj.className) {
            case "cell":
            case "iframe":
            case "aci":
            case "powerbitile":
            case "subgrid":
            case "notes":
            case "webresource":
            case "quickformcollection":
            case "referencepanelquickformcollection":
            case "referencepanelsubgrid":
            case "interactionwall":
            case "bingmap":
            case "socialInsight":
            case "timercontrol":
            case "searchwidget":
            case "referencepanelsearchwidget":
            case "orgInsights":
                retObj = oObj;
                break;
            default:
                retObj = null
            }
        if (!IsNull(retObj))
            return retObj
    } else if (!IsNull(domEvent))
        oObj = domEvent.target;
    else
        return null;
    if (oObj.tagName == "IMG" || oObj.tagName == "A")
        if (oObj.className == Mscrm.DashboardControls.placeholderAnchorClass)
            oObj = oObj.parentNode;
        else if (oObj.className == Mscrm.DashboardControls.placeholderImgClass)
            oObj = oObj.parentNode.parentNode;
    if (oObj.className == "imgLock")
        oObj = oObj.parentNode;
    if (oObj.getAttribute("name") == "tabHeader")
        oObj.parentNode.parentNode.parentNode.parentNode;
    if (oObj.getAttribute("name") == "tabImage" || oObj.getAttribute("name") == "tabText")
        oObj = oObj.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (oObj.getAttribute("name") == "Navigation Item" || oObj.getAttribute("name") == "Navigation Group")
        oObj = oObj.parentNode.parentNode;
    var isSysSpacer = false;
    if (oObj.tagName == "TD" || oObj.tagName == "DIV")
        switch (oObj.className) {
        case "field":
        case "previewField":
        case "field reqField":
        case "field recField":
        case "rofield":
        case "label":
        case "label ms-crm-Field-Required":
        case "label ms-crm-Field-Recommended":
        case "field reqField":
        case "field recField":
            if (Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.dashboardEditor) {
                if (oObj.tagName == "DIV")
                    oObj = oObj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                else
                    oObj = oObj.parentNode.parentNode.parentNode.parentNode.parentNode;
                containingSection = oObj.parentNode.parentNode.parentNode.parentNode
            } else {
                if (oObj.tagName == "DIV")
                    oObj = oObj.parentNode.parentNode.parentNode.parentNode.parentNode;
                else
                    oObj = oObj.parentNode.parentNode.parentNode.parentNode;
                containingSection = oObj.parentNode.parentNode.parentNode
            }
            if (oObj.getAttribute("name").search("spacer_System") == 0)
                isSysSpacer = true;
            break;
        case "section":
        case "header":
        case "footer":
        case "":
            oObj = oObj.parentNode.parentNode.parentNode;
            break
        }
    if (_bPreviewMode && (oObj.className == "section" || oObj.className.indexOf("ms-crm-Tab") != -1 || isSysSpacer))
        oObj = null;
    return oObj
}

function RefreshAttributeExplorer() {
    RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml, oPropertiesXml, oFieldsXml)
}

function GetDescByLangCode(oObjs) {
    for (var iLen = oObjs.length,
        i = 0;
        i < iLen;
        i++)
        if (oObjs[i].LanguageCode == _langCode)
            return oObjs[i].Description;
    return ""
}

function GetLocalizedObjsArray(oNodes) {
    for (var oObjs = [],
        oNode,
        iLen = oNodes.length,
        i = 0;
        i < iLen;
        i++) {
        oNode = oNodes[i];
        oObjs[i] = new LocalizedObj(oNode.getAttribute("description"), oNode.getAttribute("languagecode"))
    }
    return oObjs
}

function GetEventObjsArray(oNodes) {
    for (var oObjs = [],
        oNode,
        j,
        iLen = oNodes.length,
        oDependsNodes,
        oDNode,
        i = 0;
        i < iLen;
        i++) {
        oNode = oNodes[i];
        oDependsNodes = XUI.Xml.SelectNodes(oNode, "dependencies/dependency", null);
        iDependsLen = oDependsNodes.length;
        var oDependsAry = new Array(iDependsLen);
        for (j = 0; j < iDependsLen; j++)
            oDependsAry[j] = oDependsNodes[j].getAttribute("id");
        oObjs[i] = new EventObj(oNode.getAttribute("name"),
            oNode.getAttribute("active") == "true",
            oNode.getAttribute("application") == "true",
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oNode, "script", null)),
            oDependsAry)
    }
    if (oObjs.length == 0)
        oObjs = null;
    return oObjs
}

function GetParameterBag(oNodes) {
    if (oNodes == null || oNodes.length == 0)
        return null;
    for (var oObjs = {},
        oNode,
        iLen = oNodes.length,
        i = 0;
        i < iLen;
        i++) {
        oNode = oNodes[i];
        oObjs[oNode.tagName] = XUI.Xml.GetText(oNode)
    }
    return oObjs
}

function PersistLocalizedNodes(oXml, sExpr, oObjs) {
    for (var oObj,
        oParentNode,
        oNode,
        iLen = oObjs.length,
        i = 0;
        i < iLen;
        i++) {
        oObj = oObjs[i];
        oNode = XUI.Xml.SelectSingleNode(oXml, sExpr + "[@languagecode = '" + oObj.LanguageCode + "']", null);
        if (oNode)
            oNode.setAttribute("description", oObj.Description);
        else {
            oParentNode = XUI.Xml.SelectSingleNode(oXml, sExpr.substring(0, sExpr.lastIndexOf("/"), null));
            oNode = oXml.createElement(sExpr.substr(sExpr.lastIndexOf("/") + 1));
            oNode.setAttribute("description", oObj.Description);
            oNode.setAttribute("languagecode", oObj.LanguageCode);
            oParentNode.appendChild(oNode)
        }
    }
}

function GetCurrentTabObject() {
    for (var iLen = tabs.children.length,
        i = 0;
        i < iLen;
        i++) {
        var curTabObject = XUI.Html.DomUtils.GetFirstChild(tabs.children[i]);
        if ("ms-crm-Tab" == curTabObject.className)
            return curTabObject
    }
}

function GetCurrentTabName(oActive) {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        return null;
    if (oActive.parentNode.className == "ms-crm-Tab ms-crm-Tab-Selected")
        oActive = oActive.parentNode;
    switch (oActive.className) {
    case "ms-crm-Tab":
        return oActive.id;
        break;
    case "section":
        return oActive.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.parentNode.parentNode.parentNode.id;
        break;
    case "cell":
    case "iframe":
    case "aci":
    case "powerbitile":
    case "subgrid":
    case "notes":
    case "webresource":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
    case "orgInsights":
        return oActive.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        break
    }
}

function GetCurrentSectionName(oActive) {
    if (oActive.parentNode.className == "ms-crm-Tab ms-crm-Tab-Selected")
        oActive = oActive.parentNode;
    switch (oActive.className) {
    case "ms-crm-Tab":
        return oActive.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].id;
        break;
    case "section":
    case "header":
    case "footer":
        return oActive.id;
        break;
    case "cell":
    case "iframe":
    case "aci":
    case "powerbitile":
    case "subgrid":
    case "notes":
    case "webresource":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
    case "orgInsights":
        return oActive.parentNode.parentNode.parentNode.id;
        break
    }
}

function GetTabId(sTabName) {
    for (var iLen = tabs.children.length,
        i = 0;
        i < iLen;
        i++) {
        var curTabObject = XUI.Html.DomUtils.GetFirstChild(tabs.children[i]);
        if (sTabName == curTabObject.getAttribute("name"))
            return curTabObject.id
    }
}

function GetTabName(sTabId) {
    for (var iLen = tabs.children.length,
        i = 0;
        i < iLen;
        i++) {
        var curTabObject = XUI.Html.DomUtils.GetFirstChild(tabs.children[i]);
        if (curTabObject.id == sTabId)
            return curTabObject.getAttribute("name")
    }
}

function ClickTabByName(sTabName) {
    for (var iLen = tabs.children.length,
        i = 0;
        i < iLen;
        i++) {
        var curTabObject = XUI.Html.DomUtils.GetFirstChild(tabs.children[i]);
        if (sTabName == curTabObject.getAttribute("name")) {
            Mscrm.Utilities.click(curTabObject);
            break
        }
    }
}

function clickTab(tabId) {
    var tabDom = $get(tabId);
    !IsNull(tabDom) &&
        Mscrm.Utilities.click(tabDom)
}

var CellWithEmptyText = function(element) {
    if (!element || element.className !== Mscrm.DragDropUtils.CELL)
        return false;
    var text = XUI.Html.GetText(element);
    return !text || !text.length
};

function ViewPropertiesNow(domEvent, passedObj) {
    var oObj = GetObject(domEvent, passedObj);
    if (CellWithEmptyText(oObj))
        return;
    SetActive(oObj);
    oObj != null &&
        ViewProperties(domEvent, _oActive, passedObj)
}

function SwitchToFormHeader() {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "header") {
        var headerObj = document.getElementById("Header");
        SwitchFormSections("header", headerObj);
        $get("headerSection").scrollIntoView(true);
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.Utilities.click(headerObj)
    }
}

function SwitchToFormFooter() {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "footer") {
        var footerObj = document.getElementById("Footer");
        SwitchFormSections("footer", footerObj);
        $get("footerSection").scrollIntoView(false);
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.Utilities.click(footerObj)
    }
}

function SwitchToFormBody() {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section") {
        var mainForm = document.getElementById("tabs");
        SwitchFormSections("section", null);
        if (Mscrm.Utilities.isIE())
            mainForm.focus();
        else
            mainForm.scrollIntoView(true);
        mainForm.scrollIntoView(true);
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.TabUtils.clickFirstTab()
    }
}

function removeMultipleNotesControl() {
    var notesControlNode = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "//control[@classid='{06375649-C143-495E-A496-C962E5B4488E}' or @classid='{06375649-c143-495e-a496-c962e5b4488e}']",
        null);
    if (!IsNull(notesControlNode) && notesControlNode.length > 1)
        for (var i = notesControlNode.length - 1; i > 0; i--) {
            var parentRow = notesControlNode[i].parentNode.parentNode;
            !IsNull(parentRow) &&
                parentRow.parentNode.removeChild(parentRow)
        }
}

function UpdateLabelsForNodes(tabNode) {
    tabNode.setAttribute("labelid", Mscrm.Utilities.createGuid());
    for (var labelSectionNodesCollection = tabNode.getElementsByTagName("section"),
        i = 0;
        i < labelSectionNodesCollection.length;
        i++)
        labelSectionNodesCollection[i].setAttribute("labelid", Mscrm.Utilities.createGuid());
    for (var labelCellNodesCollection = tabNode.getElementsByTagName("cell"),
        i = 0;
        i < labelCellNodesCollection.length;
        i++)
        labelCellNodesCollection[i].setAttribute("labelid", Mscrm.Utilities.createGuid())
}

function CanMergeForms() {
    if (Mscrm.FormEditorVariables.FormType == "mainInteractionCentric")
        return true;
    else
        return EnableMergeButton()
}

function SwitchToModernLayout() {
    var oUrl = Mscrm.CrmUri.create("/_controls/lookup/lookupinfo.aspx");
    oUrl += "";
    if (oUrl.indexOf("?") != -1)
        oUrl += "&";
    else
        oUrl += "?";
    oUrl +=
        "AllowFilterOff=0&DisableViewPicker=1&DisableQuickFind=0&LookupStyle=single&ShowNewButton=0&ShowPropButton=1&browse=false&dType=1&objecttypes=1030&objectTypeCode=" + _objectTypeCode;
    var executeCallBack = function(lookupItems) {
            if (lookupItems == null)
                return;
            var newId = lookupItems.items[0].id,
                result = RetrieveForm(newId).ReturnValue,
                _formXmlString = result.string[0];
            if (IsNull(_formXmlString))
                return false;
            if (lookupItems.items[0].type != "2") {
                alert(invalidFormTypeSelectedText);
                return
            }
            if (result.string[1] != "0") {
                alert(invalidFormPresentationSelectedText);
                return
            }
            var selectedFormXml = XUI.Xml.LoadXml(_formXmlString),
                currentXmlEventsCount = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/events/event",
                    null).length,
                selectedXmlEventscount = XUI.Xml.SelectNodes(selectedFormXml, "/entity/form/events/event", null).length;
            if (currentXmlEventsCount + selectedXmlEventscount > 50) {
                alert(String.format(LOCID_FORMED_EVENTSMORETHANLIMIT, currentXmlEventsCount + selectedXmlEventscount));
                return false
            }
            oTabs = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs", null);
            var selectedXmlHeaderNode = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/header", null);
            if (!IsNull(selectedXmlHeaderNode)) {
                var newHeaderRow = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/header/rows", null),
                    newHeaderTab = CreateTab(newHeaderRow, String.format(newHeaderText, result.string[2]));
                UpdateLabelsForNodes(newHeaderTab);
                oTabs.appendChild(newHeaderTab)
            }
            for (var selectedXmlBody = XUI.Xml.SelectNodes(selectedFormXml, "/entity/form/tabs/tab", null),
                bodyTabsCount = selectedXmlBody.length,
                i = 0;
                i < bodyTabsCount;
                i++) {
                UpdateLabelsForNodes(selectedXmlBody[i]);
                oTabs.appendChild(selectedXmlBody[i])
            }
            var selectedXmlFooterNode = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/footer", null);
            if (!IsNull(selectedXmlFooterNode)) {
                var newFooterRow = XUI.Xml.SelectSingleNode(selectedFormXml, "/entity/form/footer/rows", null),
                    newFooterTab = CreateTab(newFooterRow, String.format(newFooterText, result.string[2]));
                UpdateLabelsForNodes(newFooterTab);
                oTabs.appendChild(newFooterTab)
            }
            var selectedXmlHiddenControls = XUI.Xml
                    .SelectSingleNode(selectedFormXml, "/entity/form/hiddencontrols", null),
                currentXmlHiddenControls = XUI.Xml
                    .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/hiddencontrols", null);
            if (!(IsNull(currentXmlHiddenControls) || IsNull(selectedXmlHiddenControls)))
                currentXmlHiddenControls = CheckDuplicates(currentXmlHiddenControls, selectedXmlHiddenControls, "id");
            else
                IsNull(currentXmlHiddenControls) &&
                    !IsNull(selectedXmlHiddenControls) &&
                    XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null)
                    .appendChild(selectedXmlHiddenControls);
            var selectedXmlFormParameters = XUI.Xml
                    .SelectSingleNode(selectedFormXml, "/entity/form/formparameters ", null),
                currentXmlFormParameters = XUI.Xml
                    .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/formparameters ", null);
            if (!(IsNull(currentXmlFormParameters) || IsNull(selectedXmlFormParameters)))
                currentXmlFormParameters = CheckDuplicates(currentXmlFormParameters, selectedXmlFormParameters, "id");
            else
                IsNull(currentXmlFormParameters) &&
                    !IsNull(selectedXmlFormParameters) &&
                    XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null)
                    .appendChild(selectedXmlFormParameters);
            removeMultipleNotesControl();
            MergeEvents(selectedFormXml);
            MergeResources(selectedFormXml);
            RefreshFormEditor(Mscrm.Render.wholeCanvas);
            isMergeButtonClicked = true;
            _iTabs = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs/tab", null).length;
            refreshRibbon();
            alert(LOCID_FORMED_MODERNLAYOUTMERGE);
            SetActiveObject(null, $get(XUI.Html.DomUtils.GetFirstChild(oTabs).getAttribute("id")))
        },
        options = new Xrm.DialogOptions;
    options.width = 600;
    options.height = 600;
    Xrm.Internal.openDialog(oUrl.toString(), options, null, null, executeCallBack)
}

function SwitchToFormNavigation() {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "navigation") {
        var navInformationNode = Mscrm.FormNavigationUtils.getFirstGroupOfNavigation();
        SwitchFormSections("navigation", navInformationNode);
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.Utilities.click(navInformationNode)
    }
}

function SwitchFormSections(className, oObj) {
    Mscrm.FormUtils.toggleExplorerCaption(className);
    Mscrm.FormEditorVariables.fieldExpIsFor = className;
    if (className == Mscrm.FormNavigationUtils.NAVIGATION)
        RefreshRelationShipExplorer();
    else if (className == Mscrm.BusinessRulesExplorer.businessRuleExplorer)
        Mscrm.BusinessRulesExplorer.refreshBusinessRulesExplorer();
    else
        RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml, oPropertiesXml, oFieldsXml);
    Mscrm.TabUtils.enableDisableFormParts();
    refreshRibbon();
    AdjustNotificationOnFormEditor()
}

function AdjustNotificationOnFormEditor() {
    var notificationDiv = $get("Notifications");
    if (notificationDiv == null)
        return;
    var formDesigner = $get("formDesigner"),
        attrExp = $get("attrExp");
    formDesigner.style.top = notificationDiv.offsetHeight + "px";
    formDesigner.style.bottom = "0px";
    attrExp.style.top = notificationDiv.offsetHeight + "px";
    attrExp.style.bottom = "0px"
}

function EditDashboardProperties() {
    var args = {},
        dashName = Mscrm.FormControlInputBehavior.GetBehavior("dashboardNameInput"),
        dashboardName = "";
    if (!IsNull(dashName))
        dashboardName = dashName.get_element().value;
    args.sName = dashboardName;
    var dashDesc = Mscrm.FormControlInputBehavior.GetBehavior("dashboardDescriptionInput"),
        dashboardDesc = "";
    if (!IsNull(dashDesc))
        dashboardDesc = dashDesc.get_element().value;
    args.sDescription = dashboardDesc;
    args.sIsTabletEnabled = Mscrm.FormEditorVariables.isTabletEnabled;
    args.sFormId = Mscrm.FormEditorVariables.formId;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 320;
    dialogOptions.width = 500;
    var callbackParameters = [dashName, dashDesc],
        callback = Mscrm.Utilities.createCallbackFunctionForXrmDialog(updateDashboardProperties, callbackParameters);
    Xrm.Internal.openDialog(Mscrm.CrmUri
        .create("/AdvancedFind/QueryProperties.aspx?feature=dashboard&istabletenabled=" +
            Mscrm.FormEditorVariables.isTabletEnabled).toString(),
        dialogOptions,
        args,
        null,
        callback);
    return
}

function updateDashboardProperties(updatedSectionObject, dashName, dashDesc) {
    if (IsNull(updatedSectionObject))
        return;
    dashName.set_elementValue(updatedSectionObject.sName);
    dashDesc.set_elementValue(updatedSectionObject.sDescription);
    Mscrm.FormEditorVariables.isTabletEnabled = updatedSectionObject.sIsTabletEnabled.toString();
    refreshRibbon()
}

function isStreamOrTile(oActive) {
    var oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (!IsNull(oFormCell.getAttribute("isstreamcell")) && oFormCell.getAttribute("isstreamcell") == "true")
        return true;
    if (!IsNull(oFormCell.getAttribute("istilecell")) && oFormCell.getAttribute("istilecell") == "true")
        return true;
    return false
}

function ViewPropertiesOfControl() {
    ViewProperties(null, _oActive)
}

function ViewProperties(domEvent, oActive, passedObj) {
    if (domEvent != null)
        oActive = GetObject(domEvent, passedObj);
    if (oActive != null) {
        if (Mscrm.Utilities.isEdge())
            Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
        if (Mscrm.OperationValidator.isOperationValid(Mscrm.EditorOperations.changeProperties, _oActive, null, null)) {
            var className = "";
            switch (oActive.className) {
            case "ms-crm-Tab":
                className = "section";
                break;
            case "section":
            case "header":
            case "footer":
                className = oActive.className;
                break;
            case "powerbitile":
                if (window.top.isOutlookHostedWindow())
                    return;
                else
                    className = oActive.parentNode.parentNode.parentNode.className;
                break;
            case "cell":
            case "iframe":
            case "aci":
            case "subgrid":
            case "notes":
            case "webresource":
            case "quickformcollection":
            case "referencepanelquickformcollection":
            case "referencepanelsubgrid":
            case "interactionwall":
            case "bingmap":
            case "socialInsight":
            case "timercontrol":
            case "searchwidget":
            case "referencepanelsearchwidget":
            case "orgInsights":
                className = oActive.parentNode.parentNode.parentNode.className;
                break;
            case Mscrm.DragDropUtils.NAVGROUP:
            case Mscrm.DragDropUtils.NAVITEM:
                className = "navigation"
            }
            if (Mscrm.FormEditorVariables.fieldExpIsFor != className && className != "") {
                SwitchFormSections(className, oActive);
                Mscrm.FormUtils.makeFormXmlDirty();
                Mscrm.Utilities.click(oActive)
            } else {
                if (oActive.parentNode.className == "ms-crm-Tab")
                    oActive = oActive.parentNode;
                switch (oActive.className) {
                case "ms-crm-Tab":
                    UpdateTab(oActive);
                    break;
                case "section":
                case "header":
                case "footer":
                    UpdateSection(oActive);
                    break;
                case "cell":
                    !oActive.getAttribute("name").startsWith("spacer_") &&
                        (className != "header" || className != "footer") &&
                        !isStreamOrTile(oActive) &&
                        UpdateField(oActive);
                    break;
                case "iframe":
                case "aci":
                case "powerbitile":
                case "webresource":
                case "bingmap":
                case "socialInsight":
                case "timercontrol":
                case "searchwidget":
                case "referencepanelsearchwidget":
                    UpdateIFrame(oActive);
                    break;
                case "orgInsights":
                    UpdateSubGridOrgInsights(oActive, true);
                    break;
                case "quickformcollection":
                    UpdateQuickFormCollection(oActive);
                    break;
                case "referencepanelquickformcollection":
                    UpdateQuickFormCollection(oActive);
                    break;
                case "referencepanelsubgrid":
                    UpdateSubGrid(oActive);
                    break;
                case "interactionwall":
                    break;
                case "subgrid":
                    UpdateSubGrid(oActive);
                    break;
                case "notes":
                    UpdateField(oActive);
                    break;
                case Mscrm.DragDropUtils.NAVGROUP:
                case Mscrm.DragDropUtils.NAVITEM:
                    Mscrm.FormNavigationUtils.updateNavItem();
                    break
                }
            }
        }
    } else
        alert(LOCID_FORMED_MUSTSELECT)
}

function getAnchorElement(cellType) {
    var newAnchor = document.createElement("a");
    newAnchor.setAttribute("tabindex", "10");
    newAnchor.setAttribute("class", "PlaceholderAnchor");
    newAnchor.setAttribute("type", "placeholder");
    if (cellType === "queues") {
        newAnchor.setAttribute("id", "QueuesLink");
        newAnchor.setAttribute("onclick",
            "Mscrm.PreviewCellUtils.addQueuesFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true)");
        newAnchor.setAttribute("ondblclick",
            "Mscrm.PreviewCellUtils.stopPropagationFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event))");
        newAnchor.innerHTML = "<img title='' class='PlaceholderImg' alt='' src='/_imgs/dashboard/queue.gif'/>"
    } else if (cellType === "tiles") {
        newAnchor.setAttribute("id", "TilesLink");
        newAnchor.setAttribute("onclick",
            "Mscrm.PreviewCellUtils.addTilesFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true)");
        newAnchor.innerHTML = "<img title='' class='PlaceholderImg' alt='' src='/_imgs/dashboard/tiles.gif'/>"
    } else if (cellType === "charts") {
        newAnchor.setAttribute("id", "ChartsLink");
        newAnchor.setAttribute("onclick",
            "Mscrm.PreviewCellUtils.addSubgridFromPlaceHolder(Mscrm.Utilities.eventToDomEvent(event), true, true)");
        newAnchor.innerHTML = "<img title='' class='PlaceholderImg' alt='' src='/_imgs/dashboard/chart.png'/>"
    }
    return newAnchor
}

function removeFormXml(cellType, id, streamCellId) {
    if (cellType === "queues") {
        if (!IsNull(id)) {
            var streamObjectXml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell/control[@classid = '{EE9078C8-6946-4E2C-B8F8-35E65F4BE6A8}']/parameters/StreamObjects/StreamObject[@id = '" + id + "']",
                null);
            !IsNull(streamObjectXml) &&
                streamObjectXml.parentNode.removeChild(streamObjectXml)
        }
        if (Mscrm.FormEditorVariables.streamsCount == 0) {
            if (!IsNull(streamCellId)) {
                var streamCellElement = document.getElementById(streamCellId);
                if (!IsNull(streamCellElement) && !IsNull(streamCellElement.querySelector("a"))) {
                    var parentElement = streamCellElement.querySelector("a").parentNode;
                    parentElement.innerHTML = "";
                    parentElement.appendChild(getAnchorElement("queues"));
                    Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR1 &&
                        parentElement.setAttribute("class", "previewField")
                }
            }
            var streamCell = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell",
                    null),
                streamXml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell/control",
                    null);
            streamCell.setAttribute("ispreviewcell", "true");
            XUI.Xml.SetText(streamXml, "")
        }
        Mscrm.FormEditorVariables.selectedStreamDiv = null;
        refreshRibbon()
    } else if (cellType === "tiles") {
        var tileCell = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Tiles']/rows/row/cell[@id = '" + id + "']",
                null),
            tileXml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Tiles']/rows/row/cell[@id = '" + id + "']/control",
                null);
        tileCell.setAttribute("ispreviewcell", "true");
        XUI.Xml.SetText(tileXml, "")
    } else if (cellType === "charts") {
        var chartCell = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab/columns/column/sections/section[@name = 'VisualFilters']/rows/row/cell[@id = '" + id + "']",
                null),
            chartXml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab/columns/column/sections/section[@name = 'VisualFilters']/rows/row/cell[@id = '" + id + "']/control",
                null);
        chartCell.setAttribute("ispreviewcell", "true");
        XUI.Xml.SetText(chartXml, "")
    }
}

function removeChartsForTier2() {
    for (var chartCells = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                 "//entity/form/tabs/tab/columns/column/sections/section[@name = 'VisualFilters']/rows/row/cell",
                 null),
        i = 0;
        i < chartCells.length;
        i++) {
        var id = chartCells[i].getAttribute("id"),
            chartCellElement = document.getElementById(id),
            parentElement = chartCellElement.querySelector("img").parentNode,
            grandParent = null;
        if (parentElement != null)
            grandParentElement = parentElement.parentNode;
        if (grandParentElement != null) {
            grandParentElement.style.verticalAlign = "";
            grandParentElement.innerHTML = "";
            grandParentElement.appendChild(getAnchorElement("charts"));
            removeFormXml("charts", id, null)
        }
    }
}

function getSerializedString(node) {
    var tabsHtml;
    if (typeof node.outerHTML !== "undefined")
        tabsHtml = node.outerHTML;
    else if (typeof node.xml !== "undefined")
        tabsHtml = node.xml;
    else if (typeof window.XMLSerializer !== "undefined") {
        var serializer = new XMLSerializer;
        if (node != "")
            tabsHtml = serializer.serializeToString(node)
    }
    return tabsHtml
}

function chartControlsPresent() {
    var chartSection = chartsSection(),
        tabsHtml = getSerializedString(chartSection);
    if (tabsHtml != null)
        return tabsHtml.indexOf("parameters") > -1 ? true : false;
    else
        return false
}

function isCellPresent(node, id) {
    var tabsHtml = getSerializedString(node);
    if (tabsHtml != null)
        if (tabsHtml.indexOf(id) > -1)
            return true;
        else
            return false;
    else
        return false
}

function IsStreamOrTileSelected() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.selectedStreamDiv))
        return true;
    else
        return false
}

function Delete() {
    if (typeof Mscrm.FormEditorVariables.supportInteractionCentric != "undefined" &&
        Mscrm.FormEditorVariables.supportInteractionCentric === "True") {
        var isStreamCell = false,
            isTileCell = false,
            isChartCell = false,
            isStreamObject = false,
            id = _oActive.getAttribute("id");
        if (Mscrm.FormEditorVariables.selectedStreamDiv != null)
            isStreamObject = true;
        else {
            isStreamCell = isCellPresent(streamsSection(), id);
            if (!isStreamCell) {
                isTileCell = isCellPresent(tilesSection(), id);
                if (!isTileCell)
                    isChartCell = isCellPresent(chartsSection(), id)
            }
        }
        if (isStreamCell || isStreamObject) {
            if (isStreamObject) {
                var streamObjectId = Mscrm.FormEditorVariables.selectedStreamDiv.getAttribute("id");
                $(Mscrm.FormEditorVariables.selectedStreamDiv).remove();
                if (Mscrm.FormEditorVariables.streamsCount > 0)
                    Mscrm.FormEditorVariables.streamsCount--;
                removeFormXml("queues", streamObjectId, id)
            } else {
                Mscrm.FormEditorVariables.streamsCount = 0;
                removeFormXml("queues", null, id)
            }
            Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2 &&
                removeChartsForTier2()
        } else if (isTileCell) {
            var tileCellElement = document.getElementById(id),
                parentElement = tileCellElement.querySelector("a").parentNode;
            parentElement.innerHTML = "";
            parentElement.appendChild(getAnchorElement("tiles"));
            removeFormXml("tiles", id, null)
        } else if (isChartCell) {
            var chartCellElement = document.getElementById(id),
                parentElement = chartCellElement.querySelector("img").parentNode,
                grandParent = null;
            if (parentElement != null)
                grandParentElement = parentElement.parentNode;
            if (grandParentElement != null) {
                grandParentElement.style.verticalAlign = "";
                grandParentElement.innerHTML = "";
                grandParentElement.appendChild(getAnchorElement("charts"));
                removeFormXml("charts", id, null)
            }
        }
        return
    }
    Remove(_oActive)
}

function Remove(oActive) {
    oActive = _oActive;
    if (oActive != null) {
        if (Mscrm.Utilities.isEdge())
            Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
        if (oActive.parentNode.className == "ms-crm-Tab ms-crm-Tab-Selected")
            oActive = oActive.parentNode;
        switch (oActive.className) {
        case "ms-crm-Tab":
            if (confirm(LOCID_FORMED_CONFIRMREMOVETAB))
                return RemoveTab(oActive);
            break;
        case "section":
            return RemoveSection(oActive);
            break;
        case "cell":
        case "iframe":
        case "aci":
        case "powerbitile":
        case "subgrid":
        case "notes":
        case "webresource":
        case "quickformcollection":
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "interactionwall":
        case "bingmap":
        case "socialInsight":
        case "timercontrol":
        case "searchwidget":
        case "referencepanelsearchwidget":
        case "orgInsights":
            return RemoveField(oActive, true);
            break;
        case Mscrm.FormNavigationUtils.naV_ITEM_CLASS:
            Mscrm.FormNavigationUtils.removeNavItem();
            break
        }
    } else
        alert(LOCID_FORMED_MUSTSELECT);
    return false
}

function IsRemovable(oNodes) {
    for (var sFieldName,
        j,
        iLen = oNodes.length,
        isCompositeFieldRequired = false,
        i = 0;
        i < iLen;
        i++) {
        sFieldName = oNodes[i].getAttribute("id");
        if (sFieldName) {
            var oCell = Mscrm.DragDropUtils.getCellNode(sFieldName),
                formXmlPath = null;
            if (Mscrm.FormEditorVariables.fieldExpIsFor != "section") {
                formXmlPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows";
                sFieldName = sFieldName.substring(7, sFieldName.length)
            } else
                formXmlPath = "/entity/form/tabs/tab/columns/column/sections/section/rows";
            if (oCell.getAttribute("locklevel") == "1")
                return false;
            var oFieldNode;
            if (oFieldsXml)
                oFieldNode = XUI.Xml.SelectSingleNode(oFieldsXml,
                    "/entity/fields/field[@name = '" + sFieldName + "']",
                    null);
            var checkRequired = Mscrm.FormEditorVariables.fieldExpIsFor === Mscrm.DragDropUtils.MAIN;
            if (EnableRequiredFieldsOnlyInHeader())
                checkRequired = checkRequired || Mscrm.FormEditorVariables.fieldExpIsFor === Mscrm.DragDropUtils.HEADER;
            if (checkRequired)
                if (!_bPreviewMode && oFieldNode) {
                    if (RequiredForPlatform(oFieldNode))
                        return false;
                    if (!IsFieldPartOfCompositeControl(sFieldName)) {
                        if (!IsCompositeFieldAndAllowedForRemoval(sFieldName))
                            return false;
                        if (RequiredForForm(oFieldNode))
                            return false;
                        if (IsFieldRequired(sFieldName))
                            return false
                    }
                }
        }
    }
    return true
}

function RemoveControlDescriptorsForNodes(nodes) {
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile)) {
        var controlDescriptionsTagXmlNode = XUI.Xml
            .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "entity/form/controlDescriptions", null);
        for (i = 0; i < nodes.length; i++) {
            var classId = nodes[i].getAttribute("classid");
            if (classId == _ControlClassIds.customControl) {
                var controlDescriptor = XUI.Xml
                    .SelectSingleNode(controlDescriptionsTagXmlNode,
                        "controlDescription[@forControl='" + nodes[i].getAttribute("uniqueid") + "']",
                        null);
                controlDescriptionsTagXmlNode.removeChild(controlDescriptor)
            }
        }
    }
}

function RequiredForPlatform(oFieldNode) {
    return oFieldNode.getAttribute("requiredforplatform") == "true" &&
    (oFieldNode.getAttribute("validforcreateapi") == "true" ||
        oFieldNode.getAttribute("validforupdateapi") == "true")
}

function RequiredForForm(oFieldNode) {
    return oFieldNode && oFieldNode.getAttribute("requiredforform") == "true"
}

function IsFieldRequired(sFieldName) {
    return oPropertiesXml &&
        XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oPropertiesXml,
            "/entity/fields/field[@name = '" + sFieldName + "']/@requiredlevel",
            null)) ==
        "required"
}

function IsCompositeFieldAndAllowedForRemoval(sFieldName) {
    var isRequired = false;
    if (FieldIsCompositeControl(sFieldName)) {
        var constituentfields = Mscrm.FormLibraryAndEventHandlerUtils.getConstituentFields(sFieldName);
        for (j = 0; j < constituentfields.length; j++) {
            var childNode = XUI.Xml.SelectSingleNode(oFieldsXml,
                "/entity/fields/field[@name = '" + constituentfields[j] + "']",
                null);
            if (IsRequired(childNode, constituentfields[j])) {
                var childFieldOnForm = GetCellNode(constituentfields[j]);
                if (childFieldOnForm == null)
                    return false
            }
        }
        return true
    } else
        return true
}

function IsRequired(xmlNode, constituentFieldName) {
    return RequiredForPlatform(xmlNode) || RequiredForForm(xmlNode) || IsFieldRequired(constituentFieldName)
}

function FieldIsCompositeControl(sFieldName) {
    switch (sFieldName) {
    case "fullname":
    case "yomifullname":
    case "address1_composite":
    case "address2_composite":
    case "billto_composite":
    case "shipto_composite":
        return true;
    default:
        return false
    }
}

function IsFieldPartOfCompositeControl(sFieldName) {
    var oCompositeFieldNode,
        compositeFieldName;
    switch (sFieldName) {
    case "firstname":
    case "middlename":
    case "lastname":
        compositeFieldName = "fullname";
        break;
    case "yomifirstname":
    case "yomimiddlename":
    case "yomilastname":
        compositeFieldName = "yomifullname";
        break;
    case "address1_line1":
    case "address1_line2":
    case "address1_line3":
    case "address1_city":
    case "address1_stateorprovince":
    case "address1_state":
    case "address1_country":
        compositeFieldName = "address1_composite";
        break;
    case "address2_line1":
    case "address2_line2":
    case "address2_line3":
    case "address2_city":
    case "address2_stateorprovince":
    case "address2_state":
    case "address2_country":
        compositeFieldName = "address2_composite";
        break;
    case "billto_line1":
    case "billto_line2":
    case "billto_line3":
    case "billto_city":
    case "billto_stateorprovince":
    case "billto_postalcode":
    case "billto_country":
        compositeFieldName = "billto_composite";
        break;
    case "shipto_line1":
    case "shipto_line2":
    case "shipto_line3":
    case "shipto_city":
    case "shipto_stateorprovince":
    case "shipto_postalcode":
    case "shipto_country":
        compositeFieldName = "shipto_composite";
        break
    }
    oCompositeFieldNode = GetCellNode(compositeFieldName);
    if (oCompositeFieldNode == null)
        return false;
    else
        return true
}

function IsDependent(oNodes) {
    for (var sFieldName,
        iLen = oNodes.length,
        i = 0;
        i < iLen;
        i++) {
        sFieldName = oNodes[i].getAttribute("id");
        if (sFieldName) {
            if (XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id = '" + sFieldName + "']",
                    null).length >
                0)
                return true;
            if (XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/events/event/dependencies/dependency[@id = '" + sFieldName + "']",
                    null).length >
                0)
                return true;
            if (XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/externaldependencies/dependency[@id = '" + sFieldName + "']",
                    null).length >
                0)
                return true
        }
    }
    return false
}

function GetDependentList(oNodes, bIncludeFieldName) {
    for (var sFieldName,
        sfieldList = "",
        oDependents = [],
        j,
        iIndex = 0,
        iLen = oNodes.length,
        i = 0;
        i < iLen;
        i++) {
        sFieldName = oNodes[i].getAttribute("id");
        if (sFieldName) {
            var oDependentNodes = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id = '" + sFieldName + "']",
                    null),
                iDepLen = oDependentNodes.length;
            for (j = 0; j < iDepLen; j++) {
                var controlParentNode = oDependentNodes[j].parentNode.parentNode.parentNode.parentNode,
                    oControl = XUI.Xml.SelectSingleNode(controlParentNode, "control", null),
                    bSystem = oDependentNodes[j].parentNode.parentNode.getAttribute("application") == "true",
                    dependencyName = oControl.getAttribute("id");
                if (dependencyName.substr(0, 7) == "IFRAME_")
                    oDependents[iIndex++] = new DependencyObj(sFieldName, "iframe", dependencyName, bSystem);
                else
                    oDependents[iIndex++] = new DependencyObj(sFieldName, "field", dependencyName, bSystem)
            }
            oDependentNodes = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab/events/event/dependencies/dependency[@id = '" + sFieldName + "']",
                null);
            iDepLen = oDependentNodes.length;
            for (j = 0; j < iDepLen; j++) {
                var bSystem = oDependentNodes[j].parentNode.parentNode.getAttribute("application") == "true";
                oDependents[iIndex++] = new DependencyObj(oDependentNodes[j].parentNode.parentNode.parentNode.parentNode
                    .getAttribute("name"),
                    "tab",
                    oDependentNodes[j].parentNode.parentNode.getAttribute("name"),
                    bSystem)
            }
            oDependentNodes = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                "/entity/form/events/event/dependencies/dependency[@id = '" + sFieldName + "']",
                null);
            iDepLen = oDependentNodes.length;
            for (j = 0; j < iDepLen; j++) {
                var bSystem = oDependentNodes[j].parentNode.parentNode.getAttribute("application") == "true",
                    attribute = oDependentNodes[j].parentNode.parentNode.getAttribute("attribute");
                if (!IsNull(attribute))
                    oDependents[iIndex++] = new DependencyObj(sFieldName, "field", attribute, bSystem);
                else
                    oDependents[iIndex++] = new
                        DependencyObj(sFieldName,
                            "form",
                            oDependentNodes[j].parentNode.parentNode.getAttribute("name"),
                            bSystem)
            }
            oDependentNodes = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                "/entity/form/externaldependencies/dependency[@id = '" + sFieldName + "']",
                null);
            iDepLen = oDependentNodes.length;
            for (j = 0; j < iDepLen; j++)
                oDependents[iIndex++] = new DependencyObj(sFieldName, "external", "", false)
        }
    }
    iDepLen = oDependents.length;
    for (i = 0; i < iDepLen; i++) {
        var sFieldLocName = bIncludeFieldName ? GetFieldDisplayName(oDependents[i].FieldName) + " - " : "",
            sDependencyType = oDependents[i].System ? LOCID_FORMED_SYSTEMDEP : LOCID_FORMED_CUSTOMDEP;
        switch (oDependents[i].Type) {
        case "field":
            sfieldList += formatString(LOCID_FORMED_FIELDDEP,
                    sFieldLocName,
                    GetEventLocName("onchange"),
                    GetFieldDisplayName(oDependents[i].Name),
                    sDependencyType) +
                "\n";
            break;
        case "iframe":
        case "webresource":
            sfieldList += formatString(LOCID_FORMED_IFRAMEDEP,
                    sFieldLocName,
                    GetFieldDisplayName(oDependents[i].Name),
                    sDependencyType) +
                "\n";
            break;
        case "form":
            sfieldList += formatString(LOCID_FORMED_FORMDEP,
                    sFieldLocName,
                    GetEventLocName(oDependents[i].Name),
                    sDependencyType) +
                "\n";
            break;
        case "external":
            sfieldList += formatString(LOCID_FORMED_EXTDEP, sFieldLocName) + "\n";
            break;
        case "tab":
            sfieldList += formatString(LOCID_FORMED_TABDEP,
                    "",
                    GetEventLocName(oDependents[i].Name),
                    LOCID_TAB_LABEL + ":" + oDependents[i].FieldName,
                    sDependencyType) +
                "\n";
            break
        }
    }
    return sfieldList
}

function GetEmptyCellNode() {
    var oCell = Mscrm.FormEditorVariables.formXml.createElement("cell");
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    return oCell
}

function GetTabNode(sTabId) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab[@id = '" + sTabId + "']",
        null)
}

function GetSectionsNode(sTabId, iTabColumn) {
    var columnNode = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab[@id = '" + sTabId + "']/columns/column",
        null)[iTabColumn];
    return XUI.Xml.SelectSingleNode(columnNode, "sections", null)
}

function GetSectionNode(sSectionName) {
    var formXmlParh = "";
    switch (sSectionName) {
    case "Header":
        formXmlParh = "/entity/form/header";
        break;
    case "Footer":
        formXmlParh = "/entity/form/footer";
        break;
    default:
        formXmlParh = "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + sSectionName + "']";
        break
    }
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, formXmlParh, null)
}

function GetRowsNode(sSectionName) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + sSectionName + "']/rows",
        null)
}

function GetRowNode(sFieldName) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row[cell/control/@id = '" + sFieldName + "']",
        null)
}

function GetCellNode(sFieldName) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" + sFieldName + "']",
        null)
}

function GetCellNodes(sFieldName) {
    return XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell",
        null)
}

function ViewBusinessRules() {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "businessrules") {
        SwitchFormSections("businessrules", null);
        Mscrm.FormUtils.makeFormXmlDirty()
    }
}

function ViewFormProperties() {
    var oArgs = {};
    oArgs.PropertiesXml = oPropertiesXml;
    oArgs.FieldsXml = oFieldsXml;
    if (Mscrm.Utilities.isEdge())
        Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
    var oFormNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null),
        bEnableFormAssistant = oFormNode.getAttribute("enablerelatedinformation") == "true",
        bFormAssistantCollapsed = oFormNode.getAttribute("relatedInformationCollapsed") == "true",
        bShowNavBar = true,
        formNavBar = oFormNode.getAttribute("shownavigationbar");
    if (formNavBar != null)
        bShowNavBar = formNavBar == "true";
    var bshowImage = false,
        formshowImage = oFormNode.getAttribute("showImage");
    if (formshowImage != null)
        bshowImage = formshowImage == "true";
    var oDependsNodes = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/externaldependencies/dependency",
            null),
        iDependsLen = oDependsNodes.length,
        oDependsAry = new Array(iDependsLen);
    for (j = 0; j < iDependsLen; j++)
        oDependsAry[j] = oDependsNodes[j].getAttribute("id");
    var formName = "",
        formNameNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/resources/resource[@id='formName']",
            null);
    if (!IsNull(formNameNode))
        formName = XUI.Xml.GetText(formNameNode);
    var formDescription = "",
        formDescriptionNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/resources/resource[@id='formDescription']",
            null);
    if (!IsNull(formDescriptionNode))
        formDescription = XUI.Xml.GetText(formDescriptionNode);
    var oFormObj = new FormObj(Mscrm.FormEditorVariables.formXml,
        oDependsAry,
        !bFormAssistantCollapsed,
        bShowNavBar,
        formName,
        formDescription,
        bEnableFormAssistant,
        oFormNode.getAttribute("maxWidth"),
        bshowImage);
    oArgs.FormProperties = oFormObj;
    oArgs.objectTypeCode = _objectTypeCode;
    var url = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/formProperties.aspx?formType=" +
            CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.FormType) +
            "&objectTypeCode=" +
            _objectTypeCode),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 700;
    dialogOptions.width = 650;
    var callbkFunction = Mscrm.Utilities
        .createCallbackFunctionForXrmDialog(BindFormProperties, [formName, formDescription, oDependsAry]);
    Xrm.Internal.openDialog(url.toString(), dialogOptions, oArgs, null, BindFormProperties)
}

function BindFormProperties(oUpdatedFormObj, formName, formDescription, oDependsAry) {
    if (oUpdatedFormObj) {
        var refreshFormeditor = false;
        if (!IsNull(oUpdatedFormObj.FormXml) &&
            XUI.Xml.XMLSerializer.serializeToString(oUpdatedFormObj.FormXml) !=
            XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml)) {
            refreshFormeditor = true;
            Mscrm.FormEditorVariables.formXml = oUpdatedFormObj.FormXml
        }
        var oFormNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null);
        !IsNull(oUpdatedFormObj.FormAssistantExpanded) &&
            oFormNode.setAttribute("relatedInformationCollapsed", (!oUpdatedFormObj.FormAssistantExpanded).toString());
        !IsNull(oUpdatedFormObj.EnableFormAssistant) &&
            oFormNode.setAttribute("enablerelatedinformation", oUpdatedFormObj.EnableFormAssistant.toString());
        if (Mscrm.FormEditorVariables.FormType != "quick" &&
            Mscrm.FormEditorVariables.FormType != "quickCreate" &&
            Mscrm.FormEditorVariables.FormType != "card") {
            oFormNode.setAttribute("shownavigationbar", oUpdatedFormObj.FormLeftNavBar.toString());
            oFormNode.setAttribute("showImage", oUpdatedFormObj.ShowImage.toString());
            Mscrm.FormUtils.updateFormEntityIcon(oUpdatedFormObj.ShowImage)
        }
        if (oUpdatedFormObj.Name != formName) {
            var nameNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/resources/resource[@id='formName']",
                null);
            !IsNull(nameNode) &&
                XUI.Xml.SetText(nameNode, oUpdatedFormObj.Name);
            refreshFormeditor = true
        }
        if (oUpdatedFormObj.Description != formDescription) {
            var descriptionNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/resources/resource[@id='formDescription']",
                null);
            !IsNull(descriptionNode) &&
                XUI.Xml.SetText(descriptionNode, oUpdatedFormObj.Description)
        }
        oFormNode.setAttribute("maxWidth", oUpdatedFormObj.MaxWidth);
        if (oUpdatedFormObj.Dependencies) {
            var iNewLen = oUpdatedFormObj.Dependencies.length,
                oParentNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/externaldependencies",
                    null);
            if (!oParentNode) {
                oParentNode = Mscrm.FormEditorVariables.formXml.createElement("externaldependencies");
                var oNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null);
                oNode.appendChild(oParentNode)
            }
            var oChildNodes = XUI.Xml.SelectNodes(oParentNode, "dependency", null);
            Mscrm.Utilities.removeAll(oChildNodes);
            if (iNewLen == 0)
                oParentNode.parentNode.removeChild(oParentNode);
            else
                for (i = 0; i < iNewLen; i++) {
                    oNewNode = Mscrm.FormEditorVariables.formXml.createElement("dependency");
                    oNewNode.setAttribute("id", oUpdatedFormObj.Dependencies[i]);
                    oParentNode.appendChild(oNewNode)
                }
        }
        if (Mscrm.DependenciesUtils.dependenciesChanged(oDependsAry, oUpdatedFormObj.Dependencies)) {
            var formDeps = Mscrm.FormUtils.getFormDependencies();
            Mscrm.FormUtils.updateLockLevelForDependencies(oDependsAry, formDeps);
            refreshFormeditor = true
        }
        if (refreshFormeditor) {
            var scrollTop = $get("editorDiv").scrollTop;
            RefreshFormEditorAndClick();
            SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor);
            $get("editorDiv").scrollTop = scrollTop
        }
    }
}

function PersistFormEventXml(oEventNode, oUpdatedEventObj) {
    var oNewNode,
        oNode;
    if (!oEventNode) {
        var oEvents = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/events", null);
        if (!oEvents) {
            oEvents = Mscrm.FormEditorVariables.formXml.createElement("events");
            var oNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null),
                oRefNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/externaldependencies",
                    null);
            oNode.insertBefore(oEvents, oRefNode)
        }
        oEventNode = Mscrm.FormEditorVariables.formXml.createElement("event");
        oEvents.appendChild(oEventNode);
        var oScript = Mscrm.FormEditorVariables.formXml.createElement("script");
        oEventNode.appendChild(oScript);
        oScript.appendChild(Mscrm.FormEditorVariables.formXml.createCDATASection(" "));
        var oDepends = Mscrm.FormEditorVariables.formXml.createElement("dependencies");
        oEventNode.appendChild(oDepends);
        oEventNode.setAttribute("name", oUpdatedEventObj.Name);
        oEventNode.setAttribute("application", "false")
    }
    oEventNode.setAttribute("active", 1 == oUpdatedEventObj.Active ? "true" : "false");
    var iNewLen = oUpdatedEventObj.Dependencies.length,
        oParentNode = XUI.Xml.SelectSingleNode(oEventNode, "dependencies", null),
        oChildNodes = XUI.Xml.SelectNodes(oParentNode, "dependency", null);
    Mscrm.Utilities.removeAll(oChildNodes);
    for (i = 0; i < iNewLen; i++) {
        oNewNode = Mscrm.FormEditorVariables.formXml.createElement("dependency");
        oNewNode.setAttribute("id", oUpdatedEventObj.Dependencies[i]);
        oParentNode.appendChild(oNewNode)
    }
    var oScriptNode = XUI.Xml.SelectSingleNode(oEventNode, "script", null);
    XUI.Html.DomUtils.GetFirstChild(oScriptNode)
        .replaceData(0, XUI.Html.DomUtils.GetFirstChild(oScriptNode).length, oUpdatedEventObj.Script)
}

function GetFieldDisplayName(sFieldName) {
    var sDisplayName = "",
        oFieldNode;
    if (oFieldsXml)
        oFieldNode = XUI.Xml.SelectSingleNode(oFieldsXml, "/entity/fields/field[@name='" + sFieldName + "']", null);
    if (oFieldNode) {
        var oPropertiesNode = XUI.Xml.SelectSingleNode(oPropertiesXml,
            "/entity/fields/field[@name='" + sFieldName + "']",
            null);
        if (oPropertiesNode != null)
            sDisplayName = XUI.Xml.SelectSingleNode(oPropertiesNode,
                "displaynames/displayname[@languagecode = " + _langCode + "]").getAttribute("description");
        else {
            var sFieldLocName = XUI.Xml.SelectSingleNode(oFieldsXml,
                "/entity/fields/field[@name='" + sFieldName + "']",
                null).getAttribute("localizedname");
            sDisplayName = sFieldLocName ? sFieldLocName : sFieldName
        }
    } else
        sDisplayName = Mscrm.FormEditorVariables.formXml
            .selectSingleNode("/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
                sFieldName +
                "']/labels/label[@languagecode = " +
                _langCode +
                "]").getAttribute("description");
    return sDisplayName
}

function GetEventLocName(sEventName) {
    var sEventLocName = "";
    switch (sEventName) {
    case Mscrm.Events.onLoad:
        sEventLocName = LOCID_FORMED_ONLOAD;
        break;
    case Mscrm.Events.onSave:
        sEventLocName = LOCID_FORMED_ONSAVE;
        break;
    case Mscrm.Events.onChange:
        sEventLocName = LOCID_FORMED_ONCHANGE;
        break;
    case Mscrm.Events.tabStateChange:
        sEventLocName = LOCID_TABED_EVENT;
        break;
    default:
        sEventLocName = LOCID_FORMED_EVENT;
        break
    }
    return sEventLocName
}

function TabTemplate(iColumns, iColWidths) {
    this.Columns = iColumns;
    this.ColWidths = iColWidths
}

var _templates = [];
_templates.push(new TabTemplate(1, [100, 0, 0]));
_templates.push(new TabTemplate(2, [50, 50, 0]));
_templates.push(new TabTemplate(2, [34, 66, 0]));
_templates.push(new TabTemplate(2, [67, 33, 0]));
_templates.push(new TabTemplate(3, [34, 33, 33]));
_templates.push(new TabTemplate(3, [28, 44, 28]));
var _ControlClassIds = {
        iframe: "{FD2A7985-3187-444e-908D-6624B21F69C0}",
        lookup: "{270BD3DB-D9AF-4782-9025-509E298DEC0A}",
        regarding: "{F3015350-44A2-4aa0-97B5-00166532B5E9}",
        partylist: "{CBFB742C-14E7-4a17-96BB-1A13F7F64AA2}",
        duration: "{AA987274-CE4E-4271-A803-66164311A958}",
        integer: "{C6D124CA-7EDA-4a60-AEA9-7FB8D318B68F}",
        "float": "{0D2C745A-E5A8-4c8f-BA63-C6D3BB604660}",
        money: "{533B9E00-756B-4312-95A0-DC888637AC78}",
        decimal: "{C3EFE0C3-0EC6-42be-8349-CBD9079DFD8E}",
        email: "{ADA2203E-B4CD-49be-9DDF-234642B43B52}",
        emailbody: "{6F3FB987-393B-4d2d-859F-9D0F0349B6AD}",
        text: "{4273EDBD-AC1D-40d3-9FB2-095C621B552D}",
        textarea: "{E0DECE4B-6FC8-4a8f-A065-082708572369}",
        url: "{71716B6C-711E-476c-8AB8-5D11542BFB47}",
        tickersymbol: "{1E1FC551-F7A8-43af-AC34-A8DC35C7B6D4}",
        memo: "{E0DECE4B-6FC8-4a8f-A065-082708572369}",
        picklist: "{3EF39988-22BB-4f0b-BBBE-64B5A3748AEE}",
        status: "{5D68B988-0661-4db2-BC3E-17598AD3BE6C}",
        datetime: "{5B773807-9FB2-42db-97C3-7A91EFF8ADFF}",
        boolean_radio: "{67FAC785-CD58-4f9f-ABB3-4B7DDC6ED5ED}",
        boolean_checkbox: "{B0C6723A-8503-4fd7-BB28-C8A06AC933C2}",
        language: "{671A9387-CA5A-4d1e-8AB7-06E39DDCF6B5}",
        subgrid: "{E7A81278-8635-4d9e-8D4D-59480B391C5B}",
        timezone: "{7C624A0B-F59E-493d-9583-638D34759266}",
        connection: "{3246F906-1F71-45F7-B11F-D7BE0F9D04C9}",
        connectionroleojbjecttypecodelist: "{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}",
        webResourceHtml: "{9FDF5F91-88B1-47f4-AD53-C11EFC01A01D}",
        webResourceImage: "{587CDF98-C1D5-4bde-8473-14A0BC7644A7}",
        webResourceSilverlight: "{080677DB-86EC-4544-AC42-F927E74B491F}",
        powerBITile: "{8C54228C-1B25-4909-A12A-F2B968BB0D62}",
        notes: "{06375649-c143-495e-a496-c962e5b4488e}",
        quickformcollection: "{5C5600E0-1D6E-4205-A272-BE80DA87FD42}",
        referencepanelquickformcollection: "{B68B05F0-A46D-43F8-843B-917920AF806A}",
        referencepanelsubgrid: "{02D4264B-47E2-4B4C-AA95-F439F3F4D458}",
        interactionwall: "{1F179106-FA28-4495-961E-F6BD93C21974}",
        bingmap: "{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}",
        socialInsight: "{86B9E25E-695E-4FEF-AC69-F05CFA96739C}",
        orgInsights: "{76B9E25E-695E-4FEF-AC69-F05CFA96739C}",
        timercontrol: "{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}",
        searchwidget: "{E616A57F-20E0-4534-8662-A101B5DDF4E0}",
        referencepanelsearchwidget: "{7CCD1494-1F7A-4E3A-8BDE-F32069DAEB9F}",
        queuecontainer: "{EE9078C8-6946-4E2C-B8F8-35E65F4BE6A8}",
        multiplepiechart: "{F130D8AE-CE5B-43C5-BED1-1A6A5856CF3D}",
        tagcontrol: "{6FAE836F-FC01-48DE-9B63-9B68A8FD86B8}",
        customControl: "{F9A8A302-114E-466A-B582-6771B2AE0D92}",
        aci: "{C8BFBBEF-6851-4401-A0CC-7450062FE085}"
    },
    _oConst = { iAttributeEditorWidth: 900, iAttributeEditorHeight: 660 },
    _oDataTypes = {
        unknown: "unknown",
        customer: "customer",
        owner: "owner",
        lookup: "lookup",
        partylist: "partylist",
        integer: "integer",
        "float": "float",
        money: "money",
        decimal: "decimal",
        text: "text",
        memo: "memo",
        "boolean": "boolean",
        picklist: "picklist",
        status: "status",
        state: "state",
        datetime: "datetime",
        iframe: "iframe"
    },
    WebResourceTypes = { html: 1, css: 2, jscript: 3, xml: 4, png: 5, jpg: 6, gif: 7, xap: 8, xls: 9, ico: 10 },
    _oDataTypeFormats = {
        regarding: "regarding",
        connection: "connection",
        duration: "duration",
        timezone: "timezone",
        language: "language",
        email: "email",
        emailbody: "emailbody",
        text: "text",
        textarea: "textarea",
        url: "url",
        tickersymbol: "tickersymbol"
    };

function GetControlClassId(sDataType, sFormat) {
    switch (sDataType) {
    case _oDataTypes.customer:
    case _oDataTypes.owner:
        return _ControlClassIds.lookup;
    case _oDataTypes.lookup:
        switch (sFormat) {
        case _oDataTypeFormats.regarding:
            return _ControlClassIds.regarding;
        case _oDataTypeFormats.connection:
            return _ControlClassIds.connection
        }
        return _ControlClassIds.lookup;
    case _oDataTypes.partylist:
        return _ControlClassIds.partylist;
    case _oDataTypes.integer:
        switch (sFormat) {
        case _oDataTypeFormats.duration:
            return _ControlClassIds.duration;
        case _oDataTypeFormats.timezone:
            return _ControlClassIds.timezone;
        case _oDataTypeFormats.language:
            return _ControlClassIds.language
        }
        return _ControlClassIds.integer;
    case _oDataTypes.float:
        return _ControlClassIds.float;
    case _oDataTypes.money:
        return _ControlClassIds.money;
    case _oDataTypes.decimal:
        return _ControlClassIds.decimal;
    case _oDataTypes.text:
        switch (sFormat) {
        case _oDataTypeFormats.email:
            return _ControlClassIds.email;
        case _oDataTypeFormats.text:
            return _ControlClassIds.text;
        case _oDataTypeFormats.textarea:
            return _ControlClassIds.textarea;
        case _oDataTypeFormats.url:
            return _ControlClassIds.url;
        case _oDataTypeFormats.tickersymbol:
            return _ControlClassIds.tickersymbol
        }
        break;
    case _oDataTypes.memo:
        if (sFormat == _oDataTypeFormats.emailbody)
            return _ControlClassIds.emailbody;
        else
            return _ControlClassIds.memo;
    case _oDataTypes.boolean:
        return _ControlClassIds.boolean_radio;
    case _oDataTypes.picklist:
    case _oDataTypes.state:
        return _ControlClassIds.picklist;
    case _oDataTypes.status:
        return _ControlClassIds.status;
    case _oDataTypes.datetime:
        return _ControlClassIds.datetime;
    case _oDataTypes.iframe:
        return _ControlClassIds.iframe
    }
    return _ControlClassIds.text
}

function CanSpanColumns(sControlClassId) {
    switch (sControlClassId) {
    case _ControlClassIds.iframe:
    case _ControlClassIds.memo:
    case _ControlClassIds.textarea:
        return false
    }
    return true
}

function CanSpanRows(sControlClassId) {
    switch (sControlClassId) {
    case _ControlClassIds.iframe:
    case _ControlClassIds.memo:
    case _ControlClassIds.textarea:
    case _ControlClassIds.notes:
        return true
    }
    return false
}

function SaveForm(bClose) {
    switch (Mscrm.FormEditorVariables.editorType) {
    case Mscrm.EditorType.formEditor:
        if (isMergeButtonClicked && !isConfirmed)
            if (!confirm(LOCID_FORMED_MODERNLAYOUTSAVE))
                return;
            else
                isConfirmed = true;
        if (Mscrm.FormUtils.isFormDirty() || Mscrm.FormEditorVariables.currentFormId == Mscrm.FormXmlUtils.emptyGuid) {
            if (Mscrm.Utilities.isEdge())
                Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
            var formDetails = new Mscrm.FormDetails;
            formDetails.formXml = Mscrm.FormEditorVariables.formXml;
            formDetails.name = Mscrm.FormXmlUtils.getResourceValue("formName", Mscrm.FormEditorVariables.formXml);
            formDetails.description = Mscrm.FormXmlUtils
                .getResourceValue("formDescription", Mscrm.FormEditorVariables.formXml);
            formDetails.formType = GetFormTypeCode(Mscrm.FormEditorVariables.FormType);
            formDetails.objectTypeCode = _objectTypeCode;
            formDetails.formId = Mscrm.FormEditorVariables.currentFormId;
            if (isMergeButtonClicked) {
                formDetails.isAirMerged = true;
                formDetails.formPresentation = 1
            } else if (Mscrm.FormEditorVariables.currentFormId == Mscrm.FormXmlUtils.emptyGuid)
                formDetails.formPresentation = 1;
            var actionResult = null;
            if (Mscrm.FormEditorVariables.currentFormId != Mscrm.FormXmlUtils.emptyGuid)
                actionResult = Mscrm.FormCrudUtils
                    .executeAction(Mscrm.FormCrudAction.update, formDetails, isMergeButtonClicked);
            else {
                formDetails.parentFormId = Mscrm.FormEditorVariables.parentFormId;
                actionResult = Mscrm.FormCrudUtils.executeAction(Mscrm.FormCrudAction.saveAs, formDetails, true)
            }
            if (!IsNull(actionResult) && actionResult.success) {
                Mscrm.FormUtils.setInitialFormXmlText();
                SetPreviewXml();
                SetPreviewDefaultValues();
                var designer = IsRequestFromAppDesigner();
                if (!designer) {
                    !IsNull(window.top) &&
                        !IsNull(window.top.opener) &&
                        !window.top.opener.closed &&
                        window.top.opener.auto(Mscrm.EntityTypeCode.SystemForm);
                    !IsNull(window.top) &&
                        !IsNull(window.top.opener) &&
                        window.top.opener.name == "hierarchySettingspage" &&
                        PopulateHierarchyQuickFormControl(actionResult.id, formDetails.name)
                } else
                    SendResponseToAppDesigner(actionResult);
                if (!bClose) {
                    if (actionResult.id != Mscrm.FormEditorVariables.currentFormId) {
                        Mscrm.FormUndoRedo.dispose();
                        window.parent.location.href = Mscrm.FormUrlUtils
                            .getUpdatedUrl(window.parent.location.href, actionResult.id)
                    }
                } else
                    closeWindow()
            }
        } else if (bClose) {
            SetPreviewXml();
            SetPreviewDefaultValues();
            Mscrm.FormUndoRedo.dispose();
            closeWindow()
        }
        break;
    case Mscrm.EditorType.dashboardEditor:
        Save(bClose);
        break
    }
}

function FormSaveAs() {
    var oArgs = {};
    oArgs.formXml = XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml);
    oArgs.objectTypeCode = _objectTypeCode;
    oArgs.formType = GetFormTypeCode(Mscrm.FormEditorVariables.FormType);
    oArgs.isUserForm = false;
    oArgs.targetFormType = -1;
    oArgs.name = Mscrm.FormXmlUtils.getResourceValue("formName", Mscrm.FormEditorVariables.formXml);
    if (isMergeButtonClicked)
        oArgs.isMergeButtonClicked = true;
    if (_isRefreshForm == "1" || Mscrm.FormEditorVariables.currentFormId == Mscrm.FormXmlUtils.emptyGuid)
        oArgs.formPresentation = true;
    if (Mscrm.FormEditorVariables.currentFormId != Mscrm.FormXmlUtils.emptyGuid)
        oArgs.formId = Mscrm.FormEditorVariables.currentFormId;
    else
        oArgs.formId = Mscrm.FormEditorVariables.parentFormId;
    oArgs.description = Mscrm.FormXmlUtils.getResourceValue("formDescription", Mscrm.FormEditorVariables.formXml);
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 300;
    dialogOptions.width = 400;
    var saveAsUrl = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/SaveAs.aspx");
    Xrm.Internal.openDialog(saveAsUrl.toString(), dialogOptions, oArgs, null, callBackForSaveAs)
}

function callBackForSaveAs(returnvalue) {
    if (!IsNull(returnvalue) && returnvalue.success) {
        Mscrm.FormUtils.setInitialFormXmlText();
        SetPreviewXml();
        SetPreviewDefaultValues();
        var designer = IsRequestFromAppDesigner();
        if (!designer) {
            !IsNull(window.top) &&
                !IsNull(window.top.opener) &&
                window.top.opener.name == "hierarchySettingspage" &&
                PopulateHierarchyQuickFormControl(result.id, result.name);
            Mscrm.FormUndoRedo.dispose();
            !IsNull(window.top) &&
                !IsNull(window.top.opener) &&
                window.top.opener.auto(Mscrm.EntityTypeCode.SystemForm)
        } else {
            Mscrm.FormUndoRedo.dispose();
            SendResponseToAppDesigner(returnvalue)
        }
        window.parent.location.href = Mscrm.FormUrlUtils.getUpdatedUrl(window.parent.location.href, returnvalue.id)
    }
}

function IsRequestFromAppDesigner() {
    var designer = false;
    designer = IsNull(window.parent) ? false : true;
    if (designer)
        designer = Mscrm.FeatureControl.get_Current()
            .areFeaturesEnabled([Mscrm.FeatureNames.AppModuleForOrganization, Mscrm.FeatureNames.AppDesigner]) &&
            !IsNull(window.parent) &&
            !IsNull(window.parent.opener) &&
            !IsNull(window.parent.opener.AppDesignerCallback);
    return designer
}

function SendResponseToAppDesigner(result) {
    var id = result.id.replace(/{|}/g, "").toLowerCase(),
        entityId = Mscrm.CrmUri.getExtraQueryStringKeyValue("entityId", window.parent.location.href);
    if (!isNullOrEmptyString(entityId))
        entityId = entityId.replace(/{|}/g, "").toLowerCase();
    var resultobj = {
        id: id.toLowerCase(),
        displayName: result.name,
        formType: GetFormTypeCode(Mscrm.FormEditorVariables.FormType),
        description: result.description
    };
    window.parent.opener.AppDesignerCallback(resultobj, "Form", entityId, false)
}

function CloseForm() {
    closeWindow()
}

function SaveAndPublish() {
    if (Mscrm.FormUtils.shouldPublish()) {
        var oDataXml = createXmlDoc(_oTags.publish),
            oEntitiesXml = addXmlNode(oDataXml, _oTags.entities);
        addTextXmlNode(oEntitiesXml, _oTags.entity, GetEntityId(_objectTypeCode));
        var sDataXml = convertXmlDocToString(oDataXml);
        publishEntities(sDataXml, 1, null, null)
    }
}

var quickFormAddedForHierarchy = false;

function PopulateHierarchyQuickFormControl(id, value) {
    var quickFormSelectionControl = window.top.opener.document.getElementById("selectQuickForm");
    if (!IsNull(quickFormSelectionControl) && !quickFormAddedForHierarchy) {
        var newformElement = window.top.opener.document.createElement("option");
        newformElement.value = id;
        newformElement.text = value;
        newformElement.title = value;
        quickFormSelectionControl.add(newformElement);
        quickFormSelectionControl.selectedIndex = quickFormSelectionControl.children.length - 1;
        quickFormAddedForHierarchy = true
    }
}

var _oActMsgDom = null,
    _oActMsgPopup = null;

function DisplayActionMsg(sMsg, iWidth, iHeight) {
    if (isNaN(iWidth) || isNaN(iHeight)) {
        iWidth = 400;
        iHeight = 150
    }
    if (IsNull(_oActMsgPopup)) {
        _oActMsgDom = window.document.createElement("DIV");
        window.document.body.appendChild(_oActMsgDom);
        _oActMsgDom.className = "actionMsgBox";
        _oActMsgDom.innerHTML = "<table width=" +
            iWidth +
            "px height=" +
            iHeight +
            "px><tr><td style='font-weight: bold; font-size: 15px;text-align: center; vertical-align: middle; cursor: wait; color: #000099'> </td></tr></table>";
        var oActMsgDomStyle = _oActMsgDom.style;
        oActMsgDomStyle.width = "100%";
        oActMsgDomStyle.height = "100%";
        oActMsgDomStyle.backgroundColor = "#ffffee";
        oActMsgDomStyle.border = "2px solid #000000";
        oActMsgDomStyle.overflow = "hidden";
        oActMsgDomStyle.className = _oActMsgDom.className + " ms-crm-Error-Header";
        _oActMsgPopup = Mscrm.Menu.createMenu(_oActMsgDom);
        _oActMsgPopup.set_stylePrefix(Mscrm.MenuStyles.popupStylePrefix);
        _oActMsgPopup.set_width(iWidth);
        _oActMsgPopup.set_height(iHeight);
        var oActMsg = Mscrm.MenuItem.createMenuItem();
        _oActMsgPopup.addItem(oActMsg)
    }
    if (!IsNull(sMsg)) {
        var table = XUI.Html.DomUtils.GetFirstChild(_oActMsgDom);
        table.rows[0].cells[0].innerHTML = CrmEncodeDecode.CrmHtmlEncode(sMsg) + "<br><br>"
    }
    _oActMsgPopup.set_left((window.document.body.clientWidth + (LOCID_UI_DIR == "RTL" ? iWidth : -iWidth)) / 2);
    _oActMsgPopup.set_top((window.document.body.clientHeight - iHeight) / 2);
    _oActMsgPopup.show()
}

function HideActionMsg() {
    !IsNull(_oActMsgPopup) &&
        _oActMsgPopup.hide()
}

function PreviewForm(sType) {
    var sTitle;
    switch (sType) {
    case "create":
        sTitle = _createTitle;
        break;
    case "update":
        sTitle = _updateTitle;
        break;
    case "readonly":
        sTitle = _readOnlyTitle;
        break
    }
    Preview(sTitle, sType)
}

function PreviewMoca(sType) {
    function PreparePreviewData() {
        var formAccessType = IsNull(Mscrm.FormEditorVariables.formAccessType)
                ? Mscrm.EntityTypeCode.SystemForm
                : Mscrm.FormEditorVariables.formAccessType,
            formId = Mscrm.FormEditorVariables.currentFormId === ""
                ? Mscrm.FormEditorVariables.formId
                : Mscrm.FormEditorVariables.currentFormId,
            etc = Mscrm.EntityTypeCode.None;
        if (!IsNull(Previewer) && !IsNull(Previewer.objectTypeCode) && !IsNull(Previewer.objectTypeCode.value))
            etc = Previewer.objectTypeCode.value;
        var dashName = Mscrm.FormControlInputBehavior.GetBehavior("dashboardNameInput"),
            dashboardName = !IsNull(dashName) ? dashName.get_element().value : "",
            formXml = Mscrm.FormEditorVariables.formXml,
            sFormXml = XUI.Xml.XMLSerializer.serializeToString(formXml),
            previewData = {};
        previewData["previewForm_formXml"] = sFormXml;
        previewData["previewForm_formId"] = formId;
        previewData["previewForm_etc"] = etc;
        previewData["previewForm_formType"] = GetFormTypeCode(Mscrm.FormEditorVariables.FormType);
        previewData["previewForm_formAccessType"] = formAccessType;
        previewData["previewForm_dashboardName"] = dashboardName;
        if (!IsNull(Mscrm.FormEditorVariables.entityLogicalName))
            previewData["previewForm_EntityLogicalName"] = Mscrm.FormEditorVariables.entityLogicalName;
        return previewData
    }

    function GetMocaUrl(isPhone) {
        return Xrm.Page.context.getClientUrl() + "/Tools/FormEditor/MocaPreview.aspx?phone=" + isPhone
    }

    function OpenInNewWindow(url, previewData) {
        var windowName = "MocaPreview" + previewData["previewForm_formId"],
            mocaPreviewForm = document.createElement("form"),
            mocaPreviewFormAdded = false;
        try {
            mocaPreviewForm.setAttribute("target", windowName);
            mocaPreviewForm.setAttribute("action", url);
            mocaPreviewForm.setAttribute("method", "post");
            var serializedPreviewData = JSON.stringify(previewData),
                hiddenInputField = document.createElement("input");
            hiddenInputField.type = "hidden";
            hiddenInputField.name = "formPreviewData";
            hiddenInputField.value = serializedPreviewData;
            mocaPreviewForm.appendChild(hiddenInputField);
            document.body.appendChild(mocaPreviewForm);
            mocaPreviewFormAdded = true;
            window.open("", windowName);
            mocaPreviewForm.submit()
        } finally {
            mocaPreviewFormAdded &&
                mocaPreviewForm &&
                document.body.removeChild(mocaPreviewForm)
        }
    }

    var previewData = PreparePreviewData(),
        isPhone = sType == "phone" ? true : false,
        mocaUrl = GetMocaUrl(isPhone);
    OpenInNewWindow(mocaUrl, previewData)
}

function GetActiveElement() {
    return _oActive
}

function IsPreviewMode() {
    return _bPreviewMode
}

function GetObjectTypeCode() {
    return _objectTypeCode
}

var _oXmlDocEditor,
    _oXslDocEditor,
    _oXsltEditor,
    _oXslProcEditor;

function LoadXmlForEditorTransform(renderingPart) {
    _oXslDocEditor == null &&
        XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/formeditorsection.xsl").toString(),
            false,
            function(xmlDoc) {
                _oXslDocEditor = xmlDoc
            },
            function(statusCode, xmlDoc) {
                _oXslDocEditor = null
            });
    _oXsltEditor = CreateXslTemplate();
    _oXsltEditor.stylesheet = _oXslDocEditor;
    _oXslProcEditor = _oXsltEditor.createProcessor();
    var fieldXml = "",
        propertiesXml = "";
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        fieldXml = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml
            .SelectSingleNode(oFieldsXml, "/entity/fields", null));
        propertiesXml = XUI.Xml.XMLSerializer
            .serializeToString(XUI.Xml.SelectSingleNode(oPropertiesXml, "/entity/fields", null))
    }
    var formXMLString = Mscrm.FormUtils.getFormXmlForXslTransformation(renderingPart);
    switch (renderingPart) {
    case Mscrm.Render.wholeCanvas:
        _oXmlDocEditor = XUI.Xml.LoadXml("<entity><formeditor>" +
            formXMLString +
            "</formeditor><metadata>" +
            fieldXml +
            "</metadata><properties>" +
            propertiesXml +
            "</properties><strings><lockedsection>" +
            CrmEncodeDecode.CrmXmlEncode(LOCID_FORMEDITOR_SECTION_LOCKED) +
            "</lockedsection></strings></entity>");
        break;
    case Mscrm.Render.navBar:
        _oXmlDocEditor = XUI.Xml.LoadXml("<FormNavigation>" + formXMLString + "</FormNavigation>");
        break
    }
}

function RefreshFormEditorAndClick() {
    var sClickControl = GetActiveElement();
    sClickControlName = null;
    if (!IsNull(sClickControl))
        sClickControlName = sClickControl.id;
    RefreshFormEditor(Mscrm.Render.wholeCanvas);
    if (sClickControlName != null) {
        var elemToClick = $get(sClickControlName);
        elemToClick != null &&
            Mscrm.Utilities.click($get(sClickControlName))
    }
}

function RefreshFormEditor(renderingPart) {
    LoadXmlForEditorTransform(renderingPart);
    _oXslProcEditor.input = _oXmlDocEditor;
    _oXslProcEditor.addParameter("languageCode", _langCode);
    _oXslProcEditor.addParameter("mode", _sMode);
    _oXslProcEditor.addParameter("RTL", LOCID_UI_DIR == "RTL" ? "true" : "false");
    _oXslProcEditor.addParameter("spacerCaption", _spacerCaption);
    _oXslProcEditor.addParameter("headerCaption", _headerCaption);
    _oXslProcEditor.addParameter("footerCaption", _footerCaption);
    _oXslProcEditor.addParameter("editorType", Mscrm.FormEditorVariables.editorType);
    _oXslProcEditor.addParameter("formType", Mscrm.FormEditorVariables.FormType);
    _oXslProcEditor.addParameter("webResourceRootUrl", Mscrm.FormEditorVariables.webResourceRootUrl);
    _oXslProcEditor.addParameter("isCustomizable", Mscrm.FormEditorVariables.isCustomizabe.toLowerCase());
    _oXslProcEditor.addParameter("iconPath", Mscrm.FormEditorVariables.iconPath);
    _oXslProcEditor.addParameter("formLabel", Mscrm.FormEditorVariables.entityUnpublishedLabel);
    _oXslProcEditor.addParameter("solutionLabel", LOCID_SOLUTION_LABEL);
    _oXslProcEditor.addParameter("formPrefix", LOCID_FORM_LABEL_PREFIX);
    _oXslProcEditor.addParameter("formAccessType", Mscrm.FormEditorVariables.formAccessType);
    _oXslProcEditor.addParameter("supportSocialInsights",
        Mscrm.FormEditorVariables.supportSocialInsights == "True" ? "true" : "false");
    _oXslProcEditor.addParameter("supportPowerBITile",
        Mscrm.FormEditorVariables.supportPowerBITile == "True" ? "true" : "false");
    _oXslProcEditor.addParameter("supportOrgInsights",
        Mscrm.FormEditorVariables.supportOrgInsights == "True" ? "true" : "false");
    _oXslProcEditor.addParameter("supportDelve", Mscrm.FormEditorVariables.supportDelve == "True" ? "true" : "false");
    _oXslProcEditor.addParameter("supportInteractionCentric",
        Mscrm.FormEditorVariables.supportInteractionCentric == "True" ? "true" : "false");
    _oXslProcEditor.addParameter("supportACIControl",
        Mscrm.FormEditorVariables.supportACIControl == "True" ? "true" : "false");
    _oXslProcEditor.transform();
    var updatedHTML = _oXslProcEditor.output;
    switch (renderingPart) {
    case Mscrm.Render.wholeCanvas:
        Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.dashboardEditor &&
            Mscrm.DashboardEditorUtils.clearHandlersFromIframes();
        $get("formDesigner").innerHTML = updatedHTML;
        break;
    case Mscrm.Render.navBar:
        $get("formNavigationBar").innerHTML = updatedHTML;
        break
    }
    typeof SetElementsPosition != "undefined" &&
        SetElementsPosition()
}

function SetPreviewXml() {
    var previewer = $get("Previewer");
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        previewer.fieldXml.value = oFieldsXml.xml;
        previewer.propertiesXml.value = oPropertiesXml.xml
    }
    var previewXml = XUI.Xml.LoadXml(Mscrm.FormEditorVariables.formXml.xml),
        cells = XUI.Xml.SelectNodes(previewXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell",
            null);
    RemoveSpacerNodes(cells);
    cells = XUI.Xml.SelectNodes(previewXml, "/entity/form/header/rows/row/cell", null);
    RemoveSpacerNodes(cells);
    cells = XUI.Xml.SelectNodes(previewXml, "/entity/form/footer/rows/row/cell", null);
    RemoveSpacerNodes(cells);
    cells = XUI.Xml.SelectNodes(previewXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@auto='true']",
        null);
    Mscrm.FieldPropertiesUtils.addHeightAttributeForAutoExpandingCells(cells, previewXml);
    previewer.formXml.value = previewXml.xml
}

function RemoveSpacerNodes(cells) {
    for (var i = 0; i < cells.length; i++) {
        var controlNode = XUI.Xml.SelectSingleNode(cells[i], "control", null);
        XUI.Xml.GetText(controlNode.attributes.getNamedItem("id")).startsWith("spacer_") &&
            cells[i].removeChild(controlNode)
    }
}

function ShowSelectedButton(name, commandProperties) {
    if (!IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor) &&
        Mscrm.FormEditorVariables.fieldExpIsFor == name)
        commandProperties["On"] = true;
    else
        commandProperties["On"] = false
}

function AutoExpandingRequired(tabId, controlId, formXml) {
    var bAutoExpand = true,
        oTab = XUI.Xml.SelectSingleNode(formXml, "/entity/form/tabs/tab[@id = '" + tabId + "']", null),
        oAutoCell = XUI.Xml.SelectSingleNode(oTab,
            "columns/column/sections/section/rows/row/cell[@auto = 'true' and control/@id != '" + controlId + "' ]",
            null);
    if (oAutoCell != null && XUI.Xml.SelectSingleNode(oAutoCell, "control", null).getAttribute("id") != controlId)
        if (!confirm(LOCID_ANOTHER_EXPANDING_TAB))
            bAutoExpand = false;
    return bAutoExpand
}

function ModifyOtherAutoExpandingFieldIfRequired(oCell) {
    var tabId = GetCurrentTabName(_oActive);
    if (!IsNull(tabId)) {
        var oTab = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab[@id = '" + tabId + "']",
                null),
            oAutoCell = XUI.Xml.SelectSingleNode(oTab,
                "columns/column/sections/section/rows/row/cell[@auto = 'true' and control/@id != '" +
                XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oCell, "control/@id", null)) +
                "' ]",
                null);
        if (oAutoCell != null) {
            oAutoCell.removeAttribute("auto");
            var controlType = Mscrm.FormXmlUtils.getControlType(oAutoCell);
            controlType === Mscrm.FormControlTypes.subGrid &&
                Mscrm.FieldPropertiesUtils.modifySubGridRowSpanIfNotAutoExpanding(oAutoCell);
            var sectionXml = oAutoCell.parentNode.parentNode.parentNode,
                sectionId = sectionXml.getAttribute("id");
            if (sectionId != null && sectionId != GetCurrentSectionName(_oActive)) {
                var sectionHtml = document.getElementById(sectionId);
                RefreshSectionHtml(sectionHtml, null, false)
            }
        }
    }
}

function ShowFormDependencies() {
    !IsNull(Mscrm.FormEditorVariables.currentFormId) &&
        Mscrm.FormEditorVariables.currentFormId != Mscrm.FormXmlUtils.emptyGuid &&
        Mscrm.Dependency.launchDependencyDlg(Mscrm.EntityTypeCode.SystemForm, _formXmlId)
}

function enableDisableColumnLayout(iSecCols) {
    switch (iSecCols) {
    case 1:
        $get("rdColumnSpan1").disabled = false;
        $get("rdColumnSpan2").disabled = true;
        $get("rdColumnSpan3").disabled = true;
        $get("rdColumnSpan4").disabled = true;
        $get("rdColumnSpan1Label").disabled = false;
        $get("rdColumnSpan2Label").disabled = true;
        $get("rdColumnSpan3Label").disabled = true;
        $get("rdColumnSpan4Label").disabled = true;
        break;
    case 2:
        $get("rdColumnSpan1").disabled = false;
        $get("rdColumnSpan2").disabled = false;
        $get("rdColumnSpan3").disabled = true;
        $get("rdColumnSpan4").disabled = true;
        $get("rdColumnSpan1Label").disabled = false;
        $get("rdColumnSpan2Label").disabled = false;
        $get("rdColumnSpan3Label").disabled = true;
        $get("rdColumnSpan4Label").disabled = true;
        break;
    case 3:
        $get("rdColumnSpan1").disabled = false;
        $get("rdColumnSpan2").disabled = false;
        $get("rdColumnSpan3").disabled = false;
        $get("rdColumnSpan4").disabled = true;
        $get("rdColumnSpan1Label").disabled = false;
        $get("rdColumnSpan2Label").disabled = false;
        $get("rdColumnSpan3Label").disabled = false;
        $get("rdColumnSpan4Label").disabled = true;
        break;
    case 4:
        $get("rdColumnSpan1").disabled = false;
        $get("rdColumnSpan2").disabled = false;
        $get("rdColumnSpan3").disabled = false;
        $get("rdColumnSpan4").disabled = false;
        $get("rdColumnSpan1Label").disabled = false;
        $get("rdColumnSpan2Label").disabled = false;
        $get("rdColumnSpan3Label").disabled = false;
        $get("rdColumnSpan4Label").disabled = false;
        break;
    default:
        $get("rdColumnSpan1").disabled = false;
        $get("rdColumnSpan2").disabled = false;
        $get("rdColumnSpan3").disabled = false;
        $get("rdColumnSpan4").disabled = false;
        $get("rdColumnSpan1Label").disabled = false;
        $get("rdColumnSpan2Label").disabled = false;
        $get("rdColumnSpan3Label").disabled = false;
        $get("rdColumnSpan4Label").disabled = false;
        break
    }
}

function populateColumnLayout(iColSpan, iSecCols) {
    switch (iColSpan) {
    case 1:
        $get("rdColumnSpan1").checked = true;
        break;
    case 2:
        $get("rdColumnSpan2").checked = true;
        break;
    case 3:
        $get("rdColumnSpan3").checked = true;
        break;
    case 4:
        $get("rdColumnSpan4").checked = true;
        break;
    default:
        $get("rdColumnSpan2").checked = true;
        break
    }
    enableDisableColumnLayout(iSecCols)
}

function getEntityId() {
    return _entityId
}

function initializeExplorerFilters() {
    var fieldFilter = new Select;
    fieldFilter.ID = "fieldFilter";
    fieldFilter.OnChange = "RefreshAttributeExplorer();";
    fieldFilter.TabIndex = "10";
    fieldFilter.AddOption(LOCID_FLDEXP_FILTER_ALL, Mscrm.FieldFilter.all);
    fieldFilter.AddOption(LOCID_FLDEXP_FILTER_CUSTOM, Mscrm.FieldFilter.custom);
    fieldFilter.AddToControl($get("fieldFilterTD"));
    var relationshipFilter = new Select;
    relationshipFilter.ID = "relationshipFilter";
    relationshipFilter.TabIndex = "10";
    relationshipFilter.OnChange = "RefreshRelationShipExplorer();";
    relationshipFilter.AddOption(LOCID_RELEXP_FILTER_ALL, Mscrm.RelationshipFilter.all);
    relationshipFilter.AddOption(LOCID_RELEXP_FILTER_1N, Mscrm.RelationshipFilter.oneToMany);
    relationshipFilter.AddOption(LOCID_RELEXP_FILTER_NN, Mscrm.RelationshipFilter.manyToMany);
    relationshipFilter.AddToControl($get("relationshipFilterTD"))
}

function CanCustomizeForm() {
    return !IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.isCustomizabe) &&
        Mscrm.FormEditorVariables.isCustomizabe == "true"
}

function CanSaveAsForm() {
    return !IsNull(Mscrm) &&
        !IsNull(Mscrm.FormEditorVariables) &&
        !IsNull(Mscrm.FormEditorVariables.canCreateForms) &&
        Mscrm.FormEditorVariables.canCreateForms == "true"
}

function CanAssignRoles() {
    return CanCustomizeForm()
}

function AssignRoles() {
    if (!IsNull(Mscrm.FormEditorVariables.currentFormId) &&
        Mscrm.FormEditorVariables.currentFormId != Mscrm.FormXmlUtils.emptyGuid) {
        var oArgs = {};
        oArgs.formId = Mscrm.FormEditorVariables.currentFormId;
        var url = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/FormRoleAssignment.aspx");
        url.get_query()["formId"] = Mscrm.FormEditorVariables.currentFormId;
        url.get_query()["type"] = GetFormTypeCode(Mscrm.FormEditorVariables.FormType);
        url.get_query()["objectTypeCode"] = _objectTypeCode;
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.width = 800;
        dialogOptions.height = 550;
        Xrm.Internal.openDialog(url.toString(), dialogOptions, oArgs, null, null)
    }
}

function GetTypeCode(wrId) {
    var typeCode = -1;
    try {
        if (wrId != null) {
            var command = new RemoteCommand("FormEditorWebService", "GetWebResourceType");
            command.SetParameter("id", wrId);
            var result = command.Execute();
            if (result.Success)
                typeCode = result.ReturnValue
        }
    } catch (e) {
    }
    return typeCode
}

function IsImageWebResourceType(webResourceType) {
    switch (webResourceType) {
    case WebResourceTypes.png:
    case WebResourceTypes.jpg:
    case WebResourceTypes.gif:
    case WebResourceTypes.ico:
        return true;
    default:
        return false
    }
}

function OpenManagedProperties() {
    if (!IsNull(Mscrm.FormEditorVariables.currentFormId) &&
        Mscrm.FormEditorVariables.currentFormId != Mscrm.FormXmlUtils.emptyGuid) {
        Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(Mscrm.EntityTypeCode.SystemForm,
            Mscrm.FormEditorVariables.currentFormId);
        !IsNull(window.top) &&
            !IsNull(window.top.opener) &&
            window.top.opener.auto(Mscrm.EntityTypeCode.SystemForm)
    }
}

function NewFormDisabledControlRule() {
    return Mscrm.FormEditorRibbonRules.newFormDisabledControlRule()
}

function IsAirUpdated() {
    if (typeof _isAirUpdated != "undefined" && (_isAirUpdated == "true" || _isAirUpdated == "True"))
        return true;
    else
        return false
}

function setAttributeIfNotDefaultValue(oNode, sAttributeName, sValue, sDefaultValue) {
    if (sValue !== sDefaultValue)
        oNode.setAttribute(sAttributeName, sValue);
    else
        oNode.getAttributeNode(sAttributeName) &&
            oNode.removeAttribute(sAttributeName)
}

var isMouseDown = false;

function OnDocumentMouseDown() {
    isMouseDown = true
}

function OnDocumentMouseUp() {
    isMouseDown = false;
    if (!IsNull(_draggedItem) && !_draggedItem.get_isDragging()) {
        _draggedItem.dispose();
        _draggedItem = null
    }
}

function IsTabNameUnique(sTabName, tabId, formXml) {
    if (IsNull(XUI.Xml.SelectSingleNode(formXml,
        "/entity/form/tabs/tab[@name='" + sTabName + "' and @id !='" + tabId + "']",
        null)))
        return true;
    else
        return false
}

function IsSectionNameUnique(sSectionName, sectionId, formXml) {
    if (IsNull(XUI.Xml.SelectSingleNode(formXml,
            "/entity/form/tabs/tab/columns/column/sections/section [@name='" +
            sSectionName +
            "' and @id !='" +
            sectionId +
            "']",
            null)) &&
        !(sSectionName === "Header" || sSectionName === "Footer"))
        return true;
    else
        return false
}

function GetControlTypeValue(oCell) {
    return Mscrm.FormXmlUtils.getControlType(oCell)
}

function GetFormTypeCode(formTypeName) {
    if (formTypeName == "dashboard")
        return 0;
    else if (formTypeName == "appointmentBook")
        return 1;
    else if (formTypeName == "main")
        return 2;
    else if (formTypeName == "miniCampaignBO")
        return 3;
    else if (formTypeName == "preview")
        return 4;
    else if (formTypeName == "mobile")
        return 5;
    else if (formTypeName == "quick")
        return 6;
    else if (formTypeName == "quickCreate")
        return 7;
    else if (formTypeName == "card")
        return 11;
    else if (formTypeName == "mainInteractionCentric")
        return 12
}

function GetControlClassIdForFormFactor(formXml, customControlUniqueId, formFactor) {
    var classId = null;
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) &&
        !IsNull(customControlUniqueId)) {
        var controlDescriptionsTagXmlNode = XUI.Xml.SelectSingleNode(formXml, "entity/form/controlDescriptions", null);
        controlDescriptor = XUI.Xml.SelectSingleNode(controlDescriptionsTagXmlNode,
            "controlDescription[@forControl='" + customControlUniqueId + "']",
            null);
        if (!IsNull(controlDescriptor)) {
            var customControlNode = XUI.Xml
                .SelectSingleNode(controlDescriptor, "customControl[@formFactor='" + formFactor + "']", null);
            if (!IsNull(customControlNode))
                classId = customControlNode.getAttribute("id")
        }
    }
    return classId
}