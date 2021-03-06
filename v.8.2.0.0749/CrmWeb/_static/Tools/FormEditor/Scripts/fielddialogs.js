
var _oFormXml,
    _oPropertiesXml,
    _oFieldsXml,
    _oEvents,
    _oEvent,
    _oDependencies,
    _oXmlDoc = XUI.Xml.CreateDocument(),
    _oXslDoc = null,
    _oXslt = CreateXslTemplate(),
    _oXslProc;

function ShowTabSections(bPreviewMode) {
    ShowTabSection("ColumnLayout");
    ShowTabSection("RowLayout");
    !bPreviewMode &&
        ShowTabSection("Location")
}

function ShowTabSection(sSectionName) {
    var oSection = $get("div" + sSectionName + "Section");
    if (oSection != null)
        oSection.style.display = "inline"
}

function UpdateSections() {
    var oSections = XUI.Xml.SelectNodes(_oFormXml,
            "/entity/form/tabs/tab[@id = '" +
            crmDialog.TabId.value +
            "']/columns/column/sections/section[not(@locklevel) or @locklevel = '0']",
            null),
        SelectSections = new Select;
    SelectSections.ID = "SectionName";
    SelectSections.OnChange = "UpdateLayout(this)";
    SelectSections.Selected = oSections[0].getAttribute("name");
    for (var iLen = oSections.length,
        i = 0;
        i < iLen;
        i++)
        SelectSections.AddOption(XUI.Xml.GetText(XUI.Xml
                .SelectSingleNode(oSections[i], "labels/label[@languagecode = " + _langCode + "]/@description", null)),
            oSections[i].getAttribute("name"));
    SelectSections.AddToControl(Sections);
    UpdateLayout()
}

function BuildLocations(sTabName, sSectionName) {
    XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/fieldlocations.xsl").toString(),
        false,
        function(xmlDoc) {
            _oXslDoc = xmlDoc
        },
        function(statusCode, xmlDoc) {
            _oXslDoc = null
        });
    _oXslt.stylesheet = _oXslDoc;
    _oXslProc = _oXslt.createProcessor();
    _oXslProc.input = _oFormXml;
    _oXslProc.addParameter("tabName", sTabName);
    _oXslProc.addParameter("sectionName", sSectionName);
    _oXslProc.addParameter("languageCode", _langCode);
    _oXslProc.addParameter("Tools.FormEditor.Dialogs.fieldlocations.xsl_36", LOCID_FORMEDITOR_TAB_LABEL);
    _oXslProc.addParameter("Tools.FormEditor.Dialogs.fieldlocations.xsl_1", LOCID_FORMEDITOR_SECTION_LABEL);
    _oXslProc.transform();
    FieldLocations.innerHTML = _oXslProc.output
}

function SelectEventRow() {
    UnSelectEventRow();
    var o = event.srcElement;
    while (o.tagName != "TR")
        o = o.parentNode;
    o.style.backgroundColor = "#c4ddff";
    _oEvent = o
}

function UnSelectEventRow() {
    if (_oEvent) {
        var oRow = _oEvent;
        oRow.style.backgroundColor = "#ffffff"
    }
}

function DrawDependencyFieldSelect() {
    var oNodes = XUI.Xml.SelectNodes(_oFormXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control",
            null),
        iLen = oNodes.length,
        sNodeName = "",
        sFieldsAry = [];
    sFieldsAry[0] = [];
    sFieldsAry[1] = [];
    for (var i = 0,
        count = 0,
        i = 0;
        i < iLen;
        i++) {
        var sClassId = oNodes[i].getAttribute("classid");
        sNodeName = oNodes[i].getAttribute("id");
        if (!((sNodeName.startsWith("spacer_System") || sNodeName.startsWith("spacer_User")) && sClassId === null)) {
            var displayName = GetDisplayName(sNodeName);
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(displayName))
                continue;
            sFieldsAry[0][count] = sNodeName;
            sFieldsAry[1][count++] = displayName
        }
    }
    Quicksort(sFieldsAry[1], 0, sFieldsAry[0].length - 1, sFieldsAry[0]);
    if (_oDependencies)
        iLen = _oDependencies.length;
    else
        iLen = 0;
    var sDependsName = "",
        sDependsAry = new Array(iLen);
    sDependsAry[0] = new Array(iLen);
    sDependsAry[1] = new Array(iLen);
    for (var i = 0; i < iLen; i++) {
        sDependsName = _oDependencies[i];
        sDependsAry[0][i] = sDependsName;
        sDependsAry[1][i] = GetDisplayName(sDependsName)
    }
    drawFieldSelect(sFieldsAry, sDependsAry)
}

function DrawDependencyListControl(oDependencies, oFormXml, oFieldsXml, oPropertiesXml, langCode) {
    _oDependencies = oDependencies;
    _oFormXml = oFormXml;
    _oFieldsXml = oFieldsXml;
    _oPropertiesXml = oPropertiesXml;
    _langCode = langCode;
    _bFieldSelectShowUp = false;
    _bFieldSelectShowDown = false;
    _sFieldSelectLeftTitle = LOCID_AVAILABLE_FIELDS;
    _sFieldSelectRightTitle = LOCID_DEPENDENT_FIELDS;
    DrawDependencyFieldSelect()
}

function IsVariableHeightField(sDataType, sFormat) {
    return sDataType == "memo" ||
        sDataType == "iframe" ||
        sDataType == "unknown" ||
        sDataType == "text" && sFormat == "textarea"
}

function IsIdValid(sId) {
    sId = sId.toString();
    if (sId.search(/\W/) != -1)
        return false;
    else
        return true
}

function GetDisplayName(sFieldName) {
    var sDisplayName = "",
        oFieldNode;
    if (_oFieldsXml)
        oFieldNode = XUI.Xml.SelectSingleNode(_oFieldsXml, "/entity/fields/field[@name='" + sFieldName + "']", null);
    if (oFieldNode) {
        var oPropertiesNode = XUI.Xml.SelectSingleNode(_oPropertiesXml,
            "/entity/fields/field[@name='" + sFieldName + "']",
            null);
        if (oPropertiesNode != null)
            sDisplayName = XUI.Xml.SelectSingleNode(oPropertiesNode,
                "displaynames/displayname[@languagecode = " + _langCode + "]",
                null).getAttribute("description");
        else {
            var sFieldLocName = XUI.Xml.SelectSingleNode(_oFieldsXml,
                "/entity/fields/field[@name='" + sFieldName + "']",
                null).getAttribute("localizedname");
            sDisplayName = sFieldLocName ? sFieldLocName : sFieldName
        }
    } else {
        var labelNode = XUI.Xml.SelectSingleNode(_oFormXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
            sFieldName +
            "']/labels/label[@languagecode = " +
            _langCode +
            "]",
            null);
        if (labelNode === null)
            sDisplayName = "";
        else
            sDisplayName = labelNode.getAttribute("description")
    }
    return sDisplayName
}

function UpdateLayout() {
    if (typeof crmDialog.DataType == "undefined")
        return;
    var oField = getDialogArguments().Field,
        oSection = XUI.Xml.SelectSingleNode(_oFormXml,
            "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + crmDialog.SectionId.value + "']",
            null),
        sDataType = crmDialog.DataType.value,
        sFormat = oField.PropertyBag != null ? oField.PropertyBag.Format : null,
        layout = oSection.getAttribute("layout");
    if (layout == null || layout == "varwidth")
        if (IsVariableHeightField(sDataType, sFormat)) {
            crmDialog.Auto.disabled = false;
            crmDialog.Auto.checked = oField.Auto;
            crmDialog.Span[0].checked = true;
            crmDialog.Span[0].disabled = true;
            crmDialog.Span[1].checked = false;
            crmDialog.Span[1].disabled = true
        } else {
            crmDialog.Span[0].disabled = false;
            crmDialog.Span[1].disabled = false;
            if (oField.Span)
                crmDialog.Span[0].checked = true;
            else
                crmDialog.Span[1].checked = true
        }
    else {
        crmDialog.Span[1].checked = true;
        crmDialog.Span[0].disabled = true;
        crmDialog.Span[1].disabled = true;
        if (IsVariableHeightField(sDataType, sFormat)) {
            crmDialog.Auto.disabled = true;
            crmDialog.Auto.checked = false
        }
    }
    crmDialog.Span[0].defaultChecked = crmDialog.Span[0].checked;
    crmDialog.Span[1].defaultChecked = crmDialog.Span[1].checked
}

function GetActualRowSpan() {
    var iActualRowSpan = Mscrm.FormControlInputBehavior.GetBehavior("NumRows").get_dataValue(),
        auto = $get("Auto", crmDialog);
    if (auto.checked) {
        var fieldName = $get("FieldName"),
            oTab = XUI.Xml.SelectSingleNode(_oFormXml,
                "/entity/form/tabs/tab[@id = '" + crmDialog.TabId.value + "']",
                null),
            oAutoCell = XUI.Xml.SelectSingleNode(oTab,
                "columns/column/sections/section/rows/row/cell[@auto = 'true' and control/@id != '" +
                fieldName.value +
                "' ]",
                null);
        if (oAutoCell != null &&
            XUI.Xml.SelectSingleNode(oAutoCell, "control", null).getAttribute("id") != fieldName.value)
            if (confirm(LOCID_ANOTHER_EXPANDING_TAB))
                iActualRowSpan = iActualRowSpan + 1;
            else
                auto.checked = false;
        else
            iActualRowSpan = iActualRowSpan + 1
    }
    return iActualRowSpan
}

function SetUIRowSpan(oField) {
    var numRowsControl = Mscrm.FormControlInputBehavior.GetBehavior("NumRows");
    if (oField.Auto)
        numRowsControl.set_dataValue(parseInt(oField.RowSpan, 10) - 1);
    else
        numRowsControl.set_dataValue(parseInt(oField.RowSpan, 10))
}

function populateParameterList(formParameterNode) {
    if (!IsNull(formParameterNode)) {
        var qsNodes = XUI.Xml.SelectNodes(formParameterNode, "querystringparameter", null);
        if (!IsNull(qsNodes) && qsNodes.length > 0)
            for (var paramName = null,
                paramType = null,
                i = 0;
                i < qsNodes.length;
                i++) {
                paramName = qsNodes[i].getAttribute("name");
                paramType = qsNodes[i].getAttribute("type");
                !IsNull(paramName) &&
                    !IsNull(paramType) &&
                    parameterEditValues_listEditComponent.addValue(paramName, paramType)
            }
    }
}

function ConstructViewCombo(htmlViewPicker, viewComboId, tdViewCombo, onChangeHandler) {
    var retValCombo = htmlViewPicker.replace("crmGrid_SavedQuerySelector", viewComboId);
    tdViewCombo.innerHTML = retValCombo;
    crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, $get(viewComboId));
    var selViewCombo = $get(viewComboId);
    selViewCombo.onchange = null;
    $addHandler(selViewCombo, "change", onChangeHandler)
}

function ConstructViewList(htmlViewPicker, viewListId, viewSelection, tdViewList, onChangeHandler, selViewCombo) {
    htmlViewPicker = htmlViewPicker.replace("<select", "<select MULTIPLE SIZE=4 ");
    htmlViewPicker = htmlViewPicker.replace("crmGrid_SavedQuerySelector", viewListId);
    tdViewList.innerHTML = htmlViewPicker;
    crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, $get(viewListId));
    var selViewList = $get(viewListId);
    if (viewSelection.selectedIndex)
        $get(viewListId).disabled = false;
    else
        $get(viewListId).disabled = true;
    selViewList.onchange = null;
    $addHandler(selViewList, "change", onChangeHandler);
    selViewList.ViewCombo = selViewCombo;
    selViewCombo.ViewList = selViewList;
    viewSelection.ViewList = selViewList
}

function handleViewListChange(domEvent) {
    var selViewList = domEvent.target,
        scrTop = selViewList.scrollTop;
    SelectViewListOption(selViewList, selViewList.ViewCombo.value);
    selViewList.scrollTop = scrTop
}

function handleViewComboChange(domEvent) {
    var selViewCombo = domEvent.target;
    SelectViewListOption(selViewCombo.ViewList, selViewCombo.value);
    if (selViewCombo.value === "{F79AD170-AE03-4F4C-8132-D4AA08520A0C}") {
        HandleRecordAccessTeamView();
        if ($get("TeamTemplateRow"))
            $get("TeamTemplateRow").style.display = ""
    } else {
        if ($get("TeamTemplateRow"))
            $get("TeamTemplateRow").style.display = "none";
        _isTeamTemplateSet = false
    }
}

function HandleRecordAccessTeamView() {
    var entityCode = XUI.Xml.SelectSingleNode(oArgs.FieldsXml, "entity").getAttribute("otc"),
        command = new RemoteCommand("FormEditorWebService", "GetTeamTemplateInfo");
    command.SetParameter("entityCode", entityCode);
    var result = command.Execute();
    if (result.Success) {
        var teamTemplatesResultDocument = XUI.Xml.LoadXml(result.ReturnValue),
            teamTemplateNodes = XUI.Xml.SelectNodes(teamTemplatesResultDocument, "/teamtemplates/teamtemplate");
        if (teamTemplateNodes.length > 0) {
            $get("TeamTemplateErrorCell").style.display = "none";
            var teamTemplateSelect = new Select;
            teamTemplateSelect.ID = "TeamTemplateSelect";
            var teamTemplateOptionGroup = new OptionGroup("", true, true, false);
            teamTemplateOptionGroup.Sorted = true;
            teamTemplateOptionGroup.Ascend = true;
            for (var i = 0; i < teamTemplateNodes.length; i++) {
                var teamTemplateId = teamTemplateNodes[i].getAttribute("teamtemplateid"),
                    teamTemplateName = CrmEncodeDecode
                        .CrmXmlDecode(teamTemplateNodes[i].getAttribute("teamtemplatename"));
                teamTemplateOptionGroup.AddOption(teamTemplateName, teamTemplateId, false, false)
            }
            teamTemplateSelect.AddOptionGroup(teamTemplateOptionGroup);
            teamTemplateSelect.AddToControl($get("TeamTemplateCell"));
            $get("TeamTemplateCell").style.display = "";
            _isTeamTemplateSet = true
        } else {
            $get("TeamTemplateErrorCell").style.display = "";
            $get("TeamTemplateCell").style.display = "none";
            _isTeamTemplateSet = false
        }
    }
}

function SelectViewListOption(selViewList, val) {
    for (var i = 0; i < selViewList.options.length; i++)
        if (selViewList.options[i].value === val && !selViewList.options[i].selected) {
            selViewList.options[i].selected = true;
            break
        }
}

function ToggleViewSelection() {
    var viewSelection = $get("viewSelection"),
        ViewListSelector = $get("ViewListSelector");
    switch (viewSelection.selectedIndex) {
    case 0:
        viewSelection.ViewList.disabled = true;
        break;
    case 1:
        viewSelection.ViewList.disabled = false;
        SelectAllViews(viewSelection.ViewList);
        $removeHandler(ViewListSelector, "change", handleViewListChange);
        $addHandler(ViewListSelector, "change", EnableAllViews);
        break;
    case 2:
        viewSelection.ViewList.disabled = false;
        SelectNoViews(viewSelection.ViewList);
        SelectViewListOption(viewSelection.ViewList, viewSelection.ViewList.ViewCombo.value);
        $removeHandler(ViewListSelector, "change", EnableAllViews);
        $addHandler(ViewListSelector, "change", handleViewListChange);
        break
    }
}

function EnableAllViews() {
    for (i = 0; i < ViewListSelector.length; i++)
        ViewListSelector.options[i].selected = true
}

function SelectNoViews(selViewList) {
    for (var i = 0; i < selViewList.options.length; i++)
        selViewList.options[i].selected = false
}

function SelectAllViews(selViewList) {
    for (var i = 0; i < selViewList.options.length; i++)
        selViewList.options[i].selected = true
}

function SetViewListValue(viewsValue, selViewList) {
    if (!isNullOrEmptyString(viewsValue))
        for (var i = 0; i < selViewList.options.length; i++) {
            var val = selViewList.options[i].value;
            selViewList.options[i].selected = viewsValue.indexOf(val) != -1
        }
}

function CreateViewSelector(onchangeHandler) {
    var ViewSelector = new Select;
    ViewSelector.ID = "viewSelection";
    var optGrpViewSel = new OptionGroup("", false, true, false);
    optGrpViewSel.AddOption(LOCID_VIEWS_OFF, "0");
    optGrpViewSel.AddOption(LOCID_VIEWS_SHOW_ALL, "1");
    optGrpViewSel.AddOption(LOCID_VIEWS_SHOW_SELECTED, "2");
    ViewSelector.AddOptionGroup(optGrpViewSel);
    ViewSelector.AddToControl($get("tdViewSelector"));
    $get("viewSelection").onchange = onchangeHandler
}

function getViewsSelected(selViewList) {
    for (var views = "",
        isAllViewsSelected = true,
        i = 0;
        i < selViewList.options.length;
        i++)
        if (selViewList.options[i].selected)
            views += selViewList.options[i].value + ",";
        else
            isAllViewsSelected = false;
    views = views.substring(0, views.length - 1);
    if (isAllViewsSelected)
        views = "";
    return views
}