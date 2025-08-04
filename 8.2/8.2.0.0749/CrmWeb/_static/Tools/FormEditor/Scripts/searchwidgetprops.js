
var _oArgs,
    _oFieldsXml,
    _oFormXml,
    _oField,
    _secCols = 1,
    _sTabName = null,
    _sSectionName = null,
    _txtRowsPerPage = null,
    _chkEnableAutomaticSuggestion = null,
    _chkEnableRating = null;

function OnArticleTabLoad(oField) {
    _oArgs = getDialogArguments();
    _oFieldXml = _oArgs.FieldsXml;
    _oField = oField;
    _oFormXml = _oField.FormXml;
    _secCols = _oArgs.SecCols;
    _sSectionName = _oField.SectionName;
    _sTabName = _oField.TabName;
    var oLabels = _oField.Labels;
    _txtRowsPerPage = $get("RowsPerPage");
    _chkEnableAutomaticSuggestion = $get("chkEnableAutomaticSuggestions");
    _chkEnableRating = $get("chkEnableRating");
    $get("chkAllowChangeFilters").checked = true;
    enableDisableKnowledgeSuggestion();
    $get("autosuggestion").selectedIndex = 0;
    $get("showRating").selectedIndex = 0;
    $get("autosuggestionSource").selectedIndex = 0;
    $get("searchFilter").selectedIndex = 0;
    $get("primaryCustomer").selectedIndex = -1;
    CreateActionsSelector(handleActionSelectionClick);
    populateActionList()
}

function populateActionList() {
    var retVal =
        '<select id="ActionListSelector" name="ActionListSelector" class="ms-crm-SelectBox&#32;"><option value="0" title="' + LOCID_ACTIONS_ASSOCIATE + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_ASSOCIATE) + '</option><option value="1" title="' + LOCID_ACTIONS_DISASSOCIATE + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_DISASSOCIATE) + '</option><option value="2" title="' + LOCID_ACTIONS_COPY + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_COPY) + '</option><option value="3" title="' + LOCID_ACTIONS_EMAIL + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_EMAIL) + '</option><option value="5" title="' + LOCID_ACTIONS_EMAILCONTENT + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_EMAILCONTENT) + '</option><option value="4" title="' + LOCID_ACTIONS_POPOUT + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_POPOUT) + "</option></select>";
    ConstructActionList(retVal,
        "ActionListSelector",
        $get("actionSelection"),
        $get("ActionsAvailable"),
        handleViewListChange)
}

function ConstructActionList(htmlViewPicker, viewListId, actionSelection, tdViewList, onChangeHandler) {
    htmlViewPicker = htmlViewPicker.replace("<select", "<select MULTIPLE SIZE=4 ");
    tdViewList.innerHTML = htmlViewPicker;
    crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, $get(viewListId));
    var selViewList = $get(viewListId);
    enableDisableViewListActions();
    selViewList.onchange = null;
    $addHandler(selViewList, "change", onChangeHandler);
    selViewList.ViewCombo = selViewList;
    actionSelection.ViewList = selViewList
}

function CreateActionsSelector(onchangeHandler) {
    var ActionSelector = new Select;
    ActionSelector.ID = "actionSelection";
    var optGrpViewSel = new OptionGroup("", false, true, false);
    optGrpViewSel.AddOption(LOCID_VIEWS_SHOW_ALL_ACTIONS, "ShowAll");
    optGrpViewSel.AddOption(LOCID_VIEWS_SHOW_SEL_ACTIONS, "ShowSelectedActions");
    ActionSelector.AddOptionGroup(optGrpViewSel);
    ActionSelector.AddToControl($get("tdActionsSelector"));
    $get("actionSelection").onchange = onchangeHandler
}

function handleActionSelectionClick() {
    ToggleActionSelection($get("actionSelection"))
}

function ToggleActionSelection() {
    var actionSelection = $get("actionSelection"),
        ActionListSelector = $get("ActionListSelector");
    switch (actionSelection.selectedIndex) {
    case 0:
        actionSelection.ViewList.disabled = true;
        SelectAllViews(actionSelection.ViewList);
        $removeHandler(ActionListSelector, "change", handleViewListChange);
        $addHandler(ActionListSelector, "change", EnableAllViews);
        break;
    case 1:
        actionSelection.ViewList.disabled = false;
        SelectNoViews(actionSelection.ViewList);
        SelectViewListOption(actionSelection.ViewList, actionSelection.ViewList.ViewCombo.value);
        $removeHandler(ActionListSelector, "change", EnableAllViews);
        $addHandler(ActionListSelector, "change", handleViewListChange);
        break
    }
}

function enableDisableKnowledgeSuggestion() {
    $get("autosuggestion").disabled = !_chkEnableAutomaticSuggestion.checked ||
        $get("autosuggestionSource").options[$get("autosuggestionSource").selectedIndex].value == "1";
    $get("autosuggestionSource").disabled = !_chkEnableAutomaticSuggestion.checked
}

function enableDisableRating() {
    $get("showRating").disabled = !_chkEnableRating.checked
}

function enableDisableViewListActions() {
    var actionSelection = $get("actionSelection"),
        actionListSelector = $get("ActionListSelector");
    if (actionSelection.selectedIndex)
        actionListSelector.disabled = false;
    else
        actionListSelector.disabled = true
}

function applyArticleTabChanges() {
    var _sSearchFilter,
        _sAutomaticSuggestionSearchField,
        _sAutoSuggestionSource,
        _sRatingField,
        _sPrimaryCustomer,
        _sDefaultLanguage;
    if (_txtRowsPerPage.value.length < 1 ||
        _txtRowsPerPage.value < 1 && _txtRowsPerPage > 20 ||
        isNaN(_txtRowsPerPage.value)) {
        alert(LOCID_VALID_ROWSPERPAGE);
        _txtRowsPerPage.select();
        return false
    }
    _sDefaultLanguage = $get("defaultLanguage").options[$get("defaultLanguage").selectedIndex];
    if (!_sDefaultLanguage) {
        alert(LOCID_DEFAULTLANGUAGE_NOTACTIVE);
        return
    }
    _sSearchFilter = $get("searchFilter").selectedIndex != -1
        ? $get("searchFilter").options[$get("searchFilter").selectedIndex].value
        : null;
    _sAutomaticSuggestionSearchField = $get("autosuggestion").selectedIndex != -1
        ? $get("autosuggestion").options[$get("autosuggestion").selectedIndex].value
        : null;
    _sAutoSuggestionSource = $get("autosuggestionSource").selectedIndex != -1
        ? $get("autosuggestionSource").options[$get("autosuggestionSource").selectedIndex].value
        : null;
    _sRatingField = $get("showRating").selectedIndex != -1
        ? $get("showRating").options[$get("showRating").selectedIndex].value
        : null;
    _sPrimaryCustomer = $get("primaryCustomer").selectedIndex != -1
        ? $get("primaryCustomer").options[$get("primaryCustomer").selectedIndex].value
        : null;
    _sDefaultLanguage = _sDefaultLanguage.value != 0 ? _sDefaultLanguage.value : null;
    var bVisible = true;
    actionsSel = $get("actionSelection").selectedIndex != -1
        ? $get("actionSelection").options[$get("actionSelection").selectedIndex].value
        : null;
    actionsSelected = getViewsSelected($get("ActionListSelector"));
    var kmCtrl = new SearchWidgetObj("",
        _sSearchFilter,
        $get("chkAllowChangeFilters").checked,
        $get("chkShowLanguageFilter").checked,
        $get("chkShowDepartmentFilter").checked,
        $get("chkEnableAutomaticSuggestions").checked,
        _sAutomaticSuggestionSearchField,
        _sAutoSuggestionSource,
        $get("RowsPerPage").value,
        actionsSel,
        actionsSelected,
        _sPrimaryCustomer,
        0,
        0,
        _sTabName,
        _sSectionName,
        new Array(new LocalizedObj("", _oArgs.LangCode)),
        false,
        _oFormXml,
        bVisible,
        _sDefaultLanguage,
        void 0,
        void 0,
        $get("chkEnableRating").checked,
        _sRatingField);
    return kmCtrl
}