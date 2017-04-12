
var LookupBrowse = 1,
    LookupShowColumns = 2,
    LookupMultiSelect = 4,
    IsMobileRefresh = typeof IsMobileRefresh != "undefined" && IsMobileRefresh;

function LookupItem() {
    this.id = "";
    this.name = "";
    this.html = "";
    this.type = "";
    this.values = null;
    this.keyValues = null;
    this.category = null;
    this.ambiguousRecordsXml = null;
    this.selected = false;
    this.displayclass = "";
    this.processId = "";
    this.processTimestamp = ""
}

function LookupItems() {
    this.items = []
}

function LookupItemData(name, value) {
    this.name = name;
    this.value = value
}

function LookupArgsClass() {
    this.items = null;
    this.customViews = null;
    this.availableViews = null
}

function LookupControlItem(sId,
    iType,
    sName,
    sOnclick,
    sDisplayClass,
    sData,
    sTypeName,
    iCategory,
    sAmbiguousRecordsXml,
    bSelected) {
    this.id = sId;
    this.type = iType;
    this.name = sName;
    this.onclick = sOnclick;
    this.displayClass = sDisplayClass;
    this.data = sData;
    this.typename = sTypeName;
    this.category = iCategory;
    this.ambiguousRecordsXml = sAmbiguousRecordsXml;
    this.selected = bSelected
}

function CustomView(id, iRecordTypeId, sName, sFetchXml, sLayoutXml) {
    this.id = id;
    this.recordType = iRecordTypeId;
    this.name = sName;
    this.fetchXml = sFetchXml;
    this.layoutXml = sLayoutXml;
    this.Type = 0
}

function LookupObjectsForOutlook(lookupField) {
    if (!IsNull(lookupField)) {
        lookupField = Mscrm.FormControlInputBehavior.GetBehavior(lookupField);
        lookupField.Lookup()
    }
}

function LookupObjectsWithCallback(callbackReference,
    lookupField,
    lookupStyle,
    lookupTypes,
    lookupBrowse,
    bindingColumns,
    additionalParams,
    showNew,
    showProp,
    bPopulateLookup,
    defaultType,
    searchString,
    dataProviderOverride,
    defaultViewId,
    customViews,
    filterRelationshipId,
    rId,
    rType,
    rDependAttr,
    allowFilterOff,
    disableQuickFind,
    disableViewPicker,
    viewsIds,
    additionalFetchFilter,
    additionalFetchFilterTypes,
    crmAttributeId) {
    return LookupObjects(lookupField,
        lookupStyle,
        lookupTypes,
        lookupBrowse,
        bindingColumns,
        additionalParams,
        showNew,
        showProp,
        bPopulateLookup,
        defaultType,
        searchString,
        dataProviderOverride,
        defaultViewId,
        customViews,
        filterRelationshipId,
        rId,
        rType,
        rDependAttr,
        allowFilterOff,
        disableQuickFind,
        disableViewPicker,
        viewsIds,
        !IsNull(crmAttributeId) ? crmAttributeId : "",
        callbackReference,
        additionalFetchFilter,
        additionalFetchFilterTypes)
}

function LookupObjects(lookupField,
    lookupStyle,
    lookupTypes,
    lookupBrowse,
    bindingColumns,
    additionalParams,
    showNew,
    showProp,
    bPopulateLookup,
    defaultType,
    searchString,
    dataProviderOverride,
    defaultViewId,
    customViews,
    filterRelationshipId,
    rId,
    rType,
    rDependAttr,
    allowFilterOff,
    disableQuickFind,
    disableViewPicker,
    viewsIds) {
    LookupObjects(lookupField,
        lookupStyle,
        lookupTypes,
        lookupBrowse,
        bindingColumns,
        additionalParams,
        showNew,
        showProp,
        bPopulateLookup,
        defaultType,
        searchString,
        dataProviderOverride,
        defaultViewId,
        customViews,
        filterRelationshipId,
        rId,
        rType,
        rDependAttr,
        allowFilterOff,
        disableQuickFind,
        disableViewPicker,
        viewsIds,
        "",
        null)
}

function LookupObjects(lookupField,
    lookupStyle,
    lookupTypes,
    lookupBrowse,
    bindingColumns,
    additionalParams,
    showNew,
    showProp,
    bPopulateLookup,
    defaultType,
    searchString,
    dataProviderOverride,
    defaultViewId,
    customViews,
    filterRelationshipId,
    rId,
    rType,
    rDependAttr,
    allowFilterOff,
    disableQuickFind,
    disableViewPicker,
    viewsIds,
    crmAttributeId,
    callbackReference,
    additionalFetchFilter,
    additionalFetchFilterTypes) {
    var args = new LookupArgsClass;
    args.customViews = customViews;
    args.availableViews = viewsIds;
    args.additionalFetchFilter = additionalFetchFilter;
    args.additionalFetchFilterTypes = additionalFetchFilterTypes;
    if (lookupField != null) {
        args.items = [];
        for (var a = lookupField.getElementsByTagName("SPAN"),
            bSetSearchString = searchString === "" || IsNull(searchString),
            tempDefaultType = defaultType,
            isTypeUnresolved = 1,
            i = a.length - 1;
            i >= 0;
            i--)
            if (a[i].getAttribute("wrapper") != "true") {
                var item = a[i];
                if (item.getAttribute("otype") !== "0" ||
                    item.getAttribute("otypename") !== "" ||
                    !IsNull(item.getAttribute("activitypartyid"))) {
                    !IsNull(item.getAttribute(Mscrm.BusinessProcessConstants.ProcessId)) &&
                        item.setAttribute(Mscrm.BusinessProcessConstants.ProcessId,
                            item.getAttribute(Mscrm.BusinessProcessConstants.ProcessId));
                    !IsNull(item.getAttribute(Mscrm.BusinessProcessConstants.ProcessTimestamp)) &&
                        item.setAttribute(Mscrm.BusinessProcessConstants.ProcessTimestamp,
                            item.getAttribute(Mscrm.BusinessProcessConstants.ProcessTimestamp));
                    args.items.push(item);
                    tempDefaultType = item.getAttribute("otype");
                    isTypeUnresolved = 0
                } else {
                    if (bSetSearchString == true)
                        searchString = XUI.Html.GetText(item);
                    if (searchString === XUI.Html.GetText(item) && !IsNull(item.getAttribute("ambiguousRecordsXml")))
                        for (var oXmlDoc = XUI.Xml.LoadXml(item.getAttribute("ambiguousRecordsXml")),
                            oRecords = XUI.Xml.SelectNodes(oXmlDoc, "/records/record", null),
                            oLookupCtrl = getLookupControlFromItemSpan(item),
                            iaLookupTypes = oLookupCtrl.get_lookupTypes().split(","),
                            j = 0;
                            j < oRecords.length;
                            j++) {
                            var iObjectType = parseInt(oRecords[j].getAttribute("otype"), 10);
                            if (j == 0)
                                tempDefaultType = iObjectType;
                            else if (iObjectType != tempDefaultType)
                                for (var k = 0; k < iaLookupTypes.length; k++)
                                    if (iaLookupTypes[k] == tempDefaultType)
                                        break;
                                    else if (iaLookupTypes[k] == iObjectType) {
                                        tempDefaultType = iObjectType;
                                        break
                                    }
                        }
                }
            }
        if (tempDefaultType != defaultType)
            for (var lookupTypesArr = lookupTypes.split(","),
                i = 0;
                i < lookupTypesArr.length;
                i++)
                if (lookupTypesArr[i] == tempDefaultType) {
                    defaultType = tempDefaultType;
                    defaultViewId = null;
                    break
                }
        args.items.reverse()
    }
    var bIsSubjectLookup = lookupStyle.toUpperCase() === "SUBJECT",
        oUrl = bIsSubjectLookup
            ? Mscrm.CrmUri.create("/_controls/lookup/lookupsubject.aspx")
            : Mscrm.CrmUri.create("/_controls/lookup/lookupinfo.aspx");
    oUrl.get_query()["browse"] = lookupBrowse;
    oUrl.get_query()["IsTypeUnresolved"] = isTypeUnresolved;
    if (!bIsSubjectLookup) {
        if (!IsNull(disableViewPicker))
            oUrl.get_query()["DisableViewPicker"] = disableViewPicker;
        if (!IsNull(disableQuickFind))
            oUrl.get_query()["DisableQuickFind"] = disableQuickFind;
        if (!IsNull(allowFilterOff))
            oUrl.get_query()["AllowFilterOff"] = allowFilterOff;
        if (!IsNull(lookupField)) {
            var behavior = Mscrm.FormControlInputBehavior.GetBehavior(lookupField.id.replace("lookupDiv", "i"));
            if (!IsNull(behavior))
                oUrl.get_query()["IsInlineMultiLookup"] = behavior.get_isInlineMultiLookup() ? "1" : "0"
        }
    }
    if (!isNullOrEmptyString(additionalFetchFilter))
        oUrl.get_query()["suppressfetch"] = 1;
    if (!bIsSubjectLookup)
        oUrl.get_query()["LookupStyle"] = lookupStyle;
    if (typeof dataProviderOverride != "undefined" && !IsNull(dataProviderOverride) && dataProviderOverride != "")
        oUrl.get_query()["DataProvider"] = dataProviderOverride;
    if (bindingColumns)
        oUrl.get_query()["bindingcolumns"] = bindingColumns;
    additionalParams &&
        additionalParams.length > 0 &&
        oUrl.appendToQuery(additionalParams);
    if (!IsNull(showNew))
        if (!additionalParams || additionalParams && additionalParams.indexOf("ShowNewButton=") === -1)
            oUrl.get_query()["ShowNewButton"] = showNew;
    var lookTypeCode = parseInt(lookupTypes, 10);
    if (lookTypeCode == Annotation || lookTypeCode == IncidentResolution)
        oUrl.get_query()["EnableNewButton"] = 0;
    if (lookTypeCode == CustomerAddress) {
        var currentForm = GetCurrentForm(lookupField);
        if (!IsNull(currentForm) && currentForm.ObjectTypeCode == ContractDetail) {
            rType = GetParam(additionalParams, "rType");
            rId = CrmEncodeDecode.CrmUrlDecode(GetParam(additionalParams, "rId"));
            oUrl.get_query()["parentType"] = rType;
            oUrl.get_query()["parentId"] = rId
        }
    }
    if (filterRelationshipId) {
        oUrl.get_query()["relationshipid"] = filterRelationshipId;
        oUrl.get_query()["rId"] = rId;
        oUrl.get_query()["rType"] = rType;
        oUrl.get_query()["rDependAttr"] = rDependAttr
    }
    if (showProp)
        oUrl.get_query()["ShowPropButton"] = showProp;
    if (!IsNull(defaultType))
        oUrl.get_query()["DefaultType"] = defaultType;
    if (searchString)
        oUrl.get_query()["search"] = searchString;
    if (defaultViewId && defaultViewId.length > 0)
        oUrl.get_query()["DefaultViewId"] = defaultViewId;
    oUrl.get_query()["objecttypes"] = lookupTypes;
    oUrl.get_query()["mrsh"] = IsMobileRefresh;
    if (IsMobileRefresh) {
        var queryString = (new Mscrm.GlobalContext).getQueryStringParameters();
        oUrl.get_query()["client_type"] = queryString["client_type"];
        oUrl.get_query()["user_lcid"] = queryString["user_lcid"]
    }
    setMobilePopupMode();
    var oFeatures = BuildFeatures(lookupStyle);
    if (oFeatures == null)
        return;
    bPopulateLookup = "undefined" == typeof bPopulateLookup ? true : bPopulateLookup;
    if (crmAttributeId != "" && !bIsSubjectLookup && oUrl.toString().length >= 2048) {
        oUrl.get_query()["objecttypes"] = null;
        oUrl.get_query()["crmattributeid"] = crmAttributeId
    }
    var parameters = [lookupField, bPopulateLookup, callbackReference],
        callbackFunctionObject = Mscrm.Utilities
            .createCallbackFunctionObject("buildAndReturnLookupItems", this, parameters, false),
        crmDialog = new Mscrm.CrmDialog(oUrl, args, oFeatures.width, oFeatures.height, null);
    crmDialog.setCallbackReference(callbackFunctionObject);
    return crmDialog.show()
}

function setMobilePopupMode() {
    if (IsMobileRefresh) {
        document.body.style.overflow = "hidden";
        document.body.scrollTop = 0;
        document.body.style.height = window.innerHeight + "px";
        document.getElementById("crmForm").style.overflow = "hidden";
        document.getElementById("crmForm").style.height = window.innerHeight - 50 + "px"
    }
}

function resetMobilePopupMode(w) {
    if (!w)
        w = window;
    if (IsMobileRefresh) {
        w.document.body.style.height = "auto";
        w.document.body.style.overflow = "auto";
        w.document.getElementById("crmForm").style.overflow = "auto";
        w.document.getElementById("crmForm").style.height = "auto"
    }
}

function buildAndReturnLookupItems(lookupItems, lookupField, bPopulateLookup, callbackReference) {
    !Mscrm.InternalUtilities.Utilities.isTurboForm() &&
        lookupItems != null &&
        lookupField != null &&
        bPopulateLookup &&
        BuildField(lookupField, lookupItems);
    resetMobilePopupMode();
    if (IsNull(callbackReference))
        return lookupItems;
    Mscrm.Utilities.executeFunction(callbackReference, lookupItems)
}

function GetCurrentForm(element) {
    var o = element;
    while (!IsNull(o) && o.tagName != "FORM")
        o = o.parentNode;
    if (IsNull(o))
        return null;
    return o.className == "ms-crm-Form" ? $find(o.id) : null
}

function GetParam(params, name) {
    if (!IsNull(params) && params != "") {
        var i = params.indexOf(name);
        if (i > -1) {
            var iEnd = params.indexOf("&", i),
                iNameEnd = params.indexOf("=", i);
            if (iEnd == -1)
                iEnd = params.length;
            return params.substring(iNameEnd + 1, iEnd)
        }
    }
    return ""
}

function BuildFieldSpan(lookupField, lookupItems) {
    for (var html = "",
        len = lookupItems.items.length,
        spanElementFormat = '<span class="ms-crm-Lookup-Item" oid="{0}" otype="{1}" selected="{2}">{3}</span>',
        i = 0;
        i < len;
        ++i) {
        var item = lookupItems.items[i];
        html += i > 0 ? " " : "";
        html += String.format(spanElementFormat, item.id, item.type, item.selected, item.html)
    }
    if (html.length == 0)
        html = "&nbsp;";
    return html
}

function BuildField(lookupField, lookupItems) {
    lookupField.innerHTML = BuildFieldSpan(lookupField, lookupItems)
}

function BuildFeatures(lookupStyle) {
    var oFeatures = {};
    switch (lookupStyle) {
    case "multi":
    case "single":
        if (IsMobileRefresh) {
            oFeatures.height = window.innerHeight + 10;
            oFeatures.width = window.innerWidth
        } else {
            oFeatures.height = window.UseTabletExperience ? 630 : 550;
            oFeatures.width = window.UseTabletExperience ? 680 : 550
        }
        break;
    case "subject":
        oFeatures.height = 450;
        oFeatures.width = 500;
        break;
    default:
        alert(LOCID_LOOKUPSTYLE_NOT_SET + lookupStyle);
        return null
    }
    return oFeatures
}

var _clickedElement;

function handleGridClick(domEventObject) {
    domEventObject.stopPropagation();
    o = domEventObject.target;
    while (o.tagName != "SPAN")
        o = o.parentNode;
    _clickedElement = o;
    openlui(domEventObject)
}

function handleLookupAnchorClick(domEventObject) {
    o = domEventObject.target;
    while (o.tagName != "SPAN")
        o = XUI.Html.DomUtils.GetFirstChild(o);
    _clickedElement = o;
    openlui(domEventObject, o)
}

function openDisabledLui(domEventObject) {
    (domEventObject.keyCode == KEY_ENTER || domEventObject.keyCode == KEY_SPACE) &&
        openlui(domEventObject, domEventObject.target)
}

var _oEnhancedPreview = null;

function showPreviewRowWindowTemp(oTr, top, left) {
    return;
    if (IsNull(oTr) || IsNull(oTr.otype) || IsNull(oTr.oid))
        return;
    if (IsNull(_oEnhancedPreview))
        _oEnhancedPreview = new Mscrm.EnhancedPreviewControl;
    _oEnhancedPreview.show(top, left, oTr.otype, oTr.oid, oTr)
}

function handleGridRightClick(domEventObject) {
    domEventObject.stopPropagation();
    domEventObject.preventDefault();
    o = domEventObject.target;
    if (o.getAttribute("wrapper") == "true")
        o = o.parentNode;
    while (o.tagName != "SPAN")
        o = o.parentNode
}

var _oAmbiguousPopup = null;

function openlui(domEventObject, o, isGridClick) {
    if (IsMobileRefresh)
        if (IsNull(isGridClick) || isGridClick == false)
            return;
    var bIsATEvent = false;
    if (IsNull(domEventObject) && IsNull(o))
        o = _clickedElement;
    else if (IsNull(o)) {
        o = domEventObject.target;
        bIsATEvent = o.className == "atLink";
        while (o.tagName != "SPAN" || o.getAttribute("wrapper") == "true")
            o = o.parentNode
    }
    if (o.getAttribute("otype") == UnresolvedAddress)
        resolveAddress(o.getAttribute("otype"), o.getAttribute("oid"));
    else if (o.getAttribute("category") == LookupItemCategories.AMBIGUOUS) {
        var oXmlDoc = XUI.Xml.LoadXml(o.getAttribute("ambiguousRecordsXml"));
        if (IsNull(_oAmbiguousPopup))
            _oAmbiguousPopup = createMenu();
        else
            _oAmbiguousPopup.clear();
        var notificationitem = Mscrm.MenuItem.createMenuItem(LOCID_LOOKUPAMBIGUOUSTITLE),
            listItem = document.createElement("li");
        listItem.style.height = "22px";
        listItem.innerHTML = String
            .format('<div class="Notifications" style="text-align:center;height:18px;padding-top:2px">{0}</div>',
                LOCID_LOOKUPAMBIGUOUSTITLE);
        notificationitem.set_itemContents(listItem);
        notificationitem.set_isFocusable(false);
        _oAmbiguousPopup.addItem(notificationitem);
        for (var oLookupCtrl = getLookupControlFromItemSpan(o),
            oRecords = XUI.Xml.SelectNodes(oXmlDoc, "/records/record", null),
            i = 0;
            i < oRecords.length;
            i++) {
            var item = Mscrm.MenuItem.createMenuItem(oRecords[i].getAttribute("oname"));
            item.set_iconPath(oLookupCtrl.GetLookupTypeIcon(parseInt(oRecords[i].getAttribute("otype"), 10))
                .get_source());
            item.set_tooltip(oRecords[i].getAttribute("oname"));
            item.set_stylePrefix(Mscrm.MenuStyles.lookupMruStylePrefix);
            item.set_reference(i);
            var sCallBack = Function.createDelegate(this,
                function(menuItem) {
                    var oItem = new resolveAmbiguousItem(o, oRecords[menuItem.get_reference()]);
                    oItem.Execute()
                });
            item.set_actionCallback(sCallBack);
            _oAmbiguousPopup.addItem(item)
        }
        var anchorItem = Mscrm.MenuItem.createMenuItem(LOCID_LOOKMORERECORDS_AMBIGUOUS);
        anchorItem.set_stylePrefix(Mscrm.MenuStyles.lookupMruStylePrefix);
        var sCallBack = Function.createDelegate(this,
            function(menuItem) {
                (new showLookupDialogForAmbiguous(oLookupCtrl, XUI.Html.GetText(o))).Execute()
            });
        anchorItem.set_actionCallback(sCallBack);
        anchorItem.get_itemContents().style.textAlign = "center";
        if (!IsNull(XUI.DomUtilities.GetFirstChild(XUI.DomUtilities
            .GetChildElementAt(anchorItem.get_itemContents(), 1)))) {
            var rootSpan = XUI.DomUtilities.GetFirstChild(XUI.DomUtilities
                .GetChildElementAt(anchorItem.get_itemContents(), 1));
            if (!IsNull(XUI.DomUtilities.GetFirstChild(rootSpan))) {
                var leftSpan = XUI.DomUtilities.GetFirstChild(rootSpan);
                leftSpan.style.display = "none"
            }
        }
        var className = anchorItem.get_itemClassName() + " popupMoreLinkItem";
        anchorItem.set_itemClassName(className);
        anchorItem.get_itemContents().className += " popupMoreLinkItem";
        _oAmbiguousPopup.addItem(anchorItem);
        SetPopupDimension(_oAmbiguousPopup, oLookupCtrl);
        _oAmbiguousPopup.show()
    } else if (o.getAttribute("category") == LookupItemCategories.UNKNOWN) {
        var oLookupCtrl = getLookupControlFromItemSpan(o);
        oLookupCtrl.Lookup(true, false, XUI.Html.GetText(o))
    } else if (o.getAttribute("category") != LookupItemCategories.UNKNOWN_TYPE) {
        if (window.UseTabletExperience &&
            !IsNull(window.parent) &&
            !IsNull(window.parent.$get("crmFormSubmitId")) &&
            window.parent.$get("crmFormSubmitId").value == o.getAttribute("oid")) {
            o.parentNode.parentNode.style.textDecoration = "none";
            return
        }
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(o.getAttribute("otype")) &&
            Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(o.getAttribute("oid")))
            return;
        else if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString(o.getAttribute(Mscrm.BusinessProcessConstants.ProcessTimestamp)) &&
            !Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString(o.getAttribute(Mscrm.BusinessProcessConstants.ProcessId))) {
            var entityParams = "?";
            entityParams += Mscrm.BusinessProcessConstants.Process +
                "=" +
                CrmEncodeDecode.CrmUrlEncode(o.getAttribute(Mscrm.BusinessProcessConstants.ProcessId));
            entityParams += "&" +
                Mscrm.BusinessProcessConstants.ProcessTimestamp +
                "=" +
                CrmEncodeDecode.CrmUrlEncode(o.getAttribute(Mscrm.BusinessProcessConstants.ProcessTimestamp));
            entityParams += "&" +
                Mscrm.BusinessProcessConstants.Opened +
                "=" +
                CrmEncodeDecode.CrmUrlEncode(Mscrm.BusinessProcessConstants.Lookup);
            openObj(o.getAttribute("otype"), o.getAttribute("oid"), entityParams)
        } else
            openObj(o.getAttribute("otype"), o.getAttribute("oid"))
    }
}

function createMenu() {
    var menu = Mscrm.Menu.createMenu();
    menu.set_stylePrefix(Mscrm.MenuStyles.lookupMruStylePrefix);
    menu.set_propagateStyle(false);
    return menu
}

function SetPopupDimension(popupControl, oLookupCtrl) {
    var lookupTextElement = XUI.Html.DomUtils.GetFirstChild(oLookupCtrl.get_rootControl()),
        xyPos = Mscrm.Utilities.getXYPos(lookupTextElement, !Mscrm.Utilities.get_isLeftToRight()),
        x = parseInt(xyPos["x"], 10),
        y = parseInt(xyPos["y"], 10),
        w = lookupTextElement.scrollWidth,
        h = lookupTextElement.scrollHeight;
    if (!Mscrm.Utilities.get_isLeftToRight()) {
        x += lookupTextElement.scrollWidth;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
            x += 8
    }
    if (w < 190)
        w = 190;
    if (w > 400)
        w = 400;
    if (Mscrm.Utilities.get_isLeftToRight())
        x = x + 1;
    else
        x = x - 1;
    y = y + h;
    popupControl.set_top(y);
    popupControl.set_left(x);
    popupControl.set_width(w)
}

function getLookupControlFromItemSpan(oItemSpan) {
    for (var lookupTable = oItemSpan.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        tableCells = lookupTable.getElementsByTagName("td"),
        i = 0;
        i < tableCells.length;
        i++)
        if (tableCells[i].className == "Lookup_RenderButton_td")
            return Mscrm.FormControlInputBehavior.GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(tableCells[i]));
    return null
}

function resolveAmbiguousItem(oItem, oChangeToRecord) {
    this.Execute = _execute;

    function _execute() {
        !IsNull(_oAmbiguousPopup) &&
            _oAmbiguousPopup.hide();
        for (var aoValues = [],
            aoKeyValues = {},
            oLookupCtrl = getLookupControlFromItemSpan(oItem),
            oLookupItem = new LookupControlItem(oChangeToRecord.getAttribute("oid"),
                oChangeToRecord.getAttribute("otype"),
                oChangeToRecord.getAttribute("oname"),
                null,
                "ms-crm-Lookup-Item",
                null,
                null,
                false),
            i = 0,
            len = oChangeToRecord.childNodes.length;
            i < len;
            i++) {
            var oNode = oChangeToRecord.childNodes[i],
                sName = oNode.nodeName,
                sValue = XUI.Xml.GetText(oNode);
            aoValues.push(new LookupItemData(sName, sValue));
            aoKeyValues[sName] = new LookupItemData(sName, sValue)
        }
        oLookupItem.values = aoValues;
        oLookupItem.keyValues = aoKeyValues;
        oLookupCtrl.UpdateItem(oItem.getAttribute("oid"), oLookupItem, true)
    }
}

function showLookupDialogForAmbiguous(oLookupControl, sSearchString) {
    this.Execute = _execute;

    function _execute() {
        oLookupControl.Lookup(true, false, sSearchString)
    }
}

var LookupItemCategories = null;
populateLookupItemCategories();

function populateLookupItemCategories() {
    if (IsNull(LookupItemCategories)) {
        LookupItemCategories = {};
        LookupItemCategories.NONE = 0;
        LookupItemCategories.AMBIGUOUS = 1;
        LookupItemCategories.UNKNOWN = 2;
        LookupItemCategories.UNKNOWN_EMAIL = 3;
        LookupItemCategories.NON_ENTITY = 4;
        LookupItemCategories.UNKNOWN_TYPE = 5;
        LookupItemCategories.MRU_ITEM = 6
    }
}

function subjectJstree(treeDiv, jsonTree_Data, control_id) {
    var is_rtl = window.LOCID_UI_DIR.toUpperCase() == "RTL" ? true : false,
        treeBehavior = Mscrm.FormControlInputBehavior.GetBehavior(control_id + "_i"),
        urltheme = null;
    if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled())
        urltheme = "/_Static/_common/scripts/jstree_highcontrast.css";
    else
        urltheme = "/_Static/_common/scripts/jstree.css";
    treeDiv.jstree({
        json_data: jsonTree_Data,
        themes: { dots: false, icons: false, url: urltheme },
        core: { animation: 200, rtl: is_rtl },
        plugins: ["themes", "json_data", "ui", "wholerow", "hotkeys"],
        hotkeys: {
            "return": function() {
                var hoveredObj = $(".jstree-hovered"),
                    subjectItem = hoveredObj.first().text().trim();
                if (this.data.ui.hovered) {
                    if (!IsNull(treeBehavior))
                        treeBehavior.selectInlineSubjectItem(subjectItem, this.data.ui.hovered.data().subjectid);
                    else {
                        var lookupReference = [];
                        lookupReference[0] = {};
                        lookupReference[0].id = this.data.ui.hovered.data().subjectid;
                        lookupReference[0].entityType = "subject";
                        lookupReference[0].name = this.data.ui.hovered.first().text().trim();
                        var isDataUnboundControl = false;
                        if (!IsNull(Mscrm.Utilities) &&
                            Mscrm.Utilities.isTurboForm() &&
                            !IsNull(Mscrm.ServiceRefreshUtilities))
                            isDataUnboundControl = Mscrm.ServiceRefreshUtilities
                                .triggerSearchOnSubjectLookupChange(lookupReference[0], e.target.id);
                        if (!isDataUnboundControl) {
                            var subjectAttribute = Xrm.Page.data.entity.attributes.getByName(control_id);
                            subjectAttribute.setValue(lookupReference);
                            subjectAttribute.fireOnChange()
                        }
                    }
                    !IsNull(treeBehavior) &&
                        treeBehavior.closeTreeDialog()
                }
            }
        }
    });
    treeDiv.bind("select_node.jstree",
        function(e, data) {
            if (!IsNull(treeBehavior)) {
                treeBehavior.selectInlineSubjectItem(data.inst.get_json()[0].data,
                    data.inst.get_json()[0].metadata.subjectid);
                treeBehavior.closeTreeDialog()
            } else {
                var lookupReference = [];
                lookupReference[0] = {};
                lookupReference[0].id = data.inst.get_json()[0].metadata.subjectid;
                lookupReference[0].entityType = "subject";
                lookupReference[0].name = data.inst.get_json()[0].data;
                var isDataUnboundControl = false;
                if (!IsNull(Mscrm.Utilities) && Mscrm.Utilities.isTurboForm() && !IsNull(Mscrm.ServiceRefreshUtilities))
                    isDataUnboundControl = Mscrm.ServiceRefreshUtilities
                        .triggerSearchOnSubjectLookupChange(lookupReference[0], e.target.parentNode.id);
                if (!isDataUnboundControl) {
                    var subjectAttribute = Xrm.Page.data.entity.attributes.getByName(control_id);
                    subjectAttribute.setValue(lookupReference);
                    subjectAttribute.fireOnChange()
                }
            }
        });
    treeDiv.bind("loaded.jstree open_node.jstree close_node.jstree",
        function() {
            adjustForHighContrast()
        })
}

function adjustForHighContrast() {
    if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
        var circleUnicodeChar = "\u25cb",
            rightArrowUnicodeChar = "\u2192",
            leftArrowUnicodeChar = "\u2190",
            southEastArrowUnicodeChar = "\u2198",
            southWestArrowUnicodeChar = "\u2199";
        $(".jstree-default .jstree-no-dots .jstree-leaf > ins").text(circleUnicodeChar);
        if (Mscrm.Utilities.get_isLeftToRight()) {
            $(".jstree-default .jstree-no-dots .jstree-closed > ins").text(rightArrowUnicodeChar);
            $(".jstree-default .jstree-no-dots .jstree-open > ins").text(southEastArrowUnicodeChar)
        } else {
            $(".jstree-default .jstree-no-dots .jstree-closed > ins").text(leftArrowUnicodeChar);
            $(".jstree-default .jstree-no-dots .jstree-open > ins").text(southWestArrowUnicodeChar)
        }
    }
}

function updateParentLookup(entityRecord, lookupParentControlId) {
    entityRecord != null &&
        updateParentLookupExtension(entityRecord.Id,
            entityRecord.TypeCode,
            entityRecord.Name,
            entityRecord.TypeName,
            lookupParentControlId,
            true)
}

function updateParentLookupExtension(entityRecordId,
    entityRecordTypeCode,
    entityRecordName,
    entityRecordTypeName,
    lookupParentControlId,
    needAssociate) {
    var oLookupItem = new LookupControlItem(entityRecordId,
        entityRecordTypeCode,
        entityRecordName,
        "openlui(new Sys.UI.DomEvent(event)); return false;",
        "ms-crm-Lookup-Item",
        "",
        entityRecordTypeName,
        false);
    oLookupItem.entityType = entityRecordTypeName;
    oLookupItem.data = "";
    if (!lookupParentControlId.endsWith("_i")) {
        var lookupControl = Xrm.Page.ui.controls.get(lookupParentControlId);
        lookupControl.getAttribute().getLookupDataAttribute().setValue(new Array(oLookupItem), lookupParentControlId)
    } else {
        var oLookupCtrl = Mscrm.FormControlInputBehavior.GetBehavior(lookupParentControlId);
        if (oLookupCtrl != null) {
            oLookupCtrl.set_dataValue(new Array(oLookupItem));
            oLookupCtrl.resolveLookupMruItem(oLookupItem, needAssociate)
        }
    }
}