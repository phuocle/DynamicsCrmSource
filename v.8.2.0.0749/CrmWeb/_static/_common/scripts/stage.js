
function handleAdditionalFilter(oGrid) {
    oGrid.ResetPageNumber();
    oGrid.Refresh()
}

function handleView(o, oGrid, promptIfChartDirty) {
    var newVSId = oGrid.get_id() + "_SavedNewQuerySelector",
        newVSControl = $find(newVSId);
    if (IsNull(o) || o.options.length == 0)
        if (!(newVSControl != null && newVSControl.showNewVSControl))
            return;
    var sOriginalViewId = oGrid.GetParameter("viewid"),
        sOriginalViewTitle = oGrid.GetParameter("viewTitle"),
        sOriginalViewType = oGrid.GetParameter("viewtype");
    if (newVSControl != null) {
        newVSControl.originalViewId = sOriginalViewId;
        if (sOriginalViewId == newVSControl.quickFindQuery)
            newVSControl.originalViewName = LOCID_SEARCH_RESULTS;
        else
            newVSControl.originalViewName = sOriginalViewTitle;
        newVSControl.originalViewType = sOriginalViewType
    }
    var SavedQuerySelector = $find(oGrid.get_id() + "_SavedNewQuerySelector"),
        sViewId,
        sviewType,
        selectBehavior;
    if (o != null) {
        selectBehavior = Mscrm.FormControlInputBehavior.GetBehavior(o.id);
        sViewId = selectBehavior.get_dataValue() == LOCID_SEARCH_RESULTS
            ? SavedQuerySelector.quickFindQuery
            : selectBehavior.get_dataValue();
        if (!IsNull(o.options[o.selectedIndex]) &&
            !IsNull(o.options[o.selectedIndex].parentNode) &&
            o.options[o.selectedIndex].parentNode.id == "AppUserViews")
            sviewType = 4230;
        else
            sviewType = getViewType(o)
    } else if (newVSControl != null && newVSControl.showNewVSControl) {
        sViewId = newVSControl.selectedViewId;
        sviewType = newVSControl.selectedViewType
    }
    if (IsNull(promptIfChartDirty) || promptIfChartDirty === "" || promptIfChartDirty === true) {
        var paneId = oGrid.get_id() + "_paneControl",
            visualizationPaneControl = $find(paneId);
        if (!IsNull(visualizationPaneControl) && !visualizationPaneControl.confirmViewChange(sViewId)) {
            o != null &&
                selectBehavior.set_dataValue(sOriginalViewId);
            newVSControl != null &&
                newVSControl.showNewVSControl &&
                newVSControl.setViewForNewSavedQuerySelector(sOriginalViewTitle, sOriginalViewId, sOriginalViewType);
            return false
        }
    }
    oGrid.SetParameter("viewid", sViewId);
    oGrid.SetParameter("quickfind", "");
    oGrid.SetParameter("filter", "");
    oGrid.SetParameter("filterDisplay", "");
    oGrid.SetParameter("viewtype", sviewType);
    var entityName = "";
    if (newVSControl != null)
        entityName = newVSControl.viewEntityName;
    if (entityName == "kbarticle")
        typeof Mscrm.ArticleSearchRibbon != "undefined" &&
            Mscrm.ArticleSearchRibbon.suppressSearchByType();
    else if (entityName == "systemform")
        typeof Mscrm.UIElementsGrid != "undefined" &&
            typeof Mscrm.UIElementsGrid.handleSystemFormMenuButtons != "undefined" &&
            Mscrm.UIElementsGrid.handleSystemFormMenuButtons(sViewId);
    var handler = new onGridRefreshCompleteHandler(o, sOriginalViewId, oGrid);
    oGrid.Reset(handler.OnComplete);
    o != null &&
        o.hasAttribute("returnedtypecode") &&
        o.getAttribute("returnedtypecode") == "9997" &&
        reportEmailSignatureViewChangeTelemetry(sViewId);
    return true
}

function reportEmailSignatureViewChangeTelemetry(sViewId) {
    if (sViewId == "{C7EF19C2-1335-4405-8E46-6105DE8D11E2}")
        Mscrm.MetricsReporting.instance().addCounterMetric("EmailSignatureViewChangeAllSignatures", 1);
    else
        sViewId == "{B2DAAE82-B4D4-4A89-93A2-CB2ECCABDEBB}" &&
            Mscrm.MetricsReporting.instance().addCounterMetric("EmailSignatureViewChangeMySignatures", 1)
}

function onGridRefreshCompleteHandler(oViewSelector, sOriginalView, oGridControl) {
    var oGrid = oGridControl,
        oViewSelect = oViewSelector,
        sOriginalViewId = sOriginalView;
    this.OnComplete = _handleComplete;

    function _handleComplete(oResult) {
        var newVSId = oGrid.get_id() + "_SavedNewQuerySelector",
            newVSControl = $find(newVSId),
            sOriginalViewType;
        if (!oResult.get_success()) {
            if (oViewSelect != null) {
                Mscrm.FormControlInputBehavior.GetBehavior(oViewSelect.id).set_dataValue(sOriginalViewId);
                sOriginalViewType = getViewType(oViewSelect)
            } else if (newVSControl != null && newVSControl.showNewVSControl) {
                newVSControl.setOriginalViewForNewSavedQuerySelector();
                sOriginalViewType = newVSControl.originalViewType
            }
            oGrid.SetParameter("viewid", sOriginalViewId);
            oGrid.SetParameter("viewtype", sOriginalViewType);
            oGrid.Reset()
        } else {
            var pageManager = Mscrm.PageManager.get_instance(),
                gridControl = oGrid;
            if (!IsNull(gridControl) && gridControl.get_gridType() == 1) {
                if (!IsNull(pageManager)) {
                    var parameters = {};
                    parameters["Id"] = oGrid.GetParameter("viewid");
                    parameters["title"] = oGrid.GetParameter("viewTitle");
                    parameters["viewtype"] = oGrid.GetParameter("viewtype");
                    parameters["entitydisplayname"] = oGrid.GetParameter("entitydisplayname");
                    parameters["otc"] = oGrid.GetParameter("otc");
                    parameters["etn"] = oGrid.GetParameter("otn");
                    pageManager.raiseEvent(Mscrm.ScriptEvents.GridViewChanged, parameters);
                    var paneId = oGrid.get_id() + "_paneControl",
                        paneControl = $find(paneId);
                    !IsNull(paneControl) &&
                        paneControl.fireEventForStickyVisualization()
                }
                var entityDisplayName = oGrid.GetParameter("entitypluraldisplayname"),
                    viewDisplayName = oGrid.GetParameter("viewTitle"),
                    titleFormat = oGrid.GetParameter("titleformat");
                setPageTitle(String.format(titleFormat, entityDisplayName, viewDisplayName))
            }
            !IsNull(pageManager) &&
                pageManager.raiseEvent(Mscrm.ScriptEvents.ViewSelectorChanged, null);
            if (!IsNull(newVSControl) && newVSControl.isActivitiesViewSelector) {
                var entityTypeName = oGrid.GetParameter("otn");
                updateStickyViewUrl(oGrid.GetParameter("viewtype"), oGrid.GetParameter("viewid"), entityTypeName)
            } else
                updateStickyViewUrl(oGrid.GetParameter("viewtype"),
                    oGrid.GetParameter("viewid"),
                    IsNull($get("crmTypeSelector")) ? null : crmTypeSelector.value)
        }
        quickFindReset(oViewSelect, oGrid);
        SetSetDefaultViewButtonState()
    }
}

function updateStickyViewUrl(sViewType, sViewId, sChildEntityName, sDueDate, extraParams) {
    if (IsOutlookClient())
        return;
    var pageManager = top.Mscrm.PageManager.get_instance();
    if (IsNull(pageManager))
        return;
    var retValues = pageManager.raiseEvent(Mscrm.ScriptEvents.NavigateRetrieveDetails, null);
    if (!IsNull(retValues) && !IsNull(retValues[0])) {
        var uri = Mscrm.CrmUri.create(retValues[0]["uri"]),
            pageType = uri.get_pageType();
        if (pageType === "entityrecord")
            return
    }
    var areaSubareaIds = pageManager.raiseEvent(Mscrm.ScriptEvents.GetSelectedAreaSubAreaIds, null);
    if (IsNull(areaSubareaIds) || areaSubareaIds.length != 1)
        return;
    var ids = areaSubareaIds[0],
        areaId = ids["areaId"],
        subAreaId = ids["subAreaId"];
    if (isValidForStickyViews(areaId, subAreaId))
        if (!IsNull(sViewType) && !IsNull(sViewId)) {
            var parameters = {};
            parameters["viewId"] = sViewId;
            parameters["viewType"] = sViewType;
            if (!IsNull(sChildEntityName))
                parameters["childEntityName"] = sChildEntityName;
            if (!IsNull(sDueDate))
                parameters["datefilter"] = sDueDate;
            if (!IsNull(extraParams))
                parameters["extraParameters"] = extraParams;
            pageManager.raiseEvent(Mscrm.ScriptEvents.UpdateViewUrl, parameters);
            if (!isNullOrEmptyString(sChildEntityName)) {
                var saveEntityTypeCacheData = {},
                    savedParam = {};
                savedParam["viewid"] = sViewId;
                savedParam["viewtype"] = sViewType;
                saveEntityTypeCacheData["data"] = savedParam;
                saveEntityTypeCacheData["key"] = String.format("ActivitiesTypeCachedView_{0}", sChildEntityName);
                pageManager.raiseEvent(Mscrm.ScriptEvents.InsertCacheData, saveEntityTypeCacheData)
            }
            var cacheParams = {},
                queryString = "viewid=" + sViewId + "&viewtype=" + sViewType;
            if (!IsNull(sChildEntityName))
                queryString += "&type=" + sChildEntityName;
            cacheParams["updateQueryString"] = queryString;
            pageManager.raiseEvent(Mscrm.ScriptEvents.UpdatePageInformation, cacheParams)
        }
}

function setDefaultView() {
    var crmGrid = $find("crmGrid"),
        sEntityTypeCode = crmGrid.GetParameter("otc"),
        sOriginalViewId = crmGrid.GetParameter("viewid"),
        sOriginalViewType = crmGrid.GetParameter("viewtype"),
        sQueueId = "";
    if (document.getElementById("crmQueueSelector") != null)
        sQueueId = Mscrm.FormControlInputBehavior.GetBehavior("crmQueueSelector").get_dataValue();
    setDefaultEntityView(sEntityTypeCode, sOriginalViewId, sOriginalViewType, sQueueId)
}

function setDefaultEntityView(sEntityTypeCode, sOriginalViewId, sOriginalViewType, sQueueId) {
    var retval = new Sys.StringBuilder;
    retval.append("<usersettings>");
    retval.append("<personalizationsettings>");
    retval.append("<![CDATA[<DefaultGridViews>");
    retval.append("<DefaultGridView>");
    retval.append("<EntityTypeCode>");
    retval.append(CrmEncodeDecode.CrmXmlEncode(sEntityTypeCode));
    retval.append("</EntityTypeCode>");
    retval.append("<ChildEntityName></ChildEntityName>");
    if (sQueueId != "") {
        retval.append("<QueueId>");
        retval.append(CrmEncodeDecode.CrmXmlEncode(sQueueId));
        retval.append("</QueueId>")
    } else
        retval.append("<QueueId></QueueId>");
    retval.append("<ViewId>");
    retval.append(CrmEncodeDecode.CrmXmlEncode(sOriginalViewId));
    retval.append("</ViewId>");
    retval.append("<ViewType>");
    retval.append(CrmEncodeDecode.CrmXmlEncode(sOriginalViewType));
    retval.append("</ViewType>");
    retval.append("</DefaultGridView>");
    retval.append("</DefaultGridViews>]]>");
    retval.append("</personalizationsettings>");
    retval.append("</usersettings>");
    var xml = XUI.Xml.LoadXml(retval.toString()),
        xmlhttp = new XMLHttpRequest,
        oUrl = Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_update.aspx");
    xmlhttp.open("POST", oUrl.toString(), false);
    Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
    SetTokenInHeader(xmlhttp, oUrl);
    xmlhttp.send(xml);
    var responseXml = xmlhttp.responseXML,
        node = XUI.Xml.SelectSingleNode(responseXml, "/error", null);
    if (IsNull(node)) {
        var newVSControl = $find("crmGrid_SavedNewQuerySelector");
        if (newVSControl != null && newVSControl.showNewVSControl && !newVSControl.showOriginalSelectBox)
            newVSControl.setUserSelectedDefaultView(sOriginalViewId);
        else {
            var oSavedQuerySelector = $get("crmGrid_SavedNewQuerySelector");
            setIsDefaultAttribute(oSavedQuerySelector)
        }
        var queueSelector = $get("crmQueueSelector");
        setIsDefaultAttribute(queueSelector)
    }
    handleXMLErr(responseXml);
    SetSetDefaultViewButtonState()
}

function setIsDefaultAttribute(crmSelectElement) {
    if (crmSelectElement != null) {
        for (var i = 0; i < crmSelectElement.options.length; i++)
            with (crmSelectElement[i])
                !isNullOrEmptyString(attributes["isdefault"]) &&
                    Mscrm.Utilities.parseBoolean(attributes["isdefault"].value) &&
                    removeAttribute("isdefault");
        with (crmSelectElement[crmSelectElement.selectedIndex])
            setAttribute("isdefault", "true")
    }
}

function SetSetDefaultViewButtonState() {
    refreshRibbon()
}

function getViewType(oSelect) {
    var sViewType = oSelect.options[oSelect.selectedIndex].getAttribute("type");
    if (IsNull(sViewType))
        sViewType = SavedQuery;
    return sViewType
}

function quickFindReset(oSelect, oGrid) {
    var selectBehavior;
    if (!IsNull(oSelect)) {
        selectBehavior = Mscrm.FormControlInputBehavior.GetBehavior(oSelect.id);
        selectBehavior.RemoveOption(LOCID_SEARCH_RESULTS)
    }
    var oJumpBar = $find(oGrid.get_id() + "_JumpBar");
    if (!IsNull(oJumpBar))
        if (oJumpBar)
            if (oGrid.get_version() && oGrid.get_version() == "3.0")
                oJumpBar.Reset();
            else
                oJumpBar.filter(true);
    var quickFindContainer = $find(oGrid.get_id() + "_quickFindContainer");
    if (!IsNull(quickFindContainer))
        quickFindContainer.NotifyExitedQuickFind();
    else {
        var findCriteria = $get(oGrid.get_id() + "_findCriteria");
        if (!IsNull(findCriteria))
            findCriteria.value = ""
    }
    SetSetDefaultViewButtonState()
}

function clearFind(oGrid) {
    var quickFindContainer = $find(oGrid.get_id() + "_quickFindContainer");
    if (typeof quickFindContainer != "undefined")
        quickFindContainer.NotifyExitedQuickFind();
    else {
        var findCriteria = $get(oGrid.get_id() + "_findCriteria");
        if (typeof findCriteria != "undefined")
            findCriteria.value = ""
    }
    oGrid.SetParameter("viewtype", SavedQuery);
    oGrid.SetParameter("quickfind", "");
    oGrid.SetParameter("filter", "");
    oGrid.SetParameter("filterDisplay", "");
    var oControl = $get("crmDateSelector");
    if (!IsNull(oControl))
        if (oControl.tagName == "SELECT") {
            oControl.value = "All";
            oGrid.SetParameter("scheduledend",
                Mscrm.FormControlInputBehavior.GetBehavior("crmDateSelector").get_dataValue())
        }
    resetQueueSelector(oGrid);
    oGrid.ClearPagingCookie();
    oGrid.Reset()
}

function quickFind(oGrid) {
    try {
        var findCriteria = $get(oGrid.get_id() + "_findCriteria");
        if (typeof findCriteria === "undefined")
            findCriteria = crmForm.findCriteria;
        var SavedQuerySelector = $find(oGrid.get_id() + "_SavedNewQuerySelector");
        if (typeof SavedQuerySelector === "undefined")
            SavedQuerySelector = crmForm.SavedQuerySelector;
        var newViewSelector = $find(oGrid.get_id() + "_SavedNewQuerySelector"),
            sFindCriteria = Trim(findCriteria.value.replace(/[\*]+/, "*"));
        findCriteria.value = sFindCriteria;
        if (isNullOrEmptyString(sFindCriteria))
            return false;
        oGrid.SetParameter("viewtype", SavedQuery);
        oGrid.SetParameter("quickfind", sFindCriteria);
        oGrid.SetParameter("filter", "");
        oGrid.SetParameter("filterDisplay", "");
        var oControl = $get("crmDateSelector");
        if (!IsNull(oControl))
            if (oControl.tagName == "SELECT") {
                oControl.value = "All";
                oGrid.SetParameter("scheduledend",
                    Mscrm.FormControlInputBehavior.GetBehavior("crmDateSelector").get_dataValue())
            }
        resetQueueSelector(oGrid);
        oGrid.ClearPagingCookie();
        if (SavedQuerySelector != null) {
            var quickFindQueryId = SavedQuerySelector.quickFindQuery;
            if (newViewSelector != null && newViewSelector.showNewVSControl && !newViewSelector.showOriginalSelectBox) {
                if (newViewSelector.selectedViewId == "{F4D446E0-3749-4BA4-9C85-EAB861EAFDFC}")
                    quickFindQueryId = "A3CC2D8E-9768-DD11-B1B0-00155D869F00";
                else
                    quickFindQueryId = newViewSelector.quickFindQuery;
                newViewSelector.setViewForNewSavedQuerySelector(LOCID_SEARCH_RESULTS, quickFindQueryId, SavedQuery)
            }
            if (oGrid.GetParameter("viewid") != quickFindQueryId) {
                oGrid.SetParameter("viewid", quickFindQueryId);
                oGrid.Reset()
            } else
                oGrid.set_pageNumber(1);
            if (SavedQuerySelector.value != LOCID_SEARCH_RESULTS && !IsNull(SavedQuerySelector.length)) {
                for (var i = 0; i < SavedQuerySelector.length; i++)
                    if (SavedQuerySelector.options[i].value == LOCID_SEARCH_RESULTS) {
                        SavedQuerySelector.selectedIndex = i;
                        break
                    }
                if (i >= SavedQuerySelector.length) {
                    var o = SavedQuerySelector.AddOption(LOCID_SEARCH_RESULTS, LOCID_SEARCH_RESULTS);
                    o.Search = true;
                    o.Type = SavedQuery;
                    SavedQuerySelector.selectedIndex = SavedQuerySelector.length - 1
                }
            }
        } else
            oGrid.set_pageNumber(1);
        var oJumpBar = $find(oGrid.get_id() + "_JumpBar");
        typeof oJumpBar != "undefined" &&
            !IsNull(oJumpBar) &&
            oJumpBar.Reset();
        SetSetDefaultViewButtonState()
    } catch (e) {
        alert(LOCID_SEARCH_LIST_NOT_OPEN);
        return false
    }
    return true
}

function resetQueueSelector(oGrid) {
    var oControlQueue = $get("crmQueueSelector");
    if (!IsNull(oControlQueue))
        if (oControlQueue.tagName == "SELECT") {
            Mscrm.FormControlInputBehavior.GetBehavior("crmQueueSelector")
                .set_dataValue(oControlQueue.getAttribute("defaultSelected"));
            oGrid.SetParameter("qid", oControlQueue.value)
        }
}

function windowOnResizeHandler() {
    if (typeof tdWatermark != "undefined")
        tdWatermark.style.display = document.body.clientWidth <= 600 ? "none" : ""
}

window.onresize = windowOnResizeHandler;

function HandleBackButtonIssues(sPageCode) {
    try {
        !IsNull(sPageCode) &&
            sPageCode != "" &&
            top.setNav(sPageCode)
    } catch (e) {
    }
    var findCriteria = $get("crmGrid_findCriteria");
    if (typeof findCriteria != "undefined" && !IsNull(findCriteria))
        if (findCriteria.defaultValue != findCriteria.value)
            findCriteria.value = findCriteria.defaultValue;
    var SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedNewQuerySelector");
    if (typeof SavedQuerySelector != "undefined" && !IsNull(SavedQuerySelector))
        if (SavedQuerySelector.get_defaultValue() != SavedQuerySelector.get_dataValue())
            SavedQuerySelector.value = SavedQuerySelector.DefaultValue
}

function openAdvFind(gridId, bOpenInNewMode) {
    if (isNullOrEmptyString(gridId))
        gridId = "crmGrid";
    if (IsNull(bOpenInNewMode))
        bOpenInNewMode = false;
    var win = window,
        fp = null,
        iWidth,
        iHeight;
    while (typeof(fp = win.GetWindowInformation) == "undefined" && win.parent != win)
        win = win.parent;
    if (IsNull(fp)) {
        iWidth = 700;
        iHeight = 600
    } else {
        var oWindowInfo = fp(UserQuery);
        iWidth = oWindowInfo.Width;
        iHeight = oWindowInfo.Height
    }
    var sViewId,
        sViewType,
        sOTC,
        sDataProvider,
        sUIProvider,
        crmGrid = $find(gridId);
    if (IsNull(crmGrid)) {
        var viewArea = $get("ViewArea");
        if (!IsNull(viewArea))
            crmGrid = $get(gridId, viewArea)
    }
    if (!IsNull(crmGrid))
        with (crmGrid) {
            if (IsNull(sOTC))
                sOTC = GetParameter("otc");
            if (IsNull(sViewId)) {
                sViewId = GetParameter("viewid");
                sViewType = GetParameter("viewtype")
            }
            sUIProvider = GetProperty("uiProvider");
            sDataProvider = GetProperty("dataProvider");
            if (!isNullOrEmptyString(GetParameter("quickfind")))
                bOpenInNewMode = true
        }
    var oUrl = Mscrm.CrmUri.create("");
    if (!IsNull(sOTC)) {
        oUrl.get_query()["EntityCode"] = sOTC;
        if (!IsNull(sViewId) && !IsNull(sViewType) && bOpenInNewMode == false) {
            oUrl.get_query()["QueryId"] = sViewId;
            oUrl.get_query()["ViewType"] = sViewType
        }
        if (!IsNull(sUIProvider))
            oUrl.get_query()["UIProvider"] = sUIProvider;
        if (!IsNull(sDataProvider))
            oUrl.get_query()["DataProvider"] = sDataProvider
    }
    var oMainUri = Mscrm.CrmUri.create("/main.aspx");
    oMainUri.get_query()["pagetype"] = "advancedfind";
    oMainUri.get_query()["extraqs"] = oUrl.get_queryString();
    var beforeWindowOpenTimestamp = (new Date).getTime(),
        instance = openStdWin(oMainUri, "_blank", iWidth, iHeight),
        afterWindowOpenTimestamp = (new Date).getTime();
    window.setTimeout(function() {
            if (!Mscrm.PageManager.isOutlookProxyPage()) {
                instance.BeforeWindowOpenTimestamp = beforeWindowOpenTimestamp;
                instance.AfterWindowOpenTimestamp = afterWindowOpenTimestamp
            }
        },
        2e3)
}