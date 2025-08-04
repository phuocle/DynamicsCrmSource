
var SelectedColorFocused = "#c4ddff",
    SelectedColorUnfocused = "#eeeeee";

function checkMode(mode, option) {
    return (mode & option) == option
}

var _lastSearchMultiLookup = null,
    _lastSearchEntityId = null,
    _lastSearchRowToSelect = -1;

function search(multiLookup, entityId) {
    document.body.style.cursor = "wait";
    var crmGrid = $find("crmGrid");
    crmGrid.SetParameter("Mode", _mode);
    crmGrid.SetParameter("ObjectType", $get("selObjects").value);
    if (!checkMode(_mode, LookupBrowse)) {
        _lastSearchMultiLookup = multiLookup;
        _lastSearchEntityId = entityId;
        crmGrid.add_onRefresh(addNewlyCreatedItem);
        var findValue = $get("crmGrid_findCriteria");
        if (findValue) {
            crmGrid.SetParameter("quickfind", findValue.value);
            findValue.focus();
            Mscrm.CrmUIBehavior.getBehaviorByName(findValue, "HintText").notifyFocus();
            $find("crmGrid_quickFindContainer").RunQuickFind()
        }
    }
    crmGrid.ClearPagingCookie();
    crmGrid.set_pageNumber(1);
    document.body.style.cursor = "auto"
}

function addNewlyCreatedItem() {
    var crmGrid = $find("crmGrid");
    crmGrid.remove_onRefresh(addNewlyCreatedItem);
    _lastSearchRowToSelect = -1;
    if (_lastSearchEntityId != null)
        for (var rows = crmGrid.get_innerGrid().get_allRecords(),
            i = 0;
            i < rows.length;
            i++)
            if (rows[i][0] == _lastSearchEntityId) {
                _lastSearchRowToSelect = i;
                break
            }
    window.setTimeout(function() {
            if (_lastSearchRowToSelect != -1) {
                var crmGrid = $find("crmGrid"),
                    innerGrid = crmGrid.get_innerGrid();
                if (innerGrid != null) {
                    innerGrid.UnselectRecords();
                    innerGrid.SelectRecords(_lastSearchRowToSelect, _lastSearchRowToSelect, true);
                    innerGrid.get_allRecords()[_lastSearchRowToSelect][3].scrollIntoView();
                    if (LOCID_UI_DIR == "RTL")
                        $get("crmGrid_divDataArea").scrollLeft = innerGrid.get_element().clientWidth
                }
            }
            if (_lastSearchMultiLookup) {
                removeItem(_lastSearchEntityId);
                addItems()
            }
            _lastSearchMultiLookup = null;
            _lastSearchEntityId = null
        },
        0)
}

function buildReturnValue(rows, defaultOnClick, entityTypeName) {
    for (var bDefaultOnClick = typeof defaultOnClick == "undefined" ? false : defaultOnClick,
        lookupItems = new LookupItems,
        len = rows.length,
        i = 0;
        i < len;
        i++) {
        var tr = rows[i][3],
            parentTable = tr.parentNode.parentNode,
            primaryFieldName = parentTable.getAttribute("primaryfieldname"),
            columns = parentTable.getElementsByTagName("col");
        !IsNull(tr.getAttribute("oid")) &&
            addLookupItem(tr, columns, lookupItems, primaryFieldName, entityTypeName)
    }
    if (bDefaultOnClick) {
        len = lookupItems.items.length;
        for (var i = 0; i < len; i++)
            lookupItems.items[i].onclick = "openlui(new Sys.UI.DomEvent(event));"
    }
    return lookupItems
}

function showProperties() {
    var crmGrid = $find("crmGrid"),
        items = crmGrid.get_innerGrid().get_selectedRecords();
    if (items.length == 0)
        alert(LOCID_SELECT_AN_OBJECT);
    else if (items.length > 1)
        alert(LOCID_SELECT_ONE_OBJECT);
    else {
        var nWidth = 560,
            nHeight = 525,
            oWindowInfo = GetWindowInformation(items[0][3].getAttribute("otype"));
        if (oWindowInfo != null) {
            nWidth = oWindowInfo.Width;
            nHeight = oWindowInfo.Height
        }
        var oUrl = null;
        switch (Number(items[0][3].getAttribute("otype"))) {
        case Service:
            oUrl = Mscrm.CrmUri.create("/sm/services/readonly.aspx");
            oUrl.get_query()["objTypeCode"] = items[0][3].getAttribute("otype");
            oUrl.get_query()["id"] = items[0][3].getAttribute("oid");
            openStdWin(oUrl, "readonly" + buildWinName(items[0][3].getAttribute("oid")), nWidth, nHeight);
            break;
        case ImportMap:
            oUrl = Mscrm.CrmUri.create("/tools/managemaps/readonly.aspx");
            oUrl.get_query()["objTypeCode"] = items[0][3].getAttribute("otype");
            oUrl.get_query()["id"] = items[0][3].getAttribute("oid");
            openStdWin(oUrl, "readonly" + buildWinName(items[0][3].getAttribute("oid")), nWidth, nHeight);
            break;
        default:
            openObj(items[0][3].getAttribute("otype"), items[0][3].getAttribute("oid"));
            break
        }
    }
}

function createNew() {
    var iTypeCode = parseInt($get("selObjects").value, 10),
        sParams = "",
        windowSearch = Mscrm.CrmUri.create(window.location.search);
    if (!IsNull(windowSearch.get_query()["parentId"]) && !IsNull(windowSearch.get_query()["parentType"]))
        if (iTypeCode === CustomerAddress) {
            sParams += "objecttypecode=" + CrmEncodeDecode.CrmUrlEncode(windowSearch.get_query()["parentType"]);
            sParams += "&parentid=" + CrmEncodeDecode.CrmUrlEncode(windowSearch.get_query()["parentId"])
        } else {
            sParams += "_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode(windowSearch.get_query()["parentType"]);
            sParams += "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode(windowSearch.get_query()["parentId"])
        }
    else if (window.parent != null)
        if (iTypeCode == SavedQuery) {
            var selectEntityControl = null,
                parentEntityTypeCode = Mscrm.CrmUri.create(window.parent.location.href).get_query()["etc"];
            if (!IsNull(parentEntityTypeCode) && parentEntityTypeCode == MobileOfflineProfileItem)
                selectEntityControl = window.opener.document.getElementById("selectedentitytypecode_i");
            else {
                var currentObectType = windowSearch.get_query()["currentObjectType"];
                if (!IsNull(currentObectType) && currentObectType == MobileOfflineProfileItem) {
                    var contentIFrame = window.parent.document.getElementById("contentIFrame0");
                    if (!IsNull(contentIFrame)) {
                        var innerDoc = contentIFrame.contentDocument || contentIFrame.contentWindow.document;
                        if (!IsNull(innerDoc))
                            selectEntityControl = innerDoc.getElementById("selectedentitytypecode_i")
                    }
                }
            }
            if (!Mscrm.InternalUtilities.JSTypes.isNull(selectEntityControl) && selectEntityControl.length > 0) {
                var entityTypecode = selectEntityControl.options[selectEntityControl.selectedIndex].value;
                sParams += "&objectTypeCode=" + CrmEncodeDecode.CrmUrlEncode(entityTypecode)
            }
        }
    if (iTypeCode === Calendar && !IsNull(windowSearch.get_query()["serviceCalendarType"]))
        sParams += "serviceCalendarType=" +
            CrmEncodeDecode.CrmUrlEncode(windowSearch.get_query()["serviceCalendarType"]);
    if (sParams === "")
        sParams = null;
    openObj(iTypeCode, null, sParams, null, 0, null)
}

function addLookupItem(tr, columns, lookupItems, primaryFieldName, entityTypeName) {
    var td = null;
    if (primaryFieldName) {
        for (var len = columns.length,
            i = 0;
            i < len;
            ++i)
            if (columns[i].getAttribute("name") === primaryFieldName) {
                td = tr.cells[i];
                break
            }
    } else {
        var oSecondCell = tr.cells[1];
        td = XUI.Html.DomUtils.GetFirstChild(oSecondCell).nodeName === "IMG" ? tr.cells[2] : oSecondCell
    }
    if (td == null) {
        var oSecondCell = tr.cells[1];
        td = XUI.Html.DomUtils.GetFirstChild(oSecondCell).nodeName === "IMG" ? tr.cells[2] : oSecondCell
    }
    var li = new LookupItem;
    li.id = tr.getAttribute("oid");
    li.name = XUI.Html.GetText(td);
    li.html = td.innerHTML;
    li.type = tr.getAttribute("otype");
    li.selected = false;
    li.values = [];
    li.keyValues = {};
    li.onclick = "toggleSelectLookupItem(this)";
    li.typename = entityTypeName;
    for (var len = columns.length,
        i = 1;
        i < len;
        ++i) {
        var sColumnName = columns[i].getAttribute("name");
        if (sColumnName) {
            var sCellValue = "",
                oCell = tr.cells[i];
            if (oCell)
                sCellValue = XUI.Html.GetText(oCell);
            var oAttribute = tr.attributes[sColumnName];
            if (oAttribute)
                sCellValue = oAttribute.value;
            li.keyValues[sColumnName] = new Mscrm.FormInputControl.LookupItemData(sColumnName, sCellValue);
            li.values.push(new Mscrm.FormInputControl.LookupItemData(sColumnName, sCellValue))
        }
    }
    var oSerializer = Sys.Serialization.JavaScriptSerializer;
    li.values = oSerializer.serialize(li.values);
    li.keyValues = oSerializer.serialize(li.keyValues);
    lookupItems.items.push(li)
}