
function AddTab(tabTemplateNumber) {
    var childNum = 0;
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        return;
    if (_iTabs < _iMaxTabs) {
        var tabTemplate = _templates[tabTemplateNumber],
            iTabCols = tabTemplate.Columns,
            tabCols = tabTemplate.ColWidths,
            oArgs = {};
        oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
        var tabId = createGuid(),
            tabName = Mscrm.TabUtils.getNextTabName(_iTabs),
            oTab = new TabObj(tabId,
                new Array(new LocalizedObj(LOCID_FORMEDITOR_TAB_LABEL, _langCode)),
                false,
                true,
                iTabCols,
                tabCols,
                true,
                Mscrm.FormEditorVariables.formXml,
                true,
                true,
                tabName);
        if (oTab && AddTabXml(oTab, iTabCols)) {
            if (_oActive != null) {
                for (var tabName = GetCurrentTabName(_oActive),
                    tabNodes = [],
                    allChildDivs = $get("tabs").getElementsByTagName("DIV"),
                    k = 0;
                    k < allChildDivs.length;
                    k++)
                    allChildDivs[k].parentNode.id == "tabs" &&
                        tabNodes.push(allChildDivs[k]);
                if (!IsNull(tabNodes))
                    for (childNum = 0; childNum < tabNodes.length; childNum++)
                        if (XUI.Html.DomUtils.GetFirstChild(tabNodes[childNum]).getAttribute("id") === tabName)
                            break
            }
            AddTabHtml(oTab, iTabCols, childNum);
            _iTabs++;
            _iNextTabId++;
            for (var tabChild = XUI.DomUtilities.GetChildElementAt($get("tabs"), childNum + 1),
                i = 1;
                i <= iTabCols;
                i++)
                AddSection(XUI.Html.DomUtils.GetFirstChild(tabChild), i - 1, "1", false);
            RefreshFormEditor(Mscrm.Render.wholeCanvas);
            SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor);
            var addedTab = $get(tabId);
            !IsNull(addedTab) &&
                Mscrm.Utilities.click(addedTab)
        }
    } else
        alert(LOCID_FORMED_MAXNUMBERTABS)
}

function UpdateTab(oActive) {
    var sTabId = oActive.id,
        oTab = GetTabNode(sTabId),
        oLabels = GetLocalizedObjsArray(XUI.Xml.SelectNodes(oTab, "labels/label", null)),
        sTabName = oTab.getAttribute("name"),
        bLockTab = oTab.getAttribute("locklevel") == "1",
        autoExpand = oTab.getAttribute("expanded"),
        showLabel = oTab.getAttribute("showlabel"),
        bVisible = oTab.getAttribute("visible") !== "false",
        bAvailable = oTab.getAttribute("availableforphone") !== "false",
        bShowLabel = true;
    if (showLabel != null)
        bShowLabel = showLabel.toString() == "true";
    var bAutoExpand = true;
    if (autoExpand != null)
        bAutoExpand = autoExpand.toString() == "true";
    for (var tabCols = XUI.Xml.SelectNodes(oTab, "columns/column", null),
        itabCols = tabCols.length,
        icolWidths = [100, 0, 0],
        i = 0;
        i < itabCols;
        i++) {
        var colWidth = tabCols[i].getAttribute("width");
        icolWidths[i] = parseInt(colWidth.substr(0, colWidth.length - 1), 10)
    }
    var oTab = new TabObj(sTabId,
            oLabels,
            bLockTab,
            bAutoExpand,
            itabCols,
            icolWidths,
            bShowLabel,
            Mscrm.FormEditorVariables.formXml,
            bVisible,
            bAvailable,
            sTabName),
        oArgs = {};
    oArgs.Tab = oTab;
    oArgs.LangCode = _langCode;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    oArgs.oFieldsXml = oFieldsXml;
    oArgs.oPropertiesXml = oPropertiesXml;
    oArgs.ObjectTypeCode = _objectTypeCode;
    if (Mscrm.FormEditorVariables.FormType != "card") {
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = _subGridDefaults.iDialogHeight;
        dialogOptions.width = _subGridDefaults.iDialogWidth;
        var dialogUrl = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/tab.aspx?title=" +
                CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_TABPROPS) +
                "&description=" +
                CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_MODIFYTABPROPS) +
                "&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.editorType) +
                "&formType=" +
                CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.FormType)),
            tabDoubleClickedCallBackClosure = function(arguments) {
                return tabDoubleClickedCallBack(oTab, oActive, arguments)
            };
        Xrm.Internal.openDialog(dialogUrl.toString(), dialogOptions, oArgs, null, tabDoubleClickedCallBackClosure)
    }
}

function tabDoubleClickedCallBack(oTab, oActive, oUpdatedTab) {
    if (oUpdatedTab) {
        var fRefreshFormEditor = false;
        if (!IsNull(oUpdatedTab.FormXml) &&
            XUI.Xml.XMLSerializer.serializeToString(oUpdatedTab.FormXml) !=
            XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml)) {
            fRefreshFormEditor = true;
            Mscrm.FormEditorVariables.formXml = oUpdatedTab.FormXml
        }
        UpdateTabXml(oTab, oUpdatedTab);
        UpdateTabHtml(oActive, oTab, oUpdatedTab);
        if (oTab.Labels[0].Description !== oUpdatedTab.Labels[0].Description || fRefreshFormEditor) {
            var scrollTop = $get("editorDiv").scrollTop;
            RefreshFormEditorAndClick();
            SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor);
            $get("editorDiv").scrollTop = scrollTop
        } else
            Mscrm.Utilities.click(oActive)
    }
}

function IsTabModified(oTabOriginal, oUpdatedTab) {
    if (oTabOriginal.TabName != oUpdatedTab.TabName ||
        oTabOriginal.Visible != oUpdatedTab.Visible ||
        oTabOriginal.AvailableForPhone != oUpdatedTab.AvailableForPhone ||
        oTabOriginal.ShowLabel != oUpdatedTab.ShowLabel ||
        oTabOriginal.ColWidths[2] != oUpdatedTab.ColWidths[2] ||
        oTabOriginal.ColWidths[1] != oUpdatedTab.ColWidths[1] ||
        oTabOriginal.ColWidths[0] != oUpdatedTab.ColWidths[0] ||
        oTabOriginal.ExpandByDefault != oUpdatedTab.ExpandByDefault ||
        oTabOriginal.LockTab != oUpdatedTab.LockTab ||
        oTabOriginal.Columns != oUpdatedTab.Columns ||
        GetDescByLangCode(oTabOriginal.Labels) != GetDescByLangCode(oUpdatedTab.Labels))
        return true;
    else
        return false
}

function AddTabXml(oTabObj, iTabCols) {
    if (oTabObj.TabId == null || oTabObj.TabId.length == 0)
        return false;
    var oTabs = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs", null),
        refChild = null;
    if (_oActive != null) {
        var tabName = GetCurrentTabName(_oActive),
            tabNode = GetTabNode(tabName);
        refChild = XUI.Html.DomUtils.GetNextSibling(tabNode)
    }
    var oTab = Mscrm.FormEditorVariables.formXml.createElement("tab");
    oTab.setAttribute("name", oTabObj.TabName);
    oTab.setAttribute("id", oTabObj.TabId);
    oTab.setAttribute("IsUserDefined", "0");
    oTab.setAttribute("locklevel", oTabObj.LockTab == true ? "1" : "0");
    oTab.setAttribute("showlabel", oTabObj.ShowLabel.toString());
    setAttributeIfNotDefaultValue(oTab, "visible", oTabObj.Visible.toString(), "true");
    setAttributeIfNotDefaultValue(oTab, "availableforphone", oTabObj.AvailableForPhone.toString(), "true");
    oTab.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    oTabs.insertBefore(oTab, refChild);
    var oColumns = Mscrm.FormEditorVariables.formXml.createElement("columns");
    oTab.appendChild(oColumns);
    for (var i = 0; i < iTabCols; i++) {
        var oColumn = Mscrm.FormEditorVariables.formXml.createElement("column");
        oColumn.setAttribute("width", oTabObj.ColWidths[i].toString() + "%");
        oColumn.appendChild(Mscrm.FormEditorVariables.formXml.createElement("sections"));
        oColumns.appendChild(oColumn)
    }
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab[@id = '" + oTabObj.TabId + "']/labels/label",
        oTabObj.Labels);
    return true
}

function UpdateTabXml(oTabObj, oUpdatedTabObj) {
    var oTab = GetTabNode(oTabObj.TabId);
    IsTabModified(oTabObj, oUpdatedTabObj) &&
        oTab.setAttribute(Mscrm.FormXmlAttributes.designerAddedNameAttribute, "false");
    oTab.setAttribute("name", oUpdatedTabObj.TabName);
    oTab.setAttribute("locklevel", oUpdatedTabObj.LockTab == true ? "1" : "0");
    oTab.setAttribute("expanded", oUpdatedTabObj.ExpandByDefault.toString());
    oTab.setAttribute("showlabel", oUpdatedTabObj.ShowLabel.toString());
    setAttributeIfNotDefaultValue(oTab, "visible", oUpdatedTabObj.Visible.toString(), "true");
    setAttributeIfNotDefaultValue(oTab, "availableforphone", oUpdatedTabObj.AvailableForPhone.toString(), "true");
    var iUpdatedTabCols = oUpdatedTabObj.Columns,
        iOriginalTabCols = oTabObj.Columns;
    if (iUpdatedTabCols > iOriginalTabCols) {
        for (var columnsToAdd = iUpdatedTabCols - iOriginalTabCols,
            i = 0;
            i < columnsToAdd;
            i++) {
            var tabColumnToUpdate = i + iOriginalTabCols,
                tabCol = Mscrm.FormEditorVariables.formXml.createElement("column");
            tabCol.setAttribute("width", oUpdatedTabObj.ColWidths[tabColumnToUpdate].toString() + "%");
            XUI.Xml.SelectSingleNode(oTab, "columns", null).appendChild(tabCol);
            var sectionsNode = Mscrm.FormEditorVariables.formXml.createElement("sections");
            tabCol.appendChild(sectionsNode)
        }
        UpdateTabColumnWidths(oTab, oUpdatedTabObj)
    }
    if (iUpdatedTabCols < iOriginalTabCols) {
        for (var columnsToRemove = iOriginalTabCols - iUpdatedTabCols,
            i = columnsToRemove - 1;
            i >= 0;
            i--) {
            var tabColumnToUpdate = i + iUpdatedTabCols;
            XUI.Xml.SelectSingleNode(oTab, "columns", null)
                .removeChild(XUI.Xml.SelectNodes(oTab, "columns/column", null)[tabColumnToUpdate])
        }
        UpdateTabColumnWidths(oTab, oUpdatedTabObj)
    }
    iUpdatedTabCols == iOriginalTabCols &&
        IsTabModified(oTabObj, oUpdatedTabObj) &&
        UpdateTabColumnWidths(oTab, oUpdatedTabObj);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab[@id = '" + oUpdatedTabObj.TabId + "']/labels/label",
        oUpdatedTabObj.Labels)
}

function UpdateTabColumnWidths(oTab, oUpdatedTabObj) {
    for (var i = 0; i < oUpdatedTabObj.Columns; i++)
        XUI.Xml.SelectNodes(oTab, "columns/column", null)[i]
            .setAttribute("width", oUpdatedTabObj.ColWidths[i].toString() + "%")
}

function AddTabHtml(oTabObj, iTabCols, childNum) {
    var imgStyle = "cursor:pointer;";
    if (LOCID_UI_DIR == "RTL")
        imgStyle = Mscrm.Utilities.flipImage("h");
    var tabChild = XUI.DomUtilities.GetChildElementAt($get("tabs"), childNum),
        insertHtml = new Sys.StringBuilder;
    insertHtml.append("<div><table valign='top' style='table-layout: fixed;' class='ms-crm-Tab' tabID='" +
        CrmEncodeDecode.CrmHtmlAttributeEncode(oTabObj.TabId) +
        "' id='" +
        CrmEncodeDecode.CrmHtmlAttributeEncode(oTabObj.TabId) +
        "' name='" +
        CrmEncodeDecode.CrmHtmlAttributeEncode(oTabObj.TabName) +
        "' onmouseover ='RegisterDragObject(Mscrm.Utilities.eventToDomEvent(event));' onclick='SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));' onmousedown='SetActiveObject(Mscrm.Utilities.eventToDomEvent(event));' ondblclick='ViewPropertiesNow(Mscrm.Utilities.eventToDomEvent(event));' width='100%'>" +
        (oTabObj.LockTab == true
            ? "<img alt='" +
            CrmEncodeDecode.CrmHtmlAttributeEncode(LOCID_FORMEDITOR_TAB_LOCKED) +
            "' class='imgLock' src='/_imgs/tools/ico_lock.gif' />"
            : "") +
        "<tr><td name='tabData'><a name='tabHeader' expanded='true' id='tabHeader_" +
        CrmEncodeDecode.CrmHtmlAttributeEncode(oTabObj.TabId) +
        "' class='ms-crm-Menu-Label' onclick='Mscrm.TabUtils.expandCollapseTab(this)' ><IMG style='" +
        imgStyle +
        "' name='tabImage' class='ms-crm-Menu-ButtonFirst' alt='' id='tabImage_" +
        CrmEncodeDecode.CrmHtmlAttributeEncode(oTabObj.TabId) +
        "' src='/_imgs/tab_section_down.png' /><SPAN style='cursor:pointer;' name='tabText' class='ms-crm-InlineTabHeaderText' style='font-size:12px;font-weight:bold'>" +
        CrmEncodeDecode.CrmHtmlEncode(GetDescByLangCode(oTabObj.Labels)) +
        "</SPAN></a><table cellspacing='0' cellpadding='0' class='stdTable' id='tabBody_" +
        CrmEncodeDecode.CrmHtmlAttributeEncode(oTabObj.TabId) +
        "'>");
    for (var i = 0; i < iTabCols; i++)
        insertHtml.append("<col width='" + CrmEncodeDecode.CrmHtmlEncode(oTabObj.ColWidths[i].toString()) + "%'/>");
    insertHtml.append("<tr>");
    for (var i = 0; i < iTabCols; i++)
        insertHtml
            .append("<td><table cellspacing='0' cellpadding='0' class='stdTable'><tr><td></td></tr></table></td>");
    insertHtml.append("</tr></table></td><tr></table></div>");
    tabChild.insertAdjacentHTML("afterEnd", insertHtml.toString())
}

function UpdateTabHtml(oActive, oTabObj, oUpdatedTabObj) {
    oActive.id = oUpdatedTabObj.TabId;
    var imageSrc = "/_imgs/tab_section_down.png",
        tabImage = $get("tabImage_" + oUpdatedTabObj.TabId),
        imgClass = "ms-crm-ImageStrip-tab_down",
        imgStyle = "";
    if (tabImage != null) {
        imageSrc = tabImage.getAttribute("src");
        if (!isNullOrEmptyString(tabImage.getAttribute("className")))
            imgClass = tabImage.getAttribute("className").replace("ms-crm-Menu-ButtonFirst", "").trim();
        if (tabImage.getAttribute("style") != null)
            imgStyle = tabImage.getAttribute("style").cssText
    }
    var style = "'font-size:12px;font-weight:bold'";
    if (!oUpdatedTabObj.ShowLabel)
        style = "'font-size:12px;font-weight:bold;color:#cccccc'";
    var tabTableContainer = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
        .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oActive)));
    if (oUpdatedTabObj.LockTab == true)
        XUI.Html.DomUtils.GetFirstChild(tabTableContainer)
            .innerHTML = "<IMG name='tabImage' id='tabImage_" +
            CrmEncodeDecode.CrmHtmlAttributeEncode(oActive.id) +
            "' class='" +
            imgClass +
            " ms-crm-Menu-ButtonFirst' style = '" +
            imgStyle +
            "'  alt='' src='" +
            imageSrc +
            "'/><img alt='" +
            CrmEncodeDecode.CrmHtmlAttributeEncode(LOCID_FORMEDITOR_TAB_LOCKED) +
            "' class='imgLock' src='/_imgs/tools/ico_lock.gif' /><SPAN name='tabText' class='ms-crm-InlineTabHeaderText' style=" +
            style +
            ">" +
            CrmEncodeDecode.CrmHtmlEncode(GetDescByLangCode(oUpdatedTabObj.Labels)) +
            "</SPAN>";
    else
        XUI.Html.DomUtils.GetFirstChild(tabTableContainer)
            .innerHTML = "<IMG name='tabImage' id='tabImage_" +
            CrmEncodeDecode.CrmHtmlAttributeEncode(oActive.id) +
            "' class='" +
            imgClass +
            "' style = '" +
            imgStyle +
            "'  alt='' src='" +
            imageSrc +
            "'/><SPAN name='tabText' class='ms-crm-InlineTabHeaderText' style=" +
            style +
            ">" +
            CrmEncodeDecode.CrmHtmlEncode(GetDescByLangCode(oUpdatedTabObj.Labels)) +
            "</SPAN>";
    var tabTable = tabTableContainer.childNodes[1],
        tabColGroup = XUI.Html.DomUtils.GetFirstChild(tabTable),
        tableRow = XUI.Html.DomUtils.GetFirstChild(tabTable.childNodes[1]),
        iUpdatedTabCols = oUpdatedTabObj.Columns,
        iOriginalTabCols = oTabObj.Columns;
    if (iUpdatedTabCols > iOriginalTabCols) {
        for (var columnsToAdd = iUpdatedTabCols - iOriginalTabCols,
            i = 0;
            i < columnsToAdd;
            i++) {
            var tabColumnToUpdate = i + iOriginalTabCols,
                tabCol = document.createElement("col");
            tabCol.setAttribute("width", oUpdatedTabObj.ColWidths[tabColumnToUpdate].toString() + "%");
            tabColGroup.appendChild(tabCol);
            var tableData = document.createElement("td");
            tableRow.appendChild(tableData);
            tableData.innerHTML = "<table cellspacing='5' cellpadding='0' class='stdTable'><tr><td></td></tr></table>";
            AddSection(oActive, tabColumnToUpdate, "1", false, true)
        }
        UpdateTabColumnWidthsHtml(tabColGroup, oUpdatedTabObj)
    } else if (oUpdatedTabObj.Columns < oTabObj.Columns) {
        for (var columnsToRemove = iOriginalTabCols - iUpdatedTabCols,
            i = columnsToRemove - 1;
            i >= 0;
            i--) {
            var tabColumnToUpdate = i + iUpdatedTabCols;
            tabColGroup.removeChild(tabColGroup.childNodes[tabColumnToUpdate]);
            tableRow.removeChild(tableRow.childNodes[tabColumnToUpdate])
        }
        UpdateTabColumnWidthsHtml(tabColGroup, oUpdatedTabObj);
        RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml, oPropertiesXml, oFieldsXml)
    } else
        oUpdatedTabObj.Columns === oTabObj.Columns &&
            IsTabModified(oTabObj, oUpdatedTabObj) &&
            UpdateTabColumnWidthsHtml(tabColGroup, oUpdatedTabObj)
}

function UpdateTabColumnWidthsHtml(tabColGroup, oUpdatedTabObj) {
    for (var i = 0; i < oUpdatedTabObj.Columns; i++)
        tabColGroup.childNodes[i].setAttribute("width", oUpdatedTabObj.ColWidths[i].toString() + "%")
}

function RemoveTab(oActive) {
    if (_iTabs > 1) {
        var oTab = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab[@id = '" + GetCurrentTabName(oActive) + "']",
            null);
        if (oTab.getAttribute("locklevel") == "1") {
            alert(LOCID_FORMED_REMOVETABLOCKED);
            return false
        }
        if (XUI.Xml.SelectSingleNode(oTab, "columns/column/sections/section[@locklevel and @locklevel != '0']", null)) {
            alert(LOCID_FORMED_REMOVETABLOCKEDSEC);
            return false
        }
        var oNodes = XUI.Xml.SelectNodes(oTab, "columns/column/sections/section/rows/row/cell/control", null);
        if (!IsRemovable(oNodes)) {
            alert(LOCID_FORMED_REMOVETABLOCKEDFLD);
            return false
        }
        var sfieldList = GetDependentList(oNodes, true);
        if (sfieldList.length > 0) {
            alert(LOCID_FORMED_TABFLDDEPENDENTTITL +
                "\n\n" +
                LOCID_FORMED_TABFLDDEPENDENTHEAD +
                "\n\n" +
                sfieldList +
                "\n\n" +
                LOCID_FORMED_TABFLDDEPENDENTFOOT);
            return false
        }
        var oTab = GetTabNode(oActive.id),
            tabId = GetNextTabIdToClick(oTab);
        if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor && !IsNull(oTab)) {
            var controlType = Mscrm.FormXmlUtils.getControlType(oTab);
            Mscrm.DependenciesUtils.hasDependencies(oTab, controlType) &&
                Mscrm.DependenciesUtils.removeLockLevelForEventDependencies(oTab, controlType);
            Mscrm.FieldPropertiesUtils
                .removeHandlersFromFields(XUI.Xml
                    .SelectNodes(oTab, "columns/column/sections/section/rows/row/cell", null))
        }
        RemoveControlDescriptorsForNodes(oNodes);
        RemoveTabXml(oTab);
        RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml, oPropertiesXml, oFieldsXml);
        RefreshFormEditor(Mscrm.Render.wholeCanvas);
        SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor);
        var tabToClick = $get(tabId);
        !IsNull(tabToClick) &&
            Mscrm.Utilities.click(tabToClick);
        _iTabs--;
        return true
    } else {
        alert(LOCID_FORMED_ATLEASTONETAB);
        return false
    }
}

function GetNextTabIdToClick(oTab) {
    var tabId = null,
        tabNode = XUI.Html.DomUtils.GetNextSibling(oTab);
    if (IsNull(tabNode))
        tabNode = XUI.Html.DomUtils.GetPrevSibling(oTab);
    if (!IsNull(tabNode))
        tabId = tabNode.getAttribute("id");
    return tabId
}

function RemoveTabXml(oTab) {
    oTab.parentNode.removeChild(oTab)
}

function RemoveTabHtml(oActive) {
    if (!XUI.Html.DomUtils.GetPrevSibling(oActive))
        Mscrm.Utilities.click(XUI.Html.DomUtils.GetNextSibling(oActive));
    else
        Mscrm.TabUtils.clickFirstTab();
    oTab = $get(oActive.id);
    oTab.parentNode.removeChild(oTab)
}