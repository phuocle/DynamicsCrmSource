<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Controls.Lookup.LookupPageBase" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Web.Controls.Lookup"%>

<html>
<head>
<script language="javascript">


    var lastfocus = "crmGrid";
    var customViews;
    var availableViews;
    var isSearchOn = false;
    var _selectedItems = null;
    var gridElement = null;
    var isLookupPage = true;

    var IsMobileRefresh;

    var butBegin, btnAdd, btnNew, tdViewSelector, btnRemoveValue;
    var btnFind,
        btnBack,
        tblFind,
        searchArea,
        crmDialogFooter,
        btnSelect,
        findCriteriaButton,
        btnCancel,
        btnAddMultiSelect,
        multiLookupControlsDiv;

    function applychanges() {
        if (_isMulti) {
            if (isResultsMode())
                addItems();
            var retVal = new Object();
            retVal.items = _selectedItems.Items(false, false, true, true, true);
            Mscrm.Utilities.setReturnValue(retVal);

            closeWindow(true);
        } else {
            selectItem();
        }
    }

    function cancel() {
        if (IsMobileRefresh) {
            window.parent.resetMobilePopupMode(window.parent);
        }

        closeWindow(true);
    }

    function appendExistingItems() {
        var args = getDialogArguments();
        if (args == null) return;
        if (args.items == null) return;
        var items = args.items;
        var toAdd = new LookupItems();

        var len = items.length;
        for (var i = 0; i < len; i++) {
            var item = items[i];
            var cur = new LookupItem();
            cur.id = item.getAttribute("oid");
            cur.category = item.getAttribute("category");
            cur.type = item.getAttribute("otype");
            cur.typename = item.getAttribute("otypeName");
            var name = !isNullOrEmptyString(XUI.Html.GetText(item))
                ? XUI.Html.GetText(item)
                : item.getAttribute("title");
            cur.html = "<NOBR>" + CrmEncodeDecode.CrmHtmlEncode(name) + "</NOBR>";

            cur.name = _isInlineMultiLookup ? name.substr(0, name.length - 1) : name;
            cur.displayclass = "ms-crm-Lookup-DialogItem";
            cur.onclick = "toggleSelectLookupItem(this)";
            cur.values = item.values;
            cur.keyValues = item.keyValues;
            cur.processId = item.getAttribute("processid");
            cur.processTimestamp = item.getAttribute("processts");
            toAdd.items.push(cur);
        }

        _selectedItems.AddItems(toAdd.items);
        handlePropertiesBtn();
    }

    function setSearchMode() {
        var suffix = _isMulti ? 'MultiSelect' : '';
        document.body.className = document.body.className.replace('resultsMode' + suffix, '')
            .replace('searchMode' + suffix, '') +
            ' searchMode' +
            suffix;
    }

    function setResultsMode() {
        var suffix = _isMulti ? 'MultiSelect' : '';
        document.body.className = document.body.className.replace('resultsMode' + suffix, '')
            .replace('searchMode' + suffix, '') +
            ' resultsMode' +
            suffix;
    }

    function isResultsMode() {
        return document.body.className.indexOf('resultsMode') >= 0;
    }

    Sys.Application.add_load(function() {
        butBegin = $get('butBegin');
        btnAdd = $get('btnAdd');
        btnNew = $get('btnNew');
        btnRemoveValue = $get('btnRemoveValue');
        var quickFindContainer = $find("crmGrid_quickFindContainer");

        if ((!_isMulti) && (!IsNull(btnRemoveValue))) {
            var oArgs = getDialogArguments();
            if (!IsNull(oArgs)) {
                if (!IsNull(oArgs.items)) {
                    btnRemoveValue.disabled = (oArgs.items.length == 0);
                } else {
                    btnRemoveValue.disabled = true;
                }
            } else {
                btnRemoveValue.disabled = !_enableRemoveButton;
            }
        }
        if (IsMobileRefresh) {
            btnFind = $get('btnFind');
            btnBack = $get('btnBack');
            btnSelect = $get('btnSelect');
            tblFind = $get('tblFind');
            btnCancel = $get('btnCancel');
            btnAddMultiSelect = $get('btnAddMultiSelect')
            btnMobileRemoveValue = $get('btnMobileRemoveValue');

            if (_isMulti) {
                multiLookupControlsDiv = $get('multiLookupControls');
                multiLookupControlsDiv.style.height = (window.innerHeight - 393) + 'px';
                multiLookupControlsDiv.getElementsByTagName('ul')[0].parentNode.style.height = multiLookupControlsDiv
                    .style.height;
            }

            searchArea = $get('searchArea');
            crmDialogFooter = $get('crmDialogFooter');
            findCriteriaButton = $get('crmGrid_findCriteriaButton');

            crmDialogFooter.style.display = 'none';

            setSearchMode();

            $addHandler(btnFind,
                'click',
                function() {
                    if (quickFindContainer) {
                        quickFindContainer.RunQuickFind();
                    };

                    setResultsMode();
                });

            $addHandler(btnCancel,
                'click',
                function() {
                    cancel();
                });


            if (findCriteriaButton) {
                $addHandler(findCriteriaButton,
                    'click',
                    function() {

                        setResultsMode();
                    });
            }

            $addHandler(btnAddMultiSelect,
                'click',
                function() {
                    addItems();
                    setSearchMode();
                });

            $addHandler(btnBack,
                'click',
                function() {
                    setSearchMode();
                });

            $addHandler(btnSelect,
                'click',
                function() {
                    butBegin.click();
                });

            $addHandler(btnMobileRemoveValue,
                'click',
                function() {
                    btnRemoveValue.click();
                });

            Mscrm.MobileUtility.PreparePageForWindowsPhoneApp();
        }

        tdViewSelector = $get('tdViewSelector');

        $addHandler(document, 'keydown', handleShortcutKeys);

        var crmGrid = $find("crmGrid");
        _selectedItems = Mscrm.FormControlInputBehavior.GetBehavior('selectedItems');

        var oArgs = getDialogArguments();
        if (!IsNull(oArgs)) {
            var additionalFetchFilter = oArgs.additionalFetchFilter;
            if (!isNullOrEmptyString(additionalFetchFilter)) {

                crmGrid.SetParameter("customFilter", additionalFetchFilter);
                crmGrid.SetParameter("customFilterTypes", oArgs.additionalFetchFilterTypes);


                crmGrid.SetParameter("suppressfetch", "0");

                refreshGrid = true;
            }
        }

        if (_isMulti) {
            appendExistingItems();

        } else {
            crmGrid.SetParameter("EnableFirstRecordSelection", "True");
            crmGrid.add_onSelectionChange(handlePropertiesBtn);
        }

        gridElement = crmGrid.get_element();
        $addHandler(gridElement, 'focus', setLastFocus);
        gridElement.focus();

        crmGrid.add_onBeforeFormLoad(handleDblClick);
        crmGrid.SetParameter("sameWindow", "false");
        crmGrid.SetParameter("disableDblClick", "0");

        if (!IsNull(quickFindContainer)) {
            quickFindContainer.SyncQuickFindButton();
        }

        setNavigationState();

        if (!checkMode(_mode, LookupBrowse)) {
            OnRecordTypeChange($get('selObjects'), true);
        }
        setHeaderHeight();
        Mscrm.Utilities.setLookupDialogBodyLayout();
        $addHandler(window, 'resize', setHeaderHeight);

        if (window.parent.UseTabletExperience) {

            document.body.addEventListener('touchmove', OnDialogBodyTouchMove, false);

            var gridScrollableArea = $get("crmGrid_divDataArea");
            if (!IsNull(gridScrollableArea)) {
                gridScrollableArea.addEventListener('touchmove', OnScrollableControlTouchMove, false);
            }
            var selectedItemsBox = $get("selectedItems_lookupTable");
            if (!IsNull(selectedItemsBox)) {
                selectedItemsBox.addEventListener('touchmove', OnScrollableControlTouchMove, false);
            }
        }

        if (!IsNull(isFormEditorLookupView) && isFormEditorLookupView === true) {

            crmGrid.remove_onBeforeFormLoad(handleDblClick);

            crmGrid.SetParameter("disableDblClick", "1");
        }

        attachWindowOnUnload(OnPageUnload);

        if (refreshGrid) {
            crmGrid.Refresh();
        }

        FilterSavedQuerySelector();
    });

    function FilterSavedQuerySelector() {
        var defaultType = _defaultObjectType;

        if (typeof (_filterSavedSelectorQuery) != "undefined" && _filterSavedSelectorQuery) {
            switch (defaultType) {
            case "9333":


                var allowedSavedQuerylist = [
                    "{F2A910A4-0E0D-43AB-AF62-1399F1A53EDC}", "{125A31CE-0F5E-4957-8AA3-7A10C0713886}",
                    "{B6C5FA2E-84F5-4F20-A239-B310D6AD62F4}", "{0096783C-7AB7-4E7A-A8E3-2ED1A33095C7}"
                ];
                var selectobject = document.getElementById("crmGrid_SavedQuerySelector")
                for (var i = 0; i < selectobject.length; i++) {
                    if (allowedSavedQuerylist.indexOf(selectobject.options[i].value) == -1) {
                        selectobject.remove(i);
                        i--;
                    }
                }
            }
        }
    }

    function OnDialogBodyTouchMove(event) {

        event.preventDefault();
    }

    function OnScrollableControlTouchMove(event) {

        event.stopPropagation();
    }

    function OnPageUnload() {
        if (IsMobileRefresh) {
            $clearHandlers(btnFind);
            $clearHandlers(btnBack);
            $clearHandlers(btnSelect);
            $clearHandlers(btnCancel);
            $clearHandlers(btnAddMultiSelect);

            if (findCriteriaButton) {
                $clearHandlers(findCriteriaButton);
            }
        }

        $removeHandler(window, "resize", setHeaderHeight);
        $removeHandler(gridElement, 'focus', setLastFocus);
    }


    function setHeaderHeight() {
        if (window.parent.UseTabletExperience) {
            Mscrm.Utilities.setDialogHeaderHeight("DlgHdContainer", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
        } else if (!IsNull($get("DlgHdContainer")) && !IsNull($get("DlgHdBodyContainer"))) {
            var dlgHdContainer = $get("DlgHdContainer");
            var dialogHeaderContainerPadding = 10;
            var dialogHeaderContainerHeight = parseInt($get("DlgHdTitle").offsetHeight) +
                parseInt($get("DlgHdDesc").offsetHeight);
            if (dialogHeaderContainerHeight < 51) {
                dialogHeaderContainerHeight = 51;
            }
            dlgHdContainer.style.height = dialogHeaderContainerHeight + "px";
            $get("DlgHdBodyContainer").style.top = dialogHeaderContainerPadding + dialogHeaderContainerHeight + "px";
        }
    }

    function setLastFocus() {
        lastfocus = "crmGrid";
    }

    function handleShortcutKeys(e) {
        var handled = false;


        if (e.altKey && !e.ctrlKey) {
            switch (e.keyCode) {
            case 65:
                handled = handleControl($get("btnAdd"));
                break;
            case 78:
                handled = handleControl($get("btnNew"));
                break;

            case 79:
                handled = handleControl($get("butBegin"));
                break;

            case 76:
                handled = handleControl($get("selObjects"));
                break;
            }
        } else {


            if (_isMulti &&
                (lastfocus == "selectedItems") &&
                (this.activeElement != $get("crmGrid_findCriteria")) &&
                (e.keyCode == 8 || e.keyCode == 127)) {
                removeItems();
                handled = true;
            }
        }

        if (handled) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    function handleControl(ctrl) {
        if (ctrl != null) {
            if (ctrl.type == "button") {
                Mscrm.Utilities.click(ctrl);
                return true;
            } else if (ctrl.type == "select-one") {
                ctrl.focus();
                return true;
            }
        }
        return false;
    }

    function handlePropertiesBtn() {
        var crmGrid = $find("crmGrid");
        var innerGrid = crmGrid.get_innerGrid();
        if (!IsNull(innerGrid)) {
            butBegin.disabled = !(innerGrid.get_selectedRecords().length >= 1)
        } else {
            butBegin.disabled = true;
        }
    }

    function handleDblClick(sender, args) {
        if (args.isDblClick) {
            if (_isMulti) {
                addItems();
            } else {
                selectItem();
            }
            args.breakEvent = true;
        } else {
            args.breakEvent = false;
        }
    }

    function removeValue(domEventObject) {
        Mscrm.Utilities.setReturnValue(new LookupItems());
        domEventObject.preventDefault();
        closeWindow(true);
    }

    function selectItem() {
        var crmGrid = $find("crmGrid");
        var viewId = crmGrid.GetParameter("viewid");
        var entityTypeName = crmGrid.get_entityTypeName();

        Mscrm.Utilities.setReturnValue(buildReturnValue(crmGrid.get_innerGrid().get_selectedRecords(),
            true,
            entityTypeName));


        if (isOutlookHostedWindow() || (viewId != "{45102185-B1B4-422B-A3BF-F1BA9C6E130A}")) {
            closeWindow(true);
        }
    }

    function addItems() {
        _selectedItems.AddItems(buildReturnValue($find("crmGrid").get_innerGrid().get_selectedRecords(),
            false,
            $find("crmGrid").get_entityTypeName()).items);
        setNavigationState();
    }

    function removeItems() {
        var items = _selectedItems.Items();
        var len = items.length;
        for (var i = 0; i < len; i++) {
            if (isTrue(items[i].selected)) {
                _selectedItems.RemoveItem(items[i].id);
            }
        }
        setNavigationState();
    }

    function removeItem(oItem) {
        _selectedItems.RemoveItem(oItem);
    }

    function setNavigationState() {
        var numselected = 0;
        var crmGrid = $find("crmGrid");
        if (lastfocus == "crmGrid") {
            var innerGrid = crmGrid.get_innerGrid();
            if (_isMulti) {
                var items = _selectedItems.get_element().parentNode.parentNode.children[0].children[0].children[0]
                    .children;
                var len = items.length;
                for (var i = 0; i < len; i++) {
                    var itemFirstChild = XUI.Html.DomUtils.GetFirstChild(items[i]);
                    if (isTrue(itemFirstChild.getAttribute("selected"))) {
                        if (Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) {
                            itemFirstChild.className = "ms-crm-Lookup-SelectedDialogItem-NoFocusIE11";
                        } else {
                            itemFirstChild.className = "ms-crm-Lookup-SelectedDialogItem-NoFocus";
                        }
                        numselected++;
                    } else {
                        itemFirstChild.className = "ms-crm-Lookup-DialogItem";
                    }
                }
            }

        } else if (lastfocus == "selectedItems") {
            crmGrid.get_innerGrid().UnselectRecords();
            var items = _selectedItems.get_element().parentNode.parentNode.children[0].children[0].children[0].children;
            var len = items.length;
            for (var i = 0; i < len; i++) {
                var itemFirstChild = XUI.Html.DomUtils.GetFirstChild(items[i]);
                if (isTrue(itemFirstChild.getAttribute("selected"))) {
                    if (Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) {
                        itemFirstChild.className = "ms-crm-Lookup-SelectedDialogItemIE11";
                    } else {
                        itemFirstChild.className = "ms-crm-Lookup-SelectedDialogItem";
                    }
                    numselected++;
                } else {
                    itemFirstChild.className = "ms-crm-Lookup-DialogItem";
                }
            }
        }

        if (_isMulti) {
            if (!IsNull(crmGrid.get_innerGrid())) {
                btnAdd.disabled = (crmGrid.get_innerGrid().get_selectedRecords().length == 0);
            }
            butBegin.disabled = false;
        } else {
            if (!IsNull(crmGrid.get_innerGrid())) {
                butBegin.disabled = !(crmGrid.get_innerGrid().get_selectedRecords().length == 1);
            }
        }
    }

    function isMyRecordsFilterEnabled() {
        var selObjectsElement = $get('selObjects');
        if (selObjectsElement.value != null) {
            return (_showMyRecordsFilter[selObjectsElement.value]);
        }
        return false;
    }

    function RemoteQueryParameters() {
        var queryString = (new Mscrm.GlobalContext).getQueryStringParameters();

        if (queryString["client_type"] || queryString["user_lcid"]) {
            var tempUrl = Mscrm.CrmUri.create("/sm/services/readonly.aspx");
            tempUrl.get_query()["client_type"] = queryString["client_type"];
            tempUrl.get_query()["user_lcid"] = queryString["user_lcid"];
            return tempUrl.get_queryString().substr(1);
        }

        return null;
    }

    function OnRecordTypeChange(oSelect, bFromOnLoad) {
        if (bFromOnLoad) {
            var findCriteria = document.getElementById("crmGrid_findCriteria");
            if (!IsNull(findCriteria) && findCriteria.value != "") {
                isSearchOn = true;
            }
        }

        var showMyRecordsSpanElement = $get('showMyRecordsSpan');
        if (showMyRecordsSpanElement) {
            if (_showMyRecordsFilter[oSelect.value]) {
                showMyRecordsSpanElement.style.display = "inline";
            } else {
                showMyRecordsSpanElement.style.display = "none";
            }
        }


        btnNew.disabled = !(_canCreate[oSelect.value] == true && _enableNewButton);

        if (_showViewPicker) {

            var oGetQueryList;
            var typeCode = oSelect.value;

            customViews = new Array();

            var oArgs = getDialogArguments();
            if (!IsNull(oArgs)) {
                if (!IsNull(oArgs.customViews)) {
                    var customViewCount = oArgs.customViews.length;

                    for (var i = 0; i < customViewCount; i++) {
                        if (oArgs.customViews[i].recordType == typeCode) {
                            customViews.push(oArgs.customViews[i]);
                        }
                    }
                }
            }
            if (!bFromOnLoad || customViews.length > 0) {
                oGetQueryList = new RemoteCommand("ActivitiesWebService", "GetQueryListForLookup");
                oGetQueryList.SetParameter("dummyEntriesCount", customViews.length);
                oGetQueryList.Query = RemoteQueryParameters();


                oGetQueryList.SetParameter("entityName", typeCode);


                var oResult = oGetQueryList.Execute();


                if (oResult.Success == ERROR_NONE) {
                    var viewSelector = XUI.Html.DomUtils.GetFirstChild(tdViewSelector);


                    var oId = viewSelector.id;


                    var oldDisabledStatus;


                    if (!IsNull(viewSelector.attributes.getNamedItem("disabled")) &&
                        viewSelector.attributes.getNamedItem("disabled").value != "false") {
                        oldDisabledStatus = viewSelector.attributes.getNamedItem("disabled").value;
                    }


                    var titleDiv = tdViewSelector.getElementsByTagName('div');
                    var titleDivHtml = titleDiv.length > 0 ? titleDiv[0].outerHTML : '';

                    var xmlText = '';
                    if (!IsNull(oResult.Xml)) {
                        xmlText = XUI.Xml.GetText(oResult.Xml);

                        if (IsNull(xmlText) && Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) {
                            xmlText = oResult.Xml.textContent;
                        }
                    }

                    tdViewSelector.innerHTML = titleDivHtml + xmlText;

                    with (XUI.Html.DomUtils.GetFirstChild(tdViewSelector)) {

                        id = oId;

                        tabIndex = 2;


                        if (!IsNull(oldDisabledStatus)) {
                            setAttribute("disabled", oldDisabledStatus);
                        }
                    }

                    for (var i = 0; i < customViews.length; i++) {
                        if (typeCode == customViews[i].recordType) {
                            var firstChild = XUI.Html.DomUtils.GetFirstChild(tdViewSelector);
                            var tempItem = firstChild.options[firstChild.options.length - 1 - i];
                            tempItem.text = customViews[i].name;
                            tempItem.value = customViews[i].id;
                            tempItem.setAttribute('Type', Mscrm.EntityTypeCode.SavedQuery);
                        }
                    }

                    if (oSelect.tagName == "SELECT") {
                        XUI.Html.DomUtils.GetFirstChild(tdViewSelector).value = oSelect.options[oSelect.selectedIndex]
                            .getAttribute("guid");
                    } else {
                        XUI.Html.DomUtils.GetFirstChild(tdViewSelector).value = oSelect.getAttribute("guid");
                    }

                    var childIndex = Mscrm.Utilities.isMobileRefresh() ? 1 : 0;

                    handleView(XUI.Html.DomUtils.GetChildElementAt(tdViewSelector, childIndex), oSelect.value);

                }
            }


            if (!IsNull(oArgs)) {
                if (!IsNull(oArgs.availableViews)) {
                    var availableViewsList = oArgs.availableViews;
                    var lastSysViewIndex = XUI.Html.DomUtils.GetFirstChild(tdViewSelector).options.length - 1;


                    if (customViews.length > 0) {
                        lastSysViewIndex -= customViews.length;
                    }

                    for (var i = lastSysViewIndex; i >= 0; i--) {
                        if (XUI.Html.DomUtils.GetFirstChild(tdViewSelector).options[i].parentNode
                            .id ==
                            "AppSystemViews") {
                            var tempViewId = XUI.Html.DomUtils.GetFirstChild(tdViewSelector).options[i].value;
                            if (availableViewsList.indexOf(tempViewId) < 0) {
                                var optionElement = XUI.Html.DomUtils.GetFirstChild(tdViewSelector).options[i];
                                optionElement.parentNode.removeChild(optionElement);
                            }
                        }
                    }
                }
            }
            if (!bFromOnLoad) {

                $addHandler(oSelect, "blur", typeSelectorOnBlur);
            }
        } else if (!bFromOnLoad) {


            setGridParameters();
            $find("crmGrid").Reset();
        }
    }

    function typeSelectorOnBlur(domEventObject) {
        $removeHandler(domEventObject.target, "blur", typeSelectorOnBlur);
        if (!IsNull(document.activeElement) && document.activeElement.tagName == "BODY") {
            domEventObject.target.focus();
        }
    }

    function setGridParameters() {
        var selObjectsElement = $get('selObjects');
        var crmGrid = $find("crmGrid");
        crmGrid.SetParameter("ObjectType", selObjectsElement.value);
        if (!isSearchOn) {
            crmGrid.SetParameter("quickfind", "");
        }
        crmGrid.SetParameter("filter", "");
        crmGrid.SetParameter("filterDisplay", "");

        var showMyRecordsElement = $get('showMyRecords');
        if (showMyRecordsElement) {
            if (isMyRecordsFilterEnabled()) {
                crmGrid.SetParameter("filteruser", showMyRecordsElement.checked);
            } else {
                crmGrid.SetParameter("filteruser", false);
            }
        }

        var showRelatedRecordsElement = $get("showRelatedRecords");
        if (showRelatedRecordsElement) {
            crmGrid.SetParameter("filterrelationship", showRelatedRecordsElement.checked);
        }

        if (!isSearchOn) {

            clearSearch();
        }
    }

    function clearSearch() {
        var findCriteria = document.getElementById("crmGrid_findCriteria");
        if (!IsNull(findCriteria) && findCriteria.value != "") {

            var selector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector");

            if (!IsNull(selector)) {
                selector.RemoveOption(selector.quickFindQuery);
            }

            var quickFindContainer = $find("crmGrid_quickFindContainer");
            quickFindContainer.NotifyExitedQuickFind();
        }
    }

    function handleView(o, entity) {
        var crmGrid = $find("crmGrid");
        var selObjectsDropdown = $get('selObjectsList') || $get('selObjects');
        var sOriginalViewId = crmGrid.GetParameter("viewid");


        if (sOriginalViewId == "{00000000-0000-0000-0000-000000000000}") {
            crmGrid.SetParameter("fetchXml", "");
            crmGrid.SetParameter("layoutXml", "");
        }


        if (selObjectsDropdown.selectedIndex != -1 && selObjectsDropdown.options.length > 0) {
            var tempDefaultViewId = selObjectsDropdown.options[selObjectsDropdown.selectedIndex].getAttribute("guid");
            if (!IsNull(tempDefaultViewId)) {
                sOriginalViewId = tempDefaultViewId;
            }
        }


        var iSelectedIndex = o.selectedIndex;
        var iDefaultEntityType = selObjectsDropdown.defaultSelected;
        if (entity == iDefaultEntityType) {
            o.value = sOriginalViewId;
        }


        if (o.selectedIndex == -1) {


            if (iSelectedIndex != -1) {
                o.selectedIndex = iSelectedIndex;
            } else {
                o.selectedIndex = iSelectedIndex = 0;
            }
        }

        if (customViews.length > 0) {
            var customViewIndex = -1;
            for (var i = 0; i < customViews.length; i++) {
                if (customViews[i].id == o.value) {
                    customViewIndex = i;
                    break;
                }
            }
            if (customViewIndex > -1) {
                crmGrid.SetParameter("viewid", "{00000000-0000-0000-0000-000000000000}");
                crmGrid.SetParameter("fetchXml", customViews[customViewIndex].fetchXml);
                crmGrid.SetParameter("layoutXml", customViews[customViewIndex].layoutXml);
            } else {
                crmGrid.SetParameter("viewid", o.value);
                crmGrid.SetParameter("fetchXml", "");
                crmGrid.SetParameter("layoutXml", "");
            }
        } else {
            if (o[iSelectedIndex].text == LOCID_SEARCH_RESULTS) {


                crmGrid.SetParameter("viewid", sOriginalViewId);
                isSearchOn = true;
            } else {
                crmGrid.SetParameter("viewid", o.value);
            }
        }

        crmGrid.SetParameter("viewtype", o.options[o.selectedIndex].getAttribute("Type"));

        setGridParameters();
        isSearchOn = false;

        var handler = new onGridRefreshCompleteHandler(o, sOriginalViewId);
        crmGrid.Reset(handler.OnComplete);
    }

    function onGridRefreshCompleteHandler(oViewSelector, sOriginalView) {
        var crmGrid = $find("crmGrid");
        var oViewSelect = oViewSelector;
        var sOriginalViewId = sOriginalView;
        this.OnComplete = _handleComplete;

        function _handleComplete(oResult) {

            if (!oResult.get_success()) {

                oViewSelector.value = sOriginalViewId;


                crmGrid.SetParameter("viewid", sOriginalViewId);
                crmGrid.SetParameter("viewtype", oViewSelect.options[oViewSelect.selectedIndex].getAttribute("Type"));
                crmGrid.Reset();
            }


            if (window.parent.UseTabletExperience) {

                var gridScrollableArea = $get("crmGrid_divDataArea");
                if (!IsNull(gridScrollableArea)) {

                    gridScrollableArea.removeEventListener('touchmove', OnScrollableControlTouchMove, false);
                    gridScrollableArea.addEventListener('touchmove', OnScrollableControlTouchMove, false);
                }
            }
        }
    }


    function quickFind(bForce) {
        var grid = $find("crmGrid");

        try {
            var sOldFindCriteria = grid.GetParameter("quickfind");
            var findCriteria = document.getElementById("crmGrid_findCriteria");

            var sFindCriteria = "";
            if (!IsNull(findCriteria)) {
                sFindCriteria = Trim(findCriteria.value.replace(/[\*]+/, "*"));
                findCriteria.value = sFindCriteria;
            }

            var resultsTitleDiv = $get('resultsTitle');

            if (resultsTitleDiv) {
                var localizedMessageFormat = resultsTitleDiv.getAttribute('localizedMessageFormat');

                if (localizedMessageFormat) {
                    resultsTitleDiv.innerHTML = String
                        .format(localizedMessageFormat, '<b>' + CrmEncodeDecode.CrmHtmlEncode(sFindCriteria) + '</b>');
                }
            }

            if (!bForce && sFindCriteria == "" && (IsNull(sOldFindCriteria) || sOldFindCriteria == "")) {
                return false;
            }

            var SavedQuerySelector = document.getElementById("crmGrid_SavedQuerySelector");

            grid.SetParameter("quickfind", sFindCriteria);
            grid.SetParameter("filter", "");
            grid.SetParameter("filterDisplay", "");
            var showMyRecordsElement = $get('showMyRecords');
            if (showMyRecordsElement) {
                if (isMyRecordsFilterEnabled()) {
                    grid.SetParameter("filteruser", showMyRecordsElement.checked);
                } else {
                    grid.SetParameter("filteruser", false);
                }
            }

            var showRelatedRecordsElement = $get("showRelatedRecords");
            if (showRelatedRecordsElement) {
                grid.SetParameter("filterrelationship", showRelatedRecordsElement.checked);
            }

            grid.ClearPagingCookie();

            grid.set_pageNumber(1);

            var gridJumpBar = $find("crmGrid_JumpBar");
            if (!IsNull(gridJumpBar)) {
                gridJumpBar.Reset();
            }

        } catch (e) {
            alert(LOCID_SEARCH_LIST_NOT_OPEN);
            return false;
        }
        return true;
    }

    function toggleSelectLookupItem(oLookupItem) {
        if (!isTrue(oLookupItem.getAttribute("selected"))) {
            oLookupItem.className = "ms-crm-Lookup-SelectedDialogItem";
            oLookupItem.setAttribute("selected", "true");
        } else {
            oLookupItem.className = "ms-crm-Lookup-DialogItem";
            oLookupItem.setAttribute("selected", "false");
        }
        lastfocus = "selectedItems";
        setNavigationState();
    }


    function showProperties() {
        var type, id;

        var crmGrid = $find("crmGrid");

        if (lastfocus == "crmGrid") {
            var items = crmGrid.get_innerGrid().get_selectedRecords();

            if (items.length == 0) {
                alert(LOCID_SELECT_AN_OBJECT);
                return;
            } else if (items.length > 1) {
                alert(LOCID_SELECT_ONE_OBJECT);
                return;
            }

            id = items[0][0];
            type = items[0][1];
        } else if (lastfocus == "selectedItems") {
            var item;
            var items = _selectedItems.Items();
            var len = items.length;
            var numSelected = 0;
            for (var i = 0; i < len && numSelected < 2; i++) {
                if (isTrue(items[i].selected)) {
                    item = items[i];
                    numSelected++;
                }
            }

            if (numSelected == 0) {
                alert(LOCID_SELECT_AN_OBJECT);
                return;
            } else if (numSelected > 1) {
                alert(LOCID_SELECT_ONE_OBJECT);
                return;
            }

            type = item.type;
            id = item.id;
        }

        if (Number(type) == UnresolvedEmailParty) {
            alert(LOCID_LOOKUP_UNRESOLVEDEMAILPARTY_ERROR);
            return;
        }

        var nWidth = 560;
        var nHeight = 525;
        var oWindowInfo = GetWindowInformation(type);
        if (!IsNull(oWindowInfo)) {
            nWidth = oWindowInfo.Width;
            nHeight = oWindowInfo.Height;
        }

        var oUrl = null;
        switch (Number(type)) {
        case Service:
            oUrl = Mscrm.CrmUri.create("/sm/services/readonly.aspx");
            oUrl.get_query()["objTypeCode"] = type;
            oUrl.get_query()["id"] = id;
            openStdWin(oUrl, "readonly" + buildWinName(id), nWidth, nHeight);
            break;
        case ImportMap:
            oUrl = Mscrm.CrmUri.create("/tools/managemaps/readonly.aspx");
            oUrl.get_query()["objTypeCode"] = type;
            oUrl.get_query()["id"] = id;
            openStdWin(oUrl, "readonly" + buildWinName(id), nWidth, nHeight);
            break;
        case SdkMessageProcessingStep:
        case SdkMessage:
        case SdkMessageFilter:
        case SdkMessageProcessingStepImage:
        case SdkMessageProcessingStepSecureConfig:
        case ServiceEndpoint:
        case PluginAssembly:
        case PluginType:
        case PluginTypeStatistic:
        case Post:
            break;

        default:


            openObj(type, id);
            break;
        }
    }

    function onGridSelection() {
        lastfocus = "crmGrid";

        setNavigationState();
    }

    function onBoxSelection() {
        lastfocus = "selectedItems";

        setNavigationState();
    }

    function isTrue(val) {
        return (val != null && ((typeof (val) == "boolean" && val) || (typeof (val) == "string" && val == "true")));
    }
</script>
<style type="text/css">
    #btnAdd { margin-left: 0px !important; }

    .tblFindGridContainer { bottom: <% = LookupGridBottomPosition %>px; }

    #multiLookupControls .ms-crm-MultipleLookup-ButtonSection { width: 90px; }
</style>
</head>
<body>

<div style="height: 100%; width: 100%; position: relative;">
    <% = RenderSearchHeader() %>
    <div style="left: 0px; right: 0px; position: absolute; bottom: 0; top: <% = _searchHeaderHeight %>px; min-height: <% = MinimumGridHeight %>px" id="tblFind">
        <% = RenderMobileRefreshResultPageHeader() %>
        <div id="tblFindGridContainer" class="tblFindGridContainer" onclick="onGridSelection();" onkeyup="onGridSelection();">
            <div style="position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; height: 100%">
                <cnt:AppGrid id="crmGrid" runat="server"/>
            </div>
        </div>
    </div>
    <% = RenderMultipleLookupControls() %>
    <div class='mobileRefreshNavigation'>
        <table cellpadding='0' cellspacing='12'>
            <tr>
                <td class='searchMode searchModeMultiSelect'>
                    <button id='btnFind'><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("MobileRefresh.LookupControl.Buttons.Find")) %></button>
                </td>
                <td class='resultsMode resultsModeMultiSelect'>
                    <button id='btnBack'><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("MobileRefresh.LookupControl.Buttons.Back")) %></button>
                </td>
            </tr>
            <tr>
                <td class='searchMode'>
                    <button id='btnCancel'><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("MobileRefresh.LookupControl.Buttons.Cancel")) %></button>
                </td>
                <td class='resultsMode searchModeMultiSelect'>
                    <button id='btnSelect'><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("MobileRefresh.LookupControl.Buttons.Done")) %></button>
                </td>
                <td class='resultsModeMultiSelect'>
                    <button id='btnAddMultiSelect'><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("MobileRefresh.LookupControl.Buttons.Add")) %></button>
                </td>
            </tr>
            </tr>
            <tr>
                <td class='searchMode'>
                    <button id='btnMobileRemoveValue'><%= CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("MobileRefresh.LookupControl.Buttons.RemoveValue")) %></button>
                </td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>