
var _currentDataType = "String",
    _currentValueControl = null,
    _currentValueConditionControl = null,
    _attributeTypeMapping = null,
    _currentEntityName = "",
    _currentAttribute = "",
    _currentAttributeCtrl = null,
    _primaryEntityName = "",
    _relatedAttributeName = "",
    DurationOption = "2",
    _isCreateMode = false,
    _readOnlyForm = false,
    _isConditionMode = false,
    _additionalUpdateOperatorList = "String:+=,clear;";
_additionalUpdateOperatorList += "Boolean:clear;";
_additionalUpdateOperatorList += "Picklist:clear;";
_additionalUpdateOperatorList += "PartyList:+=,-=,clear;";
_additionalUpdateOperatorList += "Lookup:clear;";
_additionalUpdateOperatorList += "User:clear;";
_additionalUpdateOperatorList += "Customer:clear;";
_additionalUpdateOperatorList += "Owner:clear;";
_additionalUpdateOperatorList += "Decimal:+=,-=,*=,clear;";
_additionalUpdateOperatorList += "Integer:+=,-=,*=,clear;";
_additionalUpdateOperatorList += "Float:+=,-=,*=,clear;";
_additionalUpdateOperatorList += "Money:+=,-=,*=,clear;DateTime:clear;";
_additionalUpdateOperatorList += "DateTime:clear;";
var _compatibleTypes = [];

function GetCompatibleTypeMapping(dataType) {
    if (_compatibleTypes.length == 0) {
        _compatibleTypes["Decimal"] = "Float,Integer,Money";
        _compatibleTypes["Float"] = "Decimal,Integer,Money";
        _compatibleTypes["Integer"] = "Decimal,Float,Money";
        _compatibleTypes["Money"] = "Decimal,Integer,Float";
        if (!_isConditionMode)
            _compatibleTypes["String"] =
                "Boolean,State,Status,Picklist,PartyList,Lookup,User,Customer,Owner,Decimal,Integer,Float,Money,DateTime,Key";
        _compatibleTypes["Customer"] = "Lookup,Key";
        _compatibleTypes["Lookup"] = "Customer,Owner,Key,User";
        _compatibleTypes["Owner"] = "User,Key,Lookup";
        _compatibleTypes["User"] = "Key";
        _compatibleTypes["PartyList"] = "Customer,Lookup,Owner,Key";
        _compatibleTypes["Key"] = "Customer,Lookup,Owner";
        _compatibleTypes["UniqueIdentifier"] = "Key,Lookup"
    }
    return _compatibleTypes[dataType]
}

function GetWorkflowAttributeType(attribute) {
    var dataType = attribute.getAttribute("datatype");
    switch (dataType) {
    case "string":
    case "nvarchar":
    case "text":
    case "ntext":
    case "memo":
        return "String";
    case "boolean":
    case "bit":
        return "Boolean";
    case "state":
        return "State";
    case "status":
        return "Status";
    case "language":
        return "Integer";
    case "picklist":
    case "objecttypecode":
        return "Picklist";
    case "primarykey":
        return "Key";
    case "partylist":
        return "PartyList";
    case "uniqueidentifier":
        return "UniqueIdentifier";
    case "lookup":
        var re = new RegExp("(?:^|,)\\s*8\\s*(?:,|$)", "ig");
        if (re.test(attribute.getAttribute("lookuptypes")))
            return "User";
        return "Lookup";
    case "customer":
        return "Customer";
    case "owner":
        return "Owner";
    case "decimal":
        return "Decimal";
    case "int":
    case "integer":
        return "Integer";
    case "number":
    case "float":
        return "Float";
    case "money":
        return "Money";
    case "datetime":
    case "date":
    case "time":
        return "DateTime";
    default:
        return dataType
    }
}

function LoadDynamicValuesForAttribute(valueControl, attribute) {
    _currentValueControl = valueControl;
    _currentValueConditionControl = $find(_currentValueControl.id);
    if (attribute.id == "DisplayText" || attribute.id == "staticUrlTextbox")
        _currentDataType = GetDataTypeForAttribute(attribute.id);
    else
        _currentDataType = GetWorkflowAttributeType(attribute);
    var entityNameControl = document.getElementById("selObjects"),
        selectedEntity = entityNameControl.options[entityNameControl.selectedIndex];
    OnEntityChange(selectedEntity.getAttribute("title"), selectedEntity.value, attribute);
    attribute.id != "DisplayText" &&
        attribute.id != "staticUrlTextbox" &&
        ShowDurationControl(_currentDataType);
    _isConditionMode = true
}

function resizeDefaultValueAreaIE7(defaultValueControl) {
    if (!Mscrm.Utilities.isIE7OrIE7CompactMode())
        return;
    if (defaultValueControl.innerHTML.indexOf("TEXTAREA") != -1)
        defaultValueControl.parentNode.style.height = "30px";
    else
        defaultValueControl.parentNode.style.height = "20px";
    $get("okButtonCell").style.paddingTop = "13px"
}

function OnEntityChangeCore(selectBox, dataSelectBox, entityValue, entityHasDot, attribute) {
    if (IsNull(_currentValueControl))
        return;
    if (attribute != undefined) {
        if (!IsNull(attribute.value) && attribute.value != "" && _isConditionMode)
            _currentAttribute = attribute.value;
        else
            _currentAttribute = attribute.id;
        _currentAttributeCtrl = attribute
    } else if (_currentAttributeCtrl != null)
        attribute = _currentAttributeCtrl;
    var references = null;
    if (!IsNull(attribute))
        if (!IsNull(attribute.getAttribute("references")))
            references = attribute.getAttribute("references");
        else if (!IsNull(attribute.getAttribute("lookuptypes")))
            references = attribute.getAttribute("lookuptypes");
        else if (_currentDataType == "Picklist") {
            var entityName = null;
            if (!IsNull(_currentValueConditionControl))
                entityName = _currentValueConditionControl.get_entity();
            if (IsNull(entityName))
                entityName = _currentEntityName;
            if (!IsNull(entityName) && entityName.length > 0)
                if (_currentAttribute.indexOf("#Arguments#") == -1)
                    references = FindOptionSetName(entityName + "." + _currentAttribute)
        }
    for (var index = 0,
        index = 0;
        index < dataSelectBox.options.length;
        index++) {
        var option = dataSelectBox.options[index];
        dotArray = option.value.split(".");
        if (entityHasDot == false && dotArray.length > 2)
            continue;
        if (option.value.search(entityValue) != -1) {
            if (!IsNull(references) && references.length > 0) {
                var fAdd = false;
                if (option.getAttribute("references") != undefined && !IsNull(option.getAttribute("references")))
                    for (var searchInString = "," + option.getAttribute("references") + ",",
                        referenceTypes = references.split(","),
                        luIndex = 0;
                        !fAdd && luIndex < referenceTypes.length;
                        luIndex++)
                        if (-1 != searchInString.indexOf("," + referenceTypes[luIndex] + ","))
                            fAdd = true;
                if (!fAdd && _currentDataType == "Picklist") {
                    var hashArray = option.value.split("#");
                    if (hashArray != undefined && !IsNull(hashArray))
                        if (hashArray[1] != undefined && !IsNull(hashArray[1]))
                            if (hashArray[1] == "ResponsePicklist")
                                fAdd = true
                }
                if (!fAdd)
                    continue
            }
            addOptionSortedByText(selectBox, XUI.Html.GetText(option), option.value)
        }
    }
}

function AddCompatibleEntityAttributes(selectBox, entityValue, entityHasDot, attribute, dataType) {
    var compatibleTypes = GetCompatibleTypeMapping(dataType);
    if (compatibleTypes != undefined)
        for (var typeNames = compatibleTypes.split(","),
            index = 0,
            index = 0;
            index < typeNames.length;
            index++)
            AddEntityAttributes(selectBox, entityValue, entityHasDot, attribute, typeNames[index])
}

function AddEntityAttributes(selectBox, entityValue, entityHasDot, attribute, dataType) {
    var hiddenSelectBox = null;
    hiddenSelectBox = document.getElementById("valueSelectorHidden" + dataType);
    if (IsNull(hiddenSelectBox))
        return;
    OnEntityChangeCore(selectBox, hiddenSelectBox, entityValue, entityHasDot, attribute)
}

function OnEntityChange(entityName, entityValue, attribute) {
    var selectBox = document.getElementById("valueSelector");
    selectBox.innerHTML = "";
    var entityHasDot = false;
    entityArray = entityValue.split(".");
    if (entityArray.length > 1)
        entityHasDot = true;
    AddEntityAttributes(selectBox, entityValue, entityHasDot, attribute, _currentDataType);
    AddCompatibleEntityAttributes(selectBox, entityValue, entityHasDot, attribute, _currentDataType);
    if (selectBox.size > 1)
        selectBox.selectedIndex = -1;
    else
        selectBox.selectedIndex = 0
}

function addOptionSortedByText(selectBox, optionText, optionValue) {
    try {
        if (IsOptionFiltered(optionValue))
            return
    } catch (e) {
    }
    var anOption = document.createElement("OPTION");
    if (selectBox.options.length == 0)
        Mscrm.Utilities.addOption(anOption, selectBox, selectBox.options.length);
    else {
        for (var index = 0,
            length = selectBox.options.length,
            index = 0;
            index < length;
            index++)
            if (XUI.Html.GetText(selectBox[index]) > optionText) {
                Mscrm.Utilities.addOption(anOption, selectBox, index);
                break
            } else if (selectBox.options[index].value == optionValue)
                return;
        index == length &&
            Mscrm.Utilities.addOption(anOption, selectBox, index)
    }
    XUI.Html.SetText(anOption, optionText);
    anOption.setAttribute("title", optionText);
    anOption.value = optionValue
}

function InsertDataSlug(slugValue, slugText) {
    if (!IsNull(_currentValueControl)) {
        var _oAutoShow = XUI.Html.DomUtils.GetFirstChild(_currentValueControl),
            _autoShowControl = $find(_oAutoShow.id),
            _slugControl = _autoShowControl.getSlugControl();
        if (Mscrm.FormUtility.getSlugBehavior(_slugControl)) {
            var entityNameControl = document.getElementById("selObjects");
            if (!IsTimeoutCondition(_currentValueConditionControl.get_conditionParentControl()))
                slugText = XUI.Html.GetText(entityNameControl.options[entityNameControl
                        .selectedIndex]) +
                    "-" +
                    slugText;
            _autoShowControl.set_text(slugText);
            _autoShowControl.set_defaultText(slugText);
            InsertDataSlugCore(_slugControl, slugValue, slugText, false, null, null, null, true, false, false);
            _currentValueConditionControl.get_conditionParentControl().FieldChanged()
        }
    }
}

function UpdateOperator(control, value, text) {
    var slugBehavior = Mscrm.FormUtility.getSlugBehavior(control);
    Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
    slugBehavior.get_isDataSlug() &&
        !IsNull(value) &&
        !IsNull(text) &&
        slugBehavior.UpdateOperatorControl(value, text, getOperatorTextForValue(text))
}

function InsertDataSlugCore(control,
    value,
    text,
    isMultiSlug,
    attributeName,
    operatorValue,
    operatorText,
    isReadOnly,
    isDefaultValue,
    isInsertHyperLink) {
    var slugBehavior = Mscrm.FormUtility.getSlugBehavior(control);
    Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
    slugBehavior.set_isDisabled(_readOnlyForm);
    slugBehavior.set_isDataSlug(true);
    slugBehavior.set_isMultiSlug(isMultiSlug);
    slugBehavior.set_isReadOnly(isReadOnly);
    !IsNull(attributeName) &&
        slugBehavior.set_attributeName(attributeName);
    if (IsEmailBody(control))
        if (isInsertHyperLink)
            InsertDataSlugInEmailRTE(slugBehavior, value, text);
        else
            slugBehavior.get_masterControl().updateDataField(value, text, isReadOnly);
    else {
        slugBehavior.InsertSlugControl(value, text, isDefaultValue, isInsertHyperLink);
        UpdateOperator(control, operatorValue, operatorText);
        if (_currentDataType == "DateTime") {
            var beforeAfter = document.getElementById("beforeAfterSelector");
            !IsNull(beforeAfter) &&
                beforeAfter.value != DurationOption &&
                ResetDurationValue()
        }
    }
}

function InsertDataSlugInEmailRTE(slugBehavior, value, text) {
    var html = "";
    slugBehavior.set_isDataSlug(true);
    var id = "dataslug" + (new Date).getTime();
    html += '<SPAN id="' +
        id +
        '" class="ms-crm-DataSlug" contentEditable="true" style="DISPLAY: inline" tabIndex="-1" value=\'';
    html += CrmEncodeDecode.CrmHtmlAttributeEncode(value) + "'";
    html += ' title="' + CrmEncodeDecode.CrmHtmlAttributeEncode(text) + '">';
    html += CrmEncodeDecode.CrmHtmlEncode(text);
    html += "</SPAN>";
    var _oIFrame = $get("descriptionIFrame");
    if (!isNullOrEmptyString(_oIFrame)) {
        var _oEmailBody = _oIFrame.contentWindow,
            str = _oEmailBody.document.body.innerHTML;
        str += html;
        _oEmailBody.document.body.innerHTML = str;
        $create(Mscrm.DataSlug, null, null, null, _oEmailBody.document.getElementById(id))
    }
}

function UpdateControlInnerHtml(control, htmlString) {
    if (IsEmailBody(control))
        InsertTextInRTE(htmlString);
    else {
        var slugBehavior = Mscrm.FormUtility.getSlugBehavior(control);
        Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
        slugBehavior.set_isDisabled(_readOnlyForm);
        slugBehavior.set_isDataSlug(true);
        slugBehavior.UpdateInnerHtml(htmlString)
    }
}

function RemoveFromDynamicValueList() {
    var listControl = document.getElementById("dynamicValueSelector");
    listControl.selectedIndex >= 0 &&
        listControl.remove(listControl.selectedIndex)
}

function AddToDynamicValueList() {
    var selectBox = document.getElementById("valueSelector");
    if (selectBox.selectedIndex == -1)
        return;
    var selectedOption = selectBox.options[selectBox.selectedIndex];
    if (IsNull(selectedOption))
        return;
    for (var listControl = document.getElementById("dynamicValueSelector"),
        index = 0,
        length = listControl.options.length,
        index = 0;
        index < length;
        index++)
        if (listControl.options[index].value == selectedOption.value)
            break;
    if (index == length) {
        var anOption = document.createElement("OPTION");
        Mscrm.Utilities.addOption(anOption, listControl, index);
        var entityNameControl = document.getElementById("selObjects");
        XUI.Html.SetText(anOption,
            XUI.Html.GetText(selectedOption) +
            "(" +
            XUI.Html.GetText(entityNameControl.options[entityNameControl.selectedIndex]) +
            ")");
        anOption.value = selectedOption.value
    }
    listControl.length > 0 &&
        EnableOkButton()
}

function EnableOkButton() {
    EnableDisableOkButton(false)
}

function DisableOkButton() {
    EnableDisableOkButton(true)
}

function FindOptionSetName(attrFullName) {
    var hiddenSelectBox = null;
    if (_isConditionMode)
        hiddenSelectBox = document.getElementById("valueSelectorHiddenPicklist");
    else
        hiddenSelectBox = document.getElementById("sourceHiddenPicklist");
    if (hiddenSelectBox != null)
        for (index = 0; index < hiddenSelectBox.options.length; index++) {
            var option = hiddenSelectBox.options[index];
            if (option.value == attrFullName)
                if (_isConditionMode)
                    return option.getAttribute("references");
                else
                    return XUI.Html.GetText(option)
        }
    return "^"
}

function EnableDisableOkButton(disable) {
    var buttonCell = document.getElementById("wfDynamicExpressionOk");
    if (!IsNull(buttonCell))
        disable ? buttonCell.setAttribute("disabled", true) : buttonCell.removeAttribute("disabled")
}

function setOperatorAsClearOperator() {
    for (var operatorControl = document.getElementById("operatorSelector"),
        index = 0,
        index = 0;
        index < operatorControl.options.length;
        index++)
        if (operatorControl.options[index].value == "clear") {
            operatorControl.selectedIndex = index;
            OperatorChange();
            break
        }
}

function EnableOkAddButtons() {
    EnableDisableOkAddButtons(false)
}

function DisableOkAddButtons() {
    EnableDisableOkAddButtons(true)
}

function EnableDisableOkAddButtons(disable) {
    var addButton = document.getElementById("wfDynamicExpressionAdd"),
        okButton = document.getElementById("wfDynamicExpressionOk"),
        monthControl = document.getElementById("monthSelector"),
        dayControl = document.getElementById("daySelector"),
        hourControl = document.getElementById("hourSelector"),
        minuteControl = document.getElementById("minuteSelector"),
        beforeAfterControl = document.getElementById("beforeAfterSelector"),
        entitySelectorControl = document.getElementById("selObjects"),
        attributeSelectorControl = document.getElementById("valueSelector"),
        dynamicValueControl = document.getElementById("dynamicValueSelector"),
        defaultValueSpan = document.getElementById("defaultValueControlSpan");
    if (disable) {
        addButton.setAttribute("disabled", true);
        okButton.setAttribute("disabled", true);
        entitySelectorControl.setAttribute("disabled", true);
        attributeSelectorControl.setAttribute("disabled", true);
        dynamicValueControl.setAttribute("disabled", true);
        Mscrm.Utilities.enableDisableDomElement(defaultValueSpan, true)
    } else {
        addButton.removeAttribute("disabled");
        okButton.removeAttribute("disabled");
        entitySelectorControl.removeAttribute("disabled");
        attributeSelectorControl.removeAttribute("disabled");
        dynamicValueControl.removeAttribute("disabled");
        Mscrm.Utilities.enableDisableDomElement(defaultValueSpan, false)
    }
    if (!IsNull(monthControl))
        if (disable) {
            monthControl.setAttribute("disabled", true);
            dayControl.setAttribute("disabled", true);
            hourControl.setAttribute("disabled", true);
            minuteControl.setAttribute("disabled", true);
            beforeAfterControl.setAttribute("disabled", true)
        } else {
            monthControl.removeAttribute("disabled");
            dayControl.removeAttribute("disabled");
            hourControl.removeAttribute("disabled");
            minuteControl.removeAttribute("disabled");
            beforeAfterControl.removeAttribute("disabled")
        }
}

function OperatorChange() {
    var operator = GetOperatorForSlug();
    if (operator[1] == "clear") {
        DisableOkAddButtons();
        _currentValueControl.value = "";
        var expression = GetExpressionForClearValueSlug(),
            attributeName = GetEntityAttributeName(_currentValueControl),
            isMultiSlug = false,
            isReadOnly = true;
        InsertDataSlugCore(_currentValueControl,
            expression[0],
            expression[1],
            isMultiSlug,
            attributeName,
            operator[0],
            operator[1],
            isReadOnly,
            false,
            false)
    } else {
        EnableOkAddButtons();
        var slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
        if (slugBehavior && slugBehavior.get_isDataSlug())
            slugBehavior.CurrentOperatorIsClear() &&
                slugBehavior.DeleteDataSlug();
        slugBehavior &&
            slugBehavior.get_isDataSlug() &&
            UpdateOperator(_currentValueControl, operator[0], operator[1])
    }
    if (operator[1] == "clear" || operator[1] == "=")
        SetIgnoreRangeProperty(false);
    else
        SetIgnoreRangeProperty(true)
}

function SetIgnoreRangeProperty(ignoreRange) {
    switch (_currentDataType) {
    case "Decimal":
    case "Integer":
    case "Float":
    case "Money":
        for (var defaultValueControl = document.getElementById("defaultValueControlSpan"),
            inputControls = defaultValueControl.getElementsByTagName("INPUT"),
            index = 0;
            index < inputControls.length;
            index++) {
            var input = inputControls[index],
                control = Mscrm.FormControlInputBehavior.GetElementBehavior(input);
            if (!IsNull(control) && "set_ignoreRange" in control) {
                control.set_ignoreRange(ignoreRange);
                input.value = ""
            }
        }
        break;
    default:
        break
    }
}

function SetIgnoreCurrencySymbol() {
    if (_currentDataType == "Money" && !_isCreateMode && !IsNull(_currentValueControl))
        if (_currentValueControl.tagName == "INPUT") {
            var moneyCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(_currentValueControl);
            moneyCtrl.set_ignoreCurrencySymbol(true)
        } else
            for (var inputControls = _currentValueControl.getElementsByTagName("INPUT"),
                index = 0,
                index = 0;
                index < inputControls.length;
                index++) {
                var moneyInput = inputControls[index];
                if (Sys.UI.DomElement.containsCssClass(moneyInput, "ms-crm-Money")) {
                    var moneyCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(moneyInput);
                    moneyCtrl.set_ignoreCurrencySymbol(true)
                }
            }
}

function MoveDynamicValueUp() {
    var listControl = document.getElementById("dynamicValueSelector");
    if (listControl.length > 0 && listControl.selectedIndex > 0) {
        var currentOption = listControl.options[listControl.selectedIndex],
            oneAboveOption = listControl.options[listControl.selectedIndex - 1],
            tempValue = oneAboveOption.value,
            tempText = XUI.Html.GetText(oneAboveOption);
        XUI.Html.SetText(oneAboveOption, XUI.Html.GetText(currentOption));
        oneAboveOption.value = currentOption.value;
        XUI.Html.SetText(currentOption, tempText);
        currentOption.value = tempValue;
        listControl.selectedIndex--
    }
}

function MoveDynamicValueDown() {
    var listControl = document.getElementById("dynamicValueSelector");
    if (listControl.options.length > 0 &&
        listControl.selectedIndex >= 0 &&
        listControl.selectedIndex < listControl.options.length - 1) {
        var currentOption = listControl.options[listControl.selectedIndex],
            oneBelowOption = listControl.options[listControl.selectedIndex + 1],
            tempValue = oneBelowOption.value,
            tempText = XUI.Html.GetText(oneBelowOption);
        XUI.Html.SetText(oneBelowOption, XUI.Html.GetText(currentOption));
        oneBelowOption.value = currentOption.value;
        XUI.Html.SetText(currentOption, tempText);
        currentOption.value = tempValue;
        listControl.selectedIndex++
    }
}

function GetValueForTag(tag) {
    var startIndex = window.location.search.indexOf(tag);
    if (startIndex == -1)
        return null;
    var length = tag.length,
        subString = window.location.search.substr(startIndex + length),
        endIndex = subString.indexOf("&");
    if (endIndex == -1)
        return subString;
    else
        return subString.substr(0, endIndex)
}

function SetReadOnlyForm(val) {
    _readOnlyForm = val
}

function GenerateCustomActivityTypeMapping(workflowId, activityName) {
    _isCreateMode = true;
    var command = new RemoteCommand("Workflow", "GetCustomActivityDataTypeInfo");
    command.SetParameter("workflowId", workflowId);
    command.SetParameter("activityName", activityName);
    var oResult = command.Execute();
    oResult.Success &&
        SetAttributeTypeMapping(_currentEntityName, oResult.ReturnValue)
}

function GenerateCustomMessageTypeMapping(workflowId, activityName) {
    _isCreateMode = true;
    var command = new RemoteCommand("Workflow", "GetInvokeSdkMessageDataTypeInfo");
    command.SetParameter("workflowId", workflowId);
    command.SetParameter("activityName", activityName);
    var oResult = command.Execute();
    oResult.Success &&
        SetAttributeTypeMapping(_currentEntityName, oResult.ReturnValue)
}

function GenerateChildInteractiveWorkflowActivityTypeMapping(workflowId, activityName) {
    _isCreateMode = true;
    var command = new RemoteCommand("Workflow", "GetChildInteractiveWorkflowDataTypeInfo");
    command.SetParameter("workflowId", workflowId);
    command.SetParameter("activityName", activityName);
    var oResult = command.Execute();
    oResult.Success &&
        SetAttributeTypeMapping(_currentEntityName, oResult.ReturnValue)
}

function ResetForQueryAdvacedMode() {
    _isCreateMode = true;
    SetAttributeTypeMapping("", null)
}

function GeneratePromptResponseTypeMapping() {
    _isCreateMode = true;
    SetAttributeTypeMapping("", null);
    AddAttributeTypeMapping("promptText", "String");
    AddAttributeTypeMapping("cueText", "String");
    AddAttributeTypeMapping("responseTextDefault0", "Integer");
    AddAttributeTypeMapping("responseTextDefault1", "Float");
    AddAttributeTypeMapping("responseTextDefault2", "String");
    AddAttributeTypeMapping("responseTextDefault4", "DateTime");
    AddAttributeTypeMapping("responseTextDefault3", "DateTime")
}

function GenerateAssignVariableTypeMapping() {
    SetAttributeTypeMapping("", null);
    AddAttributeTypeMapping("variableValueText", "String");
    AddAttributeTypeMapping("variableValueInteger", "Integer");
    AddAttributeTypeMapping("variableValueFloat", "Float");
    AddAttributeTypeMapping("variableValueDateTime", "DateTime");
    AddAttributeTypeMapping("variableValueDateOnly", "DateTime")
}

function GenerateAssignArgumentTypeMapping() {
    SetAttributeTypeMapping("", null);
    AddAttributeTypeMapping("argumentValueDateTime", "DateTime");
    AddAttributeTypeMapping("argumentValueText", "String");
    AddAttributeTypeMapping("argumentValueInteger", "Integer");
    AddAttributeTypeMapping("argumentValueFloat", "Float");
    AddAttributeTypeMapping("argumentValueBoolean", "Boolean");
    AddAttributeTypeMapping("argumentValueDecimal", "Decimal");
    AddAttributeTypeMapping("argumentValueMoney", "Money");
    AddAttributeTypeMapping("argumentValuePicklist", "Picklist")
}

function GenerateHyperLinkTypeMapping() {
    SetAttributeTypeMapping("", null);
    AddAttributeTypeMapping("DisplayText", "String");
    AddAttributeTypeMapping("staticUrlTextbox", "String")
}

function GenerateAttributeTypeMapping(entityName, primaryEntityName, relatedAttributeName, isCreateMode) {
    _isCreateMode = isCreateMode;
    if (entityName == _currentEntityName)
        return;
    _currentEntityName = entityName;
    if (!IsNull(primaryEntityName))
        _primaryEntityName = primaryEntityName;
    if (!IsNull(relatedAttributeName))
        _relatedAttributeName = relatedAttributeName;
    var command = new RemoteCommand("Workflow", "GetAttributeDataTypeInfo");
    command.SetParameter("entityName", entityName);
    var oResult = command.Execute();
    if (oResult.Success)
        SetAttributeTypeMapping(_currentEntityName, oResult.ReturnValue);
    else
        SetAttributeTypeMapping(_currentEntityName, null)
}

function AddAttributeTypeMapping(attributeName, attributeType) {
    _attributeTypeMapping += "&" + attributeName + ";" + attributeType
}

function SetAttributeTypeMapping(entityName, attributeMapping) {
    if (!IsNull(attributeMapping)) {
        _attributeTypeMapping = attributeMapping;
        _currentEntityName = entityName;
        for (var attrList = _attributeTypeMapping.split("&"),
            index = 0,
            index = 0;
            index < attrList.length;
            index++) {
            var attrWithData = attrList[index],
                lst = attrWithData.split(";"),
                attrName = lst[0],
                attrControl = document.getElementById(attrName);
            if (IsNull(attrControl))
                attrControl = document.getElementById(attrName + "Select");
            else if (!IsNull(attrControl) && Sys.UI.DomElement.containsCssClass(attrControl, "ms-crm-Duration"))
                attrControl = document.getElementById(attrName + "Select");
            if (!IsNull(attrControl))
                switch (attrControl.className) {
                case "ms-crm-Email-Body":
                    var emailCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(attrControl);
                    emailCtrl &&
                        emailCtrl.add_focus(CustomAttributeFocusHandler);
                    break;
                case "ms-crm-SelectBox":
                    if (attrControl.tagName.toUpperCase() == "SPAN") {
                        var editableSelect = $find(attrControl.id);
                        Mscrm.CrmDebug.assert(!IsNull(editableSelect), "Can't get EditableSelect control.");
                        editableSelect.add_controlFocus(CustomAttributeFocusHandler)
                    }
                    break;
                case "ms-crm-SelectBox":
                    $addHandler(attrControl, "controlfocus", OnAttributeFocus);
                    break;
                case "ms-crm-RadioButton":
                    var radio = Mscrm.FormControlInputBehavior.GetElementBehavior(attrControl);
                    Mscrm.CrmDebug.assert(!IsNull(radio), "Can't get RadioGroupBehavior.");
                    radio.add_focus(CustomAttributeFocusHandler);
                    (Mscrm.Utilities.isChrome() || Sys.Browser.agent == Sys.Browser.Safari) &&
                        radio.add_change(CustomAttributeFocusHandler);
                    break;
                case "ms-crm-CheckBox":
                    attrControl.contentEditable != "false" &&
                        (Mscrm.Utilities.isChrome() || Sys.Browser.agent == Sys.Browser.Safari) &&
                        $addHandler(attrControl, "change", OnAttributeFocus);
                default:
                    attrControl.contentEditable != "false" &&
                        $addHandler(attrControl, "focus", OnAttributeFocus);
                    break
                }
        }
    } else
        _attributeTypeMapping = ""
}

function CustomAttributeFocusHandler(sender, eventArguments) {
    var eventObj = {};
    eventObj.target = sender.get_element();
    OnAttributeFocus(eventObj)
}

function GetDataTypeForAttribute(attribute) {
    if (IsNull(attribute) || attribute == "")
        return null;
    var startIndex = _attributeTypeMapping.indexOf(attribute + ";"),
        length = attribute.length + 1;
    if (startIndex != 0) {
        startIndex = _attributeTypeMapping.indexOf("&" + attribute + ";");
        length = attribute.length + 2
    }
    if (startIndex < 0)
        return null;
    var subString = _attributeTypeMapping.substr(startIndex + length),
        endIndex = subString.indexOf("&");
    if (endIndex != -1)
        return subString.substr(0, endIndex);
    return subString
}

function CallCustomOnFocusEventHandler(srcElement) {
    try {
        if (srcElement.id.startsWith("Variable") &&
            srcElement.getAttribute("attrOperator") != undefined &&
            srcElement.getAttribute("attrOperator") != null &&
            this.location.pathname.endsWith("fetchquery.aspx")) {
            customOnFocusEventModifyPreview(srcElement);
            if (srcElement.getAttribute("dataType") != "String") {
                var slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
                Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
                slugBehavior.set_isTextSlugInTextBox(false)
            }
        }
    } catch (e) {
    }
}

function GetWrapperControl(innerControl) {
    var wrapper = innerControl;
    while (!IsNull(wrapper) && wrapper.tagName != "Value")
        wrapper = wrapper.parentNode;
    return wrapper
}

function OnAttributeFocus(eventObject) {
    SetDatatypeAttributeListAtFocus(eventObject.target || eventObject.srcElement)
}

function SetDatatypeAttributeListAtFocus(srcElement) {
    var entityNameControl = document.getElementById("selObjects");
    if (IsNull(entityNameControl) || _readOnlyForm)
        return;
    if (_isConditionMode) {
        if (srcElement.id == "DisplayText" || srcElement.id == "staticUrlTextbox") {
            LoadDynamicValuesForAttribute(srcElement, srcElement);
            return
        }
        var wrapper = GetWrapperControl(srcElement);
        if (!IsNull(wrapper) && !IsNull(wrapper.Attribute)) {
            LoadDynamicValuesForAttribute(wrapper, wrapper.Attribute);
            return
        }
        return
    }
    var previousDataType = _currentDataType,
        previousDataControl = _currentValueControl,
        control = srcElement,
        controlId = control.id,
        durationInputControl = null,
        controlIdForDataType = controlId;
    if (Sys.UI.DomElement.containsCssClass(control, "ms-crm-SelectBox") && controlId.indexOf("Select") != -1) {
        controlIdForDataType = controlId.substring(0, controlId.indexOf("Select"));
        durationInputControl = document.getElementById(controlIdForDataType)
    }
    var dataType = GetDataTypeForAttribute(controlIdForDataType);
    if (!IsNull(dataType)) {
        _currentDataType = dataType;
        AddDefaultOperator();
        !_isCreateMode &&
            AddOperatorForDataType(_additionalUpdateOperatorList, dataType);
        var durationControl = document.getElementById("durationControl");
        if (!IsNull(durationControl))
            if (_currentDataType == "DateTime")
                durationControl.style.display = "block";
            else
                durationControl.style.display = "none";
        var selectedEntity = entityNameControl.options[entityNameControl.selectedIndex];
        _currentValueControl = GetValueControlWithSlug($get(controlId));
        if (!Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-CheckBox"))
            _currentValueControl.style.width = "100%";
        _currentValueConditionControl = $find(_currentValueControl.id);
        if (previousDataControl == _currentValueControl) {
            var slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
            Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
            if (slugBehavior.CurrentOperatorIsClear())
                DisableOkButton();
            else
                EnableOkAddButtons();
            return
        }
        var listControl = document.getElementById("dynamicValueSelector");
        listControl.options.length = 0;
        OnEntityChange(selectedEntity.getAttribute("title"), selectedEntity.value, control);
        var defaultValueControl = document.getElementById("defaultValueControlSpan");
        switch (_currentDataType) {
        case "String":
            if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Email-Body"))
                defaultValueControl.innerHTML = '<INPUT class="ms-crm-Text" id="' +
                    _currentValueControl.id +
                    '" style="IME-MODE: auto" tabIndex="1040" maxLength="200" req="0">';
            else
                defaultValueControl.innerHTML = XUI.Html.GetOuterHTML(_currentValueControl);
            break;
        case "Money":
            var currentControl = _currentValueControl;
            while (currentControl != document.documentElement) {
                if (Sys.UI.DomElement.containsCssClass(currentControl, "ms-crm-Money") &&
                    currentControl.tagName == "TABLE")
                    break;
                currentControl = currentControl.parentNode
            }
            if (currentControl == document.documentElement)
                defaultValueControl.innerHTML = XUI.Html.GetOuterHTML(_currentValueControl);
            else
                defaultValueControl.innerHTML = XUI.Html.GetOuterHTML(currentControl);
            SetIgnoreCurrencySymbol();
            break;
        default:
            defaultValueControl.innerHTML = XUI.Html.GetOuterHTML(_currentValueControl);
            break
        }
        resizeDefaultValueAreaIE7(defaultValueControl);
        var _firstChild = XUI.Html.DomUtils.GetFirstChild(defaultValueControl);
        if (!IsNull(_firstChild) &&
            (_firstChild.tagName == "INPUT" || _firstChild.tagName == "TEXTAREA") &&
            Sys.UI.DomElement.containsCssClass(_firstChild, "ms-crm-Input")) {
            Sys.UI.DomElement.addCssClass(_firstChild, "ms-crm-Input-Container");
            _firstChild.style.width = defaultValueControl.offsetWidth + "px";
            defaultValueControl.style.border = "1px solid #C6C6C6"
        } else
            defaultValueControl.style.border = "0";
        _firstChild.style.display = "";
        _firstChild.style.height = "auto";
        CallCustomOnFocusEventHandler(srcElement);
        _firstChild.id += "DefaultValueControl";
        do {
            var defaultValueControlOwner = _firstChild,
                ctrlTagName = _currentValueControl.tagName.toUpperCase();
            if (ctrlTagName == "TEXTAREA") {
                crmCreate(Mscrm.FormInputControl.TextAreaInputBehavior, {}, null, null, defaultValueControlOwner);
                break
            }
            if (ctrlTagName == "DIV" && Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-RadioButton")
            ) {
                crmCreate(Mscrm.FormInputControl.RadioGroupBehavior, {}, null, null, defaultValueControlOwner);
                break
            }
            if (ctrlTagName == "SPAN" && Sys.UI.DomElement.containsCssClass(_currentValueControl, "multipicklist")) {
                crmCreate(Mscrm.MultiPicklist, {}, null, null, defaultValueControlOwner);
                break
            }
            if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-SelectBox"))
                if (ctrlTagName == "SELECT") {
                    crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
            if (ctrlTagName == "INPUT") {
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Email-Address") ||
                    Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-LiveId-Email-Address")) {
                    crmCreate(Mscrm.FormInputControl.EmailAddressInputBehavior,
                        {},
                        null,
                        null,
                        defaultValueControlOwner);
                    break
                }
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Ticker")) {
                    crmCreate(Mscrm.FormInputControl.TickerInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-CheckBox")) {
                    crmCreate(Mscrm.FormInputControl.CheckBoxInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Url")) {
                    crmCreate(Mscrm.FormInputControl.UrlInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Number")) {
                    crmCreate(Mscrm.FormInputControl.NumberInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Text")) {
                    crmCreate(Mscrm.FormInputControl.TextBoxInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
            }
            if (ctrlTagName == "TABLE" || ctrlTagName == "INPUT")
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Money")) {
                    var moneyBehavior = $get(_currentValueControl.id, defaultValueControlOwner);
                    if (moneyBehavior) {
                        moneyBehavior.id += "DefaultValueControl";
                        crmCreate(Mscrm.FormInputControl.MoneyInputBehavior, {}, null, null, moneyBehavior);
                        if (moneyBehavior.style.display == "none") {
                            moneyBehavior.style.display = "inline";
                            moneyBehavior.parentNode.childNodes.length > 1 &&
                                moneyBehavior.parentNode
                                .removeChild(XUI.Html.DomUtils.GetChildElementAt(moneyBehavior.parentNode, 1))
                        }
                        var moneyCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(moneyBehavior);
                        moneyCtrl.set_ignoreCurrencySymbol(true)
                    }
                    crmCreate(Mscrm.FormInputControl.TableMoneyControl, {}, null, null, defaultValueControlOwner);
                    break
                }
            if (ctrlTagName == "TABLE")
                if (Sys.UI.DomElement.containsCssClass(_currentValueControl, "ms-crm-Email-Body")) {
                    crmCreate(Mscrm.FormInputControl.TextBoxInputBehavior, {}, null, null, defaultValueControlOwner);
                    break
                }
        } while (false);
        switch (_currentDataType) {
        case "DateTime":
        case "Integer":
            var shouldCreateDurationControl = false;
            if (_currentDataType == "Integer" &&
                (Sys.UI.DomElement.containsCssClass(control, "ms-crm-SelectBox") && durationInputControl != null)) {
                defaultValueControl.innerHTML = XUI.Html.GetOuterHTML(durationInputControl) +
                    defaultValueControl.innerHTML;
                XUI.Html.DomUtils.GetFirstChild(defaultValueControl).id += "DefaultValueControl";
                shouldCreateDurationControl = true
            }
            if (shouldCreateDurationControl) {
                var inputDuration = XUI.Html.DomUtils.GetFirstChild(defaultValueControl),
                    spanDuration = XUI.Html.DomUtils.GetChildElementAt(defaultValueControl, 1);
                crmCreate(Mscrm.EditableSelectControl, {}, null, null, spanDuration);
                crmCreate(Mscrm.FormInputControl.Duration, {}, null, null, inputDuration)
            } else
                _currentDataType == "DateTime" &&
                    Mscrm.FormInputControl.DateTimeBehavior
                    .registerDateTimeComponents(defaultValueControlOwner.parentNode);
            break;
        case "Boolean":
            var className = _firstChild.className;
            if (!IsNull(className))
                className = className.replace(" ", "");
            switch (className) {
            case "ms-crm-CheckBox":
                break;
            case "ms-crm-SelectBox":
                var controlAttributes = XUI.Html.DomUtils.GetFirstChild(defaultValueControl).attributes;
                !IsNull(controlAttributes.getNamedItem("name")) &&
                    controlAttributes.removeNamedItem("name");
                break;
            case "ms-crm-RadioButton":
                var firstChild = XUI.Html.DomUtils.GetFirstChild(defaultValueControl),
                    inputControls = firstChild.getElementsByTagName("INPUT"),
                    inputLabels = firstChild.getElementsByTagName("LABEL");
                try {
                    $removeHandler(firstChild, "focus", OnAttributeFocus)
                } catch (e) {
                }
                for (var index = 0,
                    length = inputControls.length;
                    index < length;
                    index++) {
                    var radioInput = inputControls[index];
                    if (Sys.UI.DomElement.containsCssClass(radioInput, "ms-crm-RadioButton")) {
                        radioInput.id = "rad_" + firstChild.id + (index + 1);
                        inputLabels[index].attributes["for"].value = radioInput.id
                    }
                }
                break
            }
            break;
        case "Lookup":
        case "User":
        case "Owner":
        case "Customer":
        case "PartyList":
            var slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
            Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
            if (slugBehavior.get_isTextSlugInTextBox()) {
                var fieldTableLookup = $find(_currentValueControl.id),
                    fieldValueLookup = fieldTableLookup.get_innerControl(),
                    imgLookupId = fieldValueLookup.get_element().id,
                    lookupImg = $get(imgLookupId, defaultValueControl);
                if (!IsNull(lookupImg))
                    lookupImg.id += "DefaultValueControl";
                var currentControl = _currentValueControl.parentNode;
                while (currentControl != document.documentElement) {
                    if (!IsNull(currentControl.id) && currentControl.id.substr(currentControl.id.length - 2) == "_d")
                        break;
                    currentControl = currentControl.parentNode
                }
                var newParentId = currentControl.id.slice(0, -2) + "DefaultValueControl_d";
                defaultValueControl
                    .innerHTML = "<table cellspacing='0' cellpadding='0' style='width:100%;'><tbody><tr><td id=" +
                    newParentId +
                    ">" +
                    defaultValueControl.innerHTML +
                    "</td></tr></tbody></table>";
                var lookupBehaviorHolder = $get(imgLookupId + "DefaultValueControl", defaultValueControl);
                lookupBehaviorHolder &&
                    crmCreate(Object.getType(fieldValueLookup), {}, null, null, lookupBehaviorHolder)
            }
            break;
        case "Picklist":
            var controlAttributes = XUI.Html.DomUtils.GetFirstChild(defaultValueControl).attributes;
            !IsNull(controlAttributes.getNamedItem("name")) &&
                controlAttributes.removeNamedItem("name");
            break
        }
        ResetTabIndexRecursive(defaultValueControl);
        ResetDefaultValue(defaultValueControl);
        EnableOkAddButtons();
        var slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
        if (slugBehavior && slugBehavior.get_isDataSlug() == true)
            if (slugBehavior.CurrentOperatorIsClear()) {
                setOperatorAsClearOperator();
                DisableOkButton()
            }
    }
}

function InsertCustomizedDataSlug(slugValue, slugText) {
    if (!IsNull(slugValue))
        slugValue = '<slug type="dynamic" value="' + slugValue + '"/>';
    else {
        slugValue = "";
        slugText = ""
    }
    if (IsNull(slugText))
        slugText = "";
    if (_currentValueControl != null &&
        _currentValueControl.id != "DisplayText" &&
        _currentValueControl.id != "staticUrlTextbox") {
        var expressions = GetDurationExpression();
        if (!IsNull(expressions) && !IsNull(expressions[0])) {
            slugValue = slugValue + expressions[0];
            slugText = expressions[1] + slugText
        }
    }
    if (!IsNull(slugValue)) {
        slugText = "{" + slugText + "}";
        slugValue = '<slugbody><slugelement type="slug">' + slugValue + "</slugelement></slugbody>";
        if (_currentValueControl != null &&
            _currentValueControl.id != "DisplayText" &&
            _currentValueControl.id != "staticUrlTextbox") {
            InsertDataSlug(slugValue, slugText);
            _currentValueConditionControl.AttachDataSlugEvents()
        } else
            InsertDataSlugInDialog(slugValue, slugText)
    }
}

function InsertDataSlugInDialog(slugValue, slugText) {
    var controlTextValue = window.document.getElementById("DisplayText").value;
    if (!IsNull(_currentValueControl)) {
        var element = _currentValueControl,
            slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
        if (slugBehavior) {
            var entityNameControl = document.getElementById("selObjects");
            if (entityNameControl != null) {
                slugText = XUI.Html.GetText(entityNameControl.options[entityNameControl
                        .selectedIndex]) +
                    "-" +
                    slugText;
                InsertDataSlugCore(element, slugValue, slugText, true, null, null, null, true, false, false);
                slugText = controlTextValue + slugText;
                XUI.Html.SetText(element, slugText);
                element.setAttribute("defaultText", slugText)
            }
        }
    }
}

function ConstructSlugCoreParameters(tagName, hyperlinkXmlDoc) {
    var slugElement = "",
        slugText = "";
    if (tagName == "DisplayText") {
        var xmlSlugValues = [];
        xmlSlugValues = GetSlugElements(hyperlinkXmlDoc, 0);
        if (xmlSlugValues != null) {
            slugElement = xmlSlugValues[0];
            slugText = xmlSlugValues[1]
        }
    } else if (hyperlinkXmlDoc.getElementsByTagName("slug").length == 2) {
        var xmlSlugValues = [];
        xmlSlugValues = GetSlugElements(hyperlinkXmlDoc, 1);
        if (xmlSlugValues != null) {
            slugElement = xmlSlugValues[0];
            slugText = xmlSlugValues[1]
        }
    } else {
        var xmlSlugValues = [];
        xmlSlugValues = GetSlugElements(hyperlinkXmlDoc, 0);
        if (xmlSlugValues != null) {
            slugElement = xmlSlugValues[0];
            slugText = xmlSlugValues[1]
        }
    }
    var expressionSlug = [];
    expressionSlug[0] = '<slug type="dynamic"  value="' + slugElement + '"/>';
    expressionSlug[1] = slugText;
    var expressionAndDefaultValueSlug = [];
    expressionAndDefaultValueSlug[0] = '<slugelement type="slug">' + expressionSlug[0] + "</slugelement>";
    expressionAndDefaultValueSlug[1] = "{" + expressionSlug[1] + "}";
    return expressionAndDefaultValueSlug
}

function GetSlugElements(hyperlinkXmlDoc, index) {
    var slugValues = [];
    slugValues[0] = "";
    slugValues[1] = "";
    var slugElements = hyperlinkXmlDoc.getElementsByTagName("slug");
    if (slugElements.length != 0)
        if (slugElements[index].attributes.length == 2) {
            slugValues[0] = slugElements[index].attributes[1].nodeValue;
            var slugTextElement = hyperlinkXmlDoc.getElementsByTagName("slugtext");
            if (slugTextElement.length != 0)
                slugValues[1] = XUI.Xml.GetText(slugTextElement[index])
                    ? XUI.Xml.GetText(slugTextElement[index])
                    : slugTextElement[index].text
        }
    return slugValues
}

function ConstructOperatorEqualTo() {
    var operator = [];
    operator[1] = "=";
    operator[0] = '<slugelement type="operator" value="="/>';
    return operator
}

function InsertXMLTags(_currentValueControl, XMLTag) {
    var slugBehavior = Mscrm.FormUtility.getSlugBehavior(_currentValueControl);
    Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
    if (slugBehavior.get_isDataSlug() == true)
        UpdateControlInnerHtml(_currentValueControl, XMLTag);
    else if (IsEmailBody(_currentValueControl))
        InsertTextInRTE(XMLTag);
    else {
        _currentValueControl.focus();
        if (document.selection && document.selection.createRange) {
            var sel = document.selection.createRange();
            sel.text = CrmEncodeDecode.CrmXmlDecode(XMLTag)
        } else if (_currentValueControl.selectionStart || _currentValueControl.selectionStart == "0") {
            var startPos = _currentValueControl.selectionStart,
                endPos = _currentValueControl.selectionEnd,
                oldValue = _currentValueControl.value;
            _currentValueControl.value = oldValue.substring(0, startPos) +
                CrmEncodeDecode.CrmXmlDecode(XMLTag) +
                oldValue.substring(endPos, oldValue.length)
        } else
            _currentValueControl.value += CrmEncodeDecode.CrmXmlDecode(XMLTag)
    }
}

function CallInsertDataSlugCore(hyperlinkXml, _currentValueControl, tagName, beginTag) {
    var hyperlinkXmlDoc = XUI.Xml.LoadXml(hyperlinkXml),
        slugBehavior = _currentValueControl ? Mscrm.FormUtility.getSlugBehavior(_currentValueControl) : null,
        elementNodes = hyperlinkXmlDoc.getElementsByTagName(tagName);
    if (!IsNull(_currentValueControl) && slugBehavior)
        if (elementNodes.length == 0) {
            var expressionAndDefaultValueSlug = [];
            expressionAndDefaultValueSlug = ConstructSlugCoreParameters(tagName, hyperlinkXmlDoc);
            var operator = [];
            operator = ConstructOperatorEqualTo();
            var attributeName = _currentValueControl.id,
                isMultiSlug = true,
                isReadOnly = false;
            UpdateControlInnerHtml(_currentValueControl, beginTag);
            InsertDataSlugCore(_currentValueControl,
                expressionAndDefaultValueSlug[0],
                expressionAndDefaultValueSlug[1],
                isMultiSlug,
                attributeName,
                operator[0],
                operator[1],
                isReadOnly,
                false,
                true)
        } else if (slugBehavior.get_isDataSlug() == true)
            UpdateControlInnerHtml(_currentValueControl, beginTag + XUI.Xml.GetText(elementNodes[0]));
        else
            InsertXMLTags(_currentValueControl, beginTag + XUI.Xml.GetText(elementNodes[0]))
}

function SetCaretPosition(ele, pos) {
    if (ele.setSelectionRange) {
        ele.focus();
        ele.setSelectionRange(pos, pos)
    } else {
        var range = ele.createTextRange();
        range.move("character", pos);
        range.select()
    }
}

function InsertHyperLinkSlug(hyperlinkXml, elementId) {
    _currentValueControl = document.getElementById(elementId);
    var xmlDoc = XUI.Xml.LoadXml(hyperlinkXml),
        oNode = XUI.Xml.SelectSingleNode(xmlDoc, "//slug", null);
    if (IsNull(oNode)) {
        InsertXMLTags(_currentValueControl,
            "<hyperlink><name>" +
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "//DisplayText", null)) +
            "</name><value>" +
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "//staticUrlTextbox", null)) +
            "</value></hyperlink>");
        return
    }
    var hyperlinkNameTag = "<hyperlink><name>";
    CallInsertDataSlugCore(hyperlinkXml, _currentValueControl, "DisplayText", hyperlinkNameTag);
    var nameEndTag = "</name><value>";
    CallInsertDataSlugCore(hyperlinkXml, _currentValueControl, "staticUrlTextbox", nameEndTag);
    var hyperlinkEndTag = "</value></hyperlink>";
    InsertXMLTags(_currentValueControl, hyperlinkEndTag)
}

function InsertTextInRTE(sHtmlToInsert) {
    var _oIFrame = $get("descriptionIFrame");
    if (!isNullOrEmptyString(_oIFrame)) {
        var _oEmailBody = _oIFrame.contentWindow;
        if (_oEmailBody.document.body != null) {
            var str = _oEmailBody.document.body.innerHTML;
            str += CrmEncodeDecode.CrmHtmlEncode(sHtmlToInsert);
            _oEmailBody.document.body.innerHTML = str
        }
    }
}

function ResetTabIndexRecursive(control) {
    if (control.nodeType == XUI.DomUtilities.NodeType.Element && control.tagName.toUpperCase() != "OPTION") {
        control.tabIndex = -1;
        XUI.Html.DomUtils.ForEachChild(control,
            function(childNode) {
                ResetTabIndexRecursive(childNode)
            })
    }
}

function GetValueControlWithSlug(ctrl) {
    var currentCtrl = ctrl;
    while (ctrl != null && !Mscrm.FormUtility.getSlugBehavior(ctrl))
        ctrl = ctrl.parentNode;
    if (ctrl == null)
        return currentCtrl;
    return ctrl
}

function AddDefaultOperator() {
    var operatorControl = document.getElementById("operatorSelector");
    operatorControl.options.length = 0;
    AddOperator(operatorControl, "=");
    operatorControl.setAttribute("disabled", true)
}

function AddOperator(operatorControl, optionValue) {
    var anOption = document.createElement("OPTION");
    Mscrm.Utilities.addOption(anOption, operatorControl, operatorControl.options.length);
    anOption.value = optionValue;
    XUI.Html.SetText(anOption, getOperatorTextForValue(optionValue))
}

function getOperatorTextForValue(operatorValue) {
    if (operatorValue == "=")
        return LOCID_DE_OPERATOR_EQUAL;
    if (operatorValue == "+=")
        if (_currentDataType == "String")
            return LOCID_DE_OPERATOR_APPENDWITH;
        else
            return LOCID_DE_OPERATOR_INCREMENTBY;
    if (operatorValue == "-=")
        return LOCID_DE_OPERATOR_DECREMENTBY;
    if (operatorValue == "*=")
        return LOCID_DE_OPERATOR_MULTIPLYBY;
    if (operatorValue == "clear")
        return LOCID_DE_OPERATOR_CLEAR
}

function AddOperatorForDataType(additionalOperators, dataType) {
    var operatorControl = document.getElementById("operatorSelector"),
        startIndex = additionalOperators.indexOf(dataType + ":");
    if (startIndex < 0) {
        operatorControl.setAttribute("disabled", true);
        return
    } else
        operatorControl.removeAttribute("disabled");
    for (var length = dataType.length + 1,
        subString = additionalOperators.substr(startIndex + length),
        endIndex = subString.indexOf(";"),
        operators = subString.substr(0, endIndex),
        operatorList = operators.split(","),
        index = 0,
        index = 0;
        index < operatorList.length;
        index++) {
        var operator = operatorList[index];
        AddOperator(operatorControl, operator)
    }
}

function InsertSlug() {
    var slugBehavior = _currentValueControl ? Mscrm.FormUtility.getSlugBehavior(_currentValueControl) : null;
    if (!IsNull(_currentValueControl) && slugBehavior) {
        var expression = GetExpressionAndDefaultValueForSlug();
        if (expression[0] == undefined)
            return;
        var operator = GetOperatorForSlug(),
            attributeName = GetEntityAttributeName(_currentValueControl),
            isMultiSlug = IsMultiSlug(_currentDataType, _currentValueControl),
            isReadOnly = IsReadOnly(_currentDataType);
        InsertDataSlugCore(_currentValueControl,
            expression[0],
            expression[1],
            isMultiSlug,
            attributeName,
            operator[0],
            operator[1],
            isReadOnly,
            false,
            false)
    }
}

function GetEntityAttributeName(control) {
    var ajaxComponent = GetControlOrBehavior(control);
    if (!IsNull(ajaxComponent) && "get_innerControlId" in ajaxComponent)
        return ajaxComponent.get_innerControlId();
    if (control.className == "ms-crm-SelectBox")
        return control.id.substring(0, control.id.indexOf("Select"));
    return control.id
}

function GetSelfPropertyExpression(operator) {
    if (operator == "=" || operator == "clear")
        return null;
    var entityNameValue = GetFullEntityName();
    if (entityNameValue == null) {
        entityNameValue = _currentEntityName;
        if (!IsNull(_relatedAttributeName) && _relatedAttributeName != "")
            entityNameValue += "." + _relatedAttributeName
    }
    var attributeName = GetEntityAttributeName(_currentValueControl),
        expression = '<slugelement type="slug"><slug type="dynamic" value="' +
            entityNameValue +
            "." +
            attributeName +
            '"/></slugelement>';
    return expression
}

function GetFullEntityName() {
    var currentEntityKey = document.getElementById("hidCurrentEntityPath");
    if (!IsNull(currentEntityKey))
        return currentEntityKey.value;
    return null
}

function GetUpdatedOperator(operator) {
    var returnValue = [];
    returnValue[1] = operator;
    var operatorValue = "=";
    if (operator == "=")
        operatorValue = "=";
    if (operator == "+=")
        operatorValue = "+";
    if (operator == "-=")
        operatorValue = "-";
    if (operator == "*=")
        operatorValue = "*";
    if (operator == "/=")
        operatorValue = "/";
    if (operator == "clear")
        operatorValue = "clear";
    var selfPropertyExpression = GetSelfPropertyExpression(operatorValue);
    returnValue[0] = '<slugelement type="operator" value="' + operatorValue + '"/>';
    if (!IsNull(selfPropertyExpression))
        returnValue[0] += selfPropertyExpression;
    return returnValue
}

function GetExpressionForClearValueSlug() {
    var returnValue = [];
    returnValue[0] = '<slugelement type="slug"><slug type="dynamic" value="null"/></slugelement>';
    returnValue[1] = "{" + LOCID_DE_OPERATOR_CLEAR + "}";
    return returnValue
}

function GetExpressionAndDefaultValueForSlug() {
    var returnValue = [],
        expressionValue = GetExpressionForSlug(),
        defaultValue = GetDefaultValueForSlug();
    if (expressionValue[0] != undefined || defaultValue[0] != undefined) {
        returnValue[0] = '<slugelement type="slug">';
        returnValue[1] = "{";
        if (expressionValue[0] != undefined) {
            returnValue[0] += expressionValue[0];
            returnValue[1] += expressionValue[1]
        }
        if (defaultValue[0] != undefined) {
            returnValue[0] += defaultValue[0];
            if (returnValue[1] == "{")
                returnValue[1] += defaultValue[1];
            else
                returnValue[1] += ";" + defaultValue[1]
        }
        returnValue[0] += "</slugelement>";
        returnValue[1] += "}"
    }
    return returnValue
}

function GetExpressionForSlug() {
    var returnValue = [],
        listControl = document.getElementById("dynamicValueSelector");
    if (listControl.options.length <= 0)
        return returnValue;
    for (var durationExpression = GetDurationExpression(),
        index = 0,
        index = 0;
        index < listControl.options.length;
        index++) {
        var option = listControl.options[index];
        if (index == 0) {
            returnValue[1] = XUI.Html.GetText(option);
            returnValue[0] = '<slug type="dynamic" value="' + option.value + '"/>'
        } else {
            returnValue[1] += ";" + XUI.Html.GetText(option);
            returnValue[0] += '<slug type="dynamic" value="' + option.value + '"/>'
        }
    }
    if (durationExpression[0] != undefined) {
        returnValue[0] = durationExpression[0] + returnValue[0];
        returnValue[1] = durationExpression[1] + returnValue[1]
    }
    return returnValue
}

function GetDataXmlForControl(control) {
    var ctrl = GetControlOrBehavior(control);
    if (!IsNull(ctrl)) {
        if ("get_dataXml" in ctrl)
            return ctrl.get_dataXml();
        if ("get_innerDataXml" in ctrl)
            return ctrl.get_innerDataXml()
    }
    return ""
}

function GetFirstChildWithDataValue(control) {
    var ctrl = GetControlOrBehavior(control);
    if (!ctrl || !("get_dataValue" in ctrl))
        if (XUI.DomUtilities.HasChildElements(control))
            return GetFirstChildWithDataValue(XUI.Html.DomUtils.GetFirstChild(control));
        else
            return null;
    return control
}

function GetDefaultValueForSlug() {
    var returnValue = [],
        defaultValueControl = XUI.Html.DomUtils.GetFirstChild(document.getElementById("defaultValueControlSpan")),
        ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(defaultValueControl);
    if (IsNull(ctrl))
        ctrl = $find(defaultValueControl.id);
    if (defaultValueControl.tagName == "TABLE" &&
        (IsNull(ctrl) || !("get_dataValue" in ctrl)) &&
        XUI.DomUtilities.HasChildElements(defaultValueControl)) {
        var childLookupValueControl = GetFirstChildWithDataValue(defaultValueControl);
        if (childLookupValueControl != null) {
            defaultValueControl = childLookupValueControl;
            ctrl = GetControlOrBehavior(defaultValueControl)
        }
    }
    if (ctrl && !IsNull(ctrl.get_dataValue())) {
        returnValue[0] = '<slug type="defaultvalue">' + GetDataXmlForControl(defaultValueControl) + "</slug>";
        if (_currentDataType == "Boolean") {
            var className = defaultValueControl.className;
            if (!IsNull(className))
                className = className.replace(" ", "");
            switch (className) {
            case "ms-crm-CheckBox":
                returnValue[1] = defaultValueControl.checked;
                break;
            case "ms-crm-SelectBox":
                if (defaultValueControl.selectedIndex >= 0)
                    returnValue[1] = XUI.Html.GetText(defaultValueControl.options[defaultValueControl.selectedIndex]);
                break;
            case "ms-crm-RadioButton":
                var inputControls = XUI.Html.DomUtils.GetChildElementAt(defaultValueControl, 2)
                        .getElementsByTagName("INPUT"),
                    inputLabels = XUI.Html.DomUtils.GetChildElementAt(defaultValueControl, 2)
                        .getElementsByTagName("LABEL"),
                    valueToMatch = "0";
                if (ctrl.get_dataValue() == true)
                    valueToMatch = "1";
                for (var index = 0; index < inputControls.length; index++)
                    if (Sys.UI.DomElement.containsCssClass(inputControls[index], "ms-crm-RadioButton") &&
                        inputControls[index].value == valueToMatch) {
                        returnValue[1] = XUI.Html.GetText(inputLabels[index]);
                        break
                    }
                break
            }
        } else if (_currentDataType == "Picklist" || _currentDataType == "Status" || _currentDataType == "State") {
            var selectedText = XUI.Html.GetText(defaultValueControl.options[defaultValueControl.selectedIndex]);
            if (selectedText != "")
                returnValue[1] = selectedText;
            else
                returnValue[1] = ""
        } else if (_currentDataType == "DateTime") {
            var dataValue = ctrl.get_dataValue();
            returnValue[1] = Mscrm.DateTimeUtility.formatDate(dataValue) + " " + timeToString(dataValue)
        } else if (_currentDataType == "PartyList")
            for (var innerParentControl = XUI.Html.DomUtils
                         .GetFirstChild(XUI.Html.DomUtils
                             .GetFirstChild(XUI.Html.DomUtils
                                 .GetFirstChild(XUI.Html.DomUtils
                                     .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(defaultValueControl))))),
                index = 0,
                index = 0;
                index < innerParentControl.childNodes.length;
                index++)
                if (index == 0)
                    returnValue[1] = XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(innerParentControl));
                else
                    returnValue[1] += "; " +
                        XUI.Html.GetText(XUI.Html.DomUtils.GetChildElementAt(innerParentControl, index));
        else if (_currentDataType == "Integer") {
            if (!IsNull(defaultValueControl.tagName)) {
                var val = ctrl.get_dataValue();
                switch (defaultValueControl.tagName.toUpperCase()) {
                case "SELECT":
                    for (var index = 0; index < defaultValueControl.options.length; index++)
                        if (defaultValueControl.options[index].value == val) {
                            returnValue[1] = XUI.Html.GetText(defaultValueControl.options[index]);
                            break
                        }
                    break;
                case "INPUT":
                    if (Sys.UI.DomElement.containsCssClass(defaultValueControl, "ms-crm-Duration")) {
                        var controlId = defaultValueControl.id,
                            sanitizedControlId = controlId.substring(0, controlId.indexOf("DefaultValueControl")) +
                                "SelectDefaultValueControl",
                            selectControl = $find(sanitizedControlId);
                        if (!IsNull(selectControl))
                            returnValue[1] = selectControl.get_returnValueProperty()
                    } else if (XUI.Html.GetText(defaultValueControl) != "")
                        returnValue[1] = XUI.Html.GetText(defaultValueControl);
                    else
                        returnValue[1] = defaultValueControl.value;
                    break
                }
            }
        } else if (_currentDataType == "Money") {
            var moneyTable = XUI.Html.DomUtils.GetFirstChild(defaultValueControl),
                firstRowCells = moneyTable.rows[0].cells,
                inputs = firstRowCells[1].getElementsByTagName("INPUT");
            returnValue[1] = inputs[0].value
        } else if (defaultValueControl.nodeName.toUpperCase() != "TEXTAREA" &&
            XUI.Html.GetText(defaultValueControl) != "")
            returnValue[1] = XUI.Html.GetText(defaultValueControl);
        else
            returnValue[1] = defaultValueControl.value
    }
    return returnValue
}

function ResetDefaultValue(defaultValueControl) {
    defaultValueControl = XUI.Html.DomUtils.GetFirstChild(defaultValueControl);
    var ctrl = GetControlOrBehavior(defaultValueControl);
    if (defaultValueControl.tagName == "TABLE" &&
        (IsNull(ctrl) || !("get_dataValue" in ctrl)) &&
        XUI.DomUtilities.HasChildElements(defaultValueControl)) {
        var childLookupValueControl = GetFirstChildWithDataValue(defaultValueControl);
        if (childLookupValueControl != null) {
            defaultValueControl = childLookupValueControl;
            ctrl = GetControlOrBehavior(defaultValueControl)
        }
    }
    if (!IsNull(ctrl) && !IsNull(ctrl.get_dataValue()))
        ctrl.set_dataValue(null);
    else if (Sys.UI.DomElement.containsCssClass(defaultValueControl, "ms-crm-DateTime")) {
        var dateControl = XUI.Html.DomUtils.GetFirstChild(defaultValueControl.rows[0].cells[0]);
        if (!IsNull(dateControl) && dateControl.id == "DateInput") {
            dateControl.value = "";
            dateControl.setAttribute("returnValue", "")
        }
    }
}

function GetDurationExpression() {
    var returnValue = [];
    if (_currentDataType != "DateTime")
        return returnValue;
    var month = GetSelectedOptionForControlId("monthSelector"),
        day = GetSelectedOptionForControlId("daySelector"),
        hour = GetSelectedOptionForControlId("hourSelector"),
        minute = GetSelectedOptionForControlId("minuteSelector"),
        beforeAfter = GetSelectedOptionForControlId("beforeAfterSelector");
    if (XUI.Html.GetText(month) == "0" &&
        XUI.Html.GetText(day) == "0" &&
        XUI.Html.GetText(hour) == "0" &&
        XUI.Html.GetText(minute) == "0")
        return returnValue;
    returnValue[0] = '<slug type="duration" value="' +
        XUI.Html.GetText(month) +
        ";" +
        XUI.Html.GetText(day) +
        ";" +
        XUI.Html.GetText(hour) +
        ";" +
        XUI.Html.GetText(minute) +
        ";" +
        beforeAfter.value +
        '"/>';
    returnValue[1] = null;
    if (XUI.Html.GetText(month) != "0")
        returnValue[1] = month.getAttribute("desc");
    if (XUI.Html.GetText(day) != "0")
        if (IsNull(returnValue[1]))
            returnValue[1] = day.getAttribute("desc");
        else
            returnValue[1] += ", " + day.getAttribute("desc");
    if (XUI.Html.GetText(hour) != "0")
        if (IsNull(returnValue[1]))
            returnValue[1] = hour.getAttribute("desc");
        else
            returnValue[1] += ", " + hour.getAttribute("desc");
    if (XUI.Html.GetText(minute) != "0")
        if (IsNull(returnValue[1]))
            returnValue[1] = minute.getAttribute("desc");
        else
            returnValue[1] += ", " + minute.getAttribute("desc");
    returnValue[1] += " " + XUI.Html.GetText(beforeAfter) + " ";
    return returnValue
}

function GetSelectedOptionForControlId(id) {
    var control = document.getElementById(id);
    return control.options[control.selectedIndex]
}

function GetOperatorForSlug() {
    var returnValue = [],
        operatorControl = document.getElementById("operatorSelector"),
        operator = operatorControl.options[operatorControl.selectedIndex].value;
    returnValue = GetUpdatedOperator(operator);
    return returnValue
}

function PopulateSlugControls(slugInfo) {
    PopulateSlugControlsWithCallback(slugInfo, null, null)
}

function PopulateSlugControlsWithCallback(slugInfo, eventName, eventHandler) {
    for (var slugInfoList = slugInfo.split("<;>"),
        index = 0,
        index = 0;
        index < slugInfoList.length;
        index++) {
        var info = slugInfoList[index],
            infoList = info.split("<:>");
        PopulateControl(infoList[0], infoList[1], eventName, eventHandler)
    }
}

function PopulateControl(controlId, valueXml, eventName, eventHandler) {
    var control;
    if (isNullOrEmptyString(controlId))
        control = null;
    else
        control = GetValueControlWithSlug(window.document.getElementById(controlId));
    var dataType = GetDataTypeForAttribute(controlId),
        isMultiSlug = IsMultiSlug(dataType, control),
        isReadOnly = IsReadOnly(dataType);
    if (!IsNull(control) && Sys.UI.DomElement.containsCssClass(control, "ms-crm-Duration"))
        control = document.getElementById(control.id + "Select");
    var slugBehavior = control ? Mscrm.FormUtility.getSlugBehavior(control) : null;
    if (!IsNull(control) && slugBehavior) {
        if (!(IsNull(eventName) || IsNull(eventHandler)))
            switch (eventName) {
            case "deleteslugbody":
            case "deleteSlugBodyEvent":
                slugBehavior.add_deleteSlugBody(eventHandler);
                break;
            case "dataslugchange":
            case "dataSlugChangeEvent":
                slugBehavior.add_changeDataSlug(eventHandler);
                break;
            default:
                $addHandler(control, eventName, eventHandler)
            }
        var parsedInfo = ParseOperatorAndSlugInfo(valueXml),
            dataXml = "<data>" + parsedInfo[2] + "</data>",
            xmlDoc = XUI.Xml.LoadXml(dataXml);
        if (IsEmailBody(control)) {
            slugBehavior.set_isMultiSlug(true);
            slugBehavior.set_isReadOnly(isReadOnly);
            slugBehavior.set_isDataSlug(true);
            slugBehavior.set_attributeName(controlId);
            PopulateEmailBody(control, xmlDoc, dataType);
            return
        }
        var index = 0,
            xmlDocFirstChild = XUI.Xml.DomUtils.GetFirstChild(xmlDoc);
        XUI.Html.DomUtils.ForEachChild(xmlDocFirstChild,
            function(childNode) {
                if (IsNull(childNode.attributes))
                    return true;
                var slugInfo = GetSlugInfo(childNode, dataType);
                if (IsNull(slugInfo[0]))
                    UpdateControlInnerHtml(control, CrmEncodeDecode.CrmXmlDecode(slugInfo[1]));
                else {
                    if (parsedInfo[1] == "clear") {
                        isMultiSlug = false;
                        isReadOnly = true
                    }
                    _currentDataType = dataType;
                    InsertDataSlugCore(control,
                        slugInfo[0],
                        slugInfo[1],
                        isMultiSlug,
                        controlId,
                        parsedInfo[0],
                        parsedInfo[1],
                        isReadOnly,
                        true,
                        false)
                }
            })
    }
}

function PopulateEmailBody(control, xmlDoc, dataType) {
    var slugBehavior = Mscrm.FormUtility.getSlugBehavior(control);
    Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "Can't get SlugBehavior.");
    var index = 0,
        html = "";
    slugBehavior.set_isDataSlug(true);
    var xmlDocFirstChild = XUI.Xml.DomUtils.GetFirstChild(xmlDoc);
    XUI.Html.DomUtils.ForEachChild(xmlDocFirstChild,
        function(childNode) {
            if (IsNull(childNode.attributes))
                return true;
            var slugInfo = GetSlugInfo(childNode, dataType);
            if (IsNull(slugInfo[0]))
                html += CrmEncodeDecode.CrmXmlDecode(slugInfo[1]);
            else {
                html += '<SPAN class="ms-crm-DataSlug" style="DISPLAY: inline" tabIndex="-1" value=\'';
                html += slugInfo[0] + "'";
                html += ' title="' + CrmEncodeDecode.CrmXmlDecode(slugInfo[1]) + '">';
                html += CrmEncodeDecode.CrmXmlDecode(slugInfo[1]);
                html += "</SPAN>"
            }
        });
    var emailCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
    if (IsNull(emailCtrl.InsertValue(html))) {
        var emailBody = document.getElementById("hidEmailBodyContent");
        emailBody.value = html
    }
}

function GetSlugInfo(xmlNode, dataType) {
    var returnValue = [],
        attrType = xmlNode.attributes[0];
    if (attrType.nodeName == "type" && attrType.nodeValue == "primitive") {
        returnValue[0] = null;
        var attrNode = xmlNode.attributes[1].nodeName,
            xmlString = XUI.Xml.XMLSerializer.serializeToString(xmlNode),
            startIndex = xmlString.indexOf(attrNode) + attrNode.length + '="'.length,
            endIndex = xmlString.indexOf('"/>', startIndex);
        if (endIndex == -1)
            endIndex = xmlString.indexOf('" />', startIndex + 1);
        var textString = xmlString.substr(startIndex, endIndex - startIndex);
        returnValue[1] = CrmEncodeDecode.CrmHtmlDecode(textString)
    } else if (attrType.nodeName == "type" && attrType.nodeValue == "slug") {
        returnValue[0] = XUI.Xml.XMLSerializer.serializeToString(xmlNode);
        returnValue[1] = GetTextForNode(xmlNode, dataType)
    }
    return returnValue
}

function ParseOperatorAndSlugInfo(valueXml) {
    for (var dataXml = "<data>" + valueXml + "</data>",
        xmlDoc = XUI.Xml.LoadXml(dataXml),
        operatorText = null,
        operatorValue = null,
        slugValue = null,
        slugBody = XUI.Xml.DomUtils.GetFirstChild(xmlDoc),
        index = 0,
        childNode,
        index = 0;
        index < slugBody.childNodes.length;
        index++) {
        childNode = XUI.Html.DomUtils.GetChildElementAt(slugBody, index);
        var attrType = childNode.attributes[0];
        if (attrType.nodeName == "type" && attrType.nodeValue == "operator") {
            operatorText = childNode.attributes[1].nodeValue;
            operatorValue = XUI.Xml.XMLSerializer.serializeToString(childNode);
            break
        }
    }
    if (operatorText != "=" && operatorText != "clear") {
        operatorText += "=";
        operatorValue += XUI.Xml.XMLSerializer.serializeToString(XUI.Html.DomUtils.GetChildElementAt(slugBody, ++index))
    }
    for (var newIndex = 0,
        newIndex = index + 1;
        newIndex < slugBody.childNodes.length;
        newIndex++) {
        childNode = XUI.Html.DomUtils.GetChildElementAt(slugBody, newIndex);
        if (IsNull(slugValue))
            slugValue = XUI.Xml.XMLSerializer.serializeToString(childNode);
        else
            slugValue += XUI.Xml.XMLSerializer.serializeToString(childNode)
    }
    var returnValue = [];
    returnValue[0] = operatorValue;
    returnValue[1] = operatorText;
    returnValue[2] = slugValue;
    return returnValue
}

function GetTextForNode(xmlNode, dataType) {
    var outputText = null,
        attrType = xmlNode.attributes[0];
    if (!(attrType.nodeName == "type" && attrType.nodeValue == "slug"))
        return null;
    for (var index = 0,
        durationText = null,
        index = 0;
        index < xmlNode.childNodes.length;
        index++) {
        var childNode = XUI.Html.DomUtils.GetChildElementAt(xmlNode, index),
            nodeType = childNode.attributes[0];
        if (nodeType.nodeName == "type" && nodeType.nodeValue == "dynamic") {
            var displayValue = GetSlugDisplayText(childNode.attributes[1].nodeValue, dataType);
            if (IsNull(displayValue))
                continue;
            if (IsNull(outputText))
                outputText = displayValue;
            else
                outputText += ";" + displayValue
        } else if (nodeType.nodeName == "type" && nodeType.nodeValue == "defaultvalue") {
            var defaultDisplayValue = GetDefaultValueDisplayText(XUI.Html.DomUtils.GetFirstChild(childNode), dataType);
            if (!IsNull(defaultDisplayValue))
                if (IsNull(outputText))
                    outputText = defaultDisplayValue;
                else
                    outputText += ";" + defaultDisplayValue
        } else if (nodeType.nodeName == "type" && nodeType.nodeValue == "duration")
            durationText = GetDurationDisplayText(childNode.attributes[1].nodeValue)
    }
    if (!IsNull(durationText))
        outputText = durationText + outputText;
    return "{" + outputText + "}"
}

function GetDurationDisplayText(value) {
    var list = value.split(";"),
        month = GetOptionValueWithTitleForDuration("monthSelector", list[0]),
        day = GetOptionValueWithTitleForDuration("daySelector", list[1]),
        hour = GetOptionValueWithTitleForDuration("hourSelector", list[2]),
        minute = GetOptionValueWithTitleForDuration("minuteSelector", list[3]),
        beforeAfter = GetOptionTitleWithValue("beforeAfterSelector", list[4]),
        displayText = null;
    if (!IsNull(month))
        displayText = month;
    if (!IsNull(day))
        if (IsNull(displayText))
            displayText = day;
        else
            displayText += ", " + day;
    if (!IsNull(hour))
        if (IsNull(displayText))
            displayText = hour;
        else
            displayText += ", " + hour;
    if (!IsNull(minute))
        if (IsNull(displayText))
            displayText = minute;
        else
            displayText += ", " + minute;
    displayText += " " + beforeAfter + " ";
    return displayText
}

function GetOptionValueWithTitleForDuration(controlId, title) {
    if (title == "0")
        return null;
    return GetOptionValueWithTitle(controlId, title)
}

function GetSlugDisplayText(value, dataType) {
    if (value == "null")
        return LOCID_DE_OPERATOR_CLEAR;
    var attributeName = null;
    attributeName = GetOptionTitleWithValue("valueSelectorHidden" + dataType, value);
    if (IsNull(attributeName))
        attributeName = RetryMatchDataType(dataType, value);
    if (IsNull(attributeName)) {
        var compatibleTypes = GetCompatibleTypeMapping(dataType);
        if (compatibleTypes != undefined)
            for (var typeNames = compatibleTypes.split(","),
                index = 0,
                index = 0;
                index < typeNames.length;
                index++) {
                attributeName = GetOptionTitleWithValue("valueSelectorHidden" + typeNames[index], value);
                if (IsNull(attributeName))
                    attributeName = RetryMatchDataType(typeNames[index], value);
                if (!IsNull(attributeName)) {
                    dataType = typeNames[index];
                    break
                }
            }
    }
    var list = value.split("."),
        entityValue = null;
    for (index = 0; index < list.length - 1; index++)
        if (entityValue == null)
            entityValue = list[index];
        else
            entityValue += "." + list[index];
    var entityName = GetOptionTitleWithValue("selObjects", entityValue);
    if (IsNull(entityName))
        entityName = RetryEntityName(dataType, entityValue);
    if (IsNull(attributeName) || IsNull(entityName))
        if (value.indexOf("#") != -1)
            entityName = GetLocalizedValueName(value);
        else
            return LOCID_DE_NOT_FOUND;
    return attributeName + "(" + entityName + ")"
}

function GetLocalizedValueName(localValueKey) {
    var displayName = null;
    try {
        displayName = GetLocalizedLocalValueDisplayName(localValueKey)
    } catch (e) {
    }
    if (displayName == null) {
        var list = localValueKey.split("#");
        displayName = list[2]
    }
    return displayName
}

function RetryMatchDataType(dataType, value) {
    var html = GetLatestDataTypeMapping(dataType),
        attributeName = null;
    if (!IsNull(html)) {
        var control = document.getElementById("valueSelectorHidden" + dataType),
            controlBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
        if (html.length > 1) {
            control.innerHTML = html;
            !IsNull(controlBehavior) &&
                controlBehavior.set_defaultValue(controlBehavior.get_dataValue());
            attributeName = GetTextFromInnerHtml("<select>" + html + "</select>", value)
        }
    }
    return attributeName
}

function RetryEntityName(dataType, value) {
    var html = GetEntityListMappingInfo(dataType),
        entityName = null;
    if (!IsNull(html)) {
        var control = document.getElementById("selObjects");
        if (html.length > 1) {
            control.innerHTML = html;
            var controlBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
            !IsNull(controlBehavior) &&
                controlBehavior.set_defaultValue(controlBehavior.get_dataValue());
            entityName = GetTextFromInnerHtml("<select>" + html + "</select>", value)
        }
    }
    return entityName
}

function GetTextFromInnerHtml(XmlDoc, value) {
    var oXml = XUI.Xml.LoadXml(XmlDoc),
        path = "/select/option[@value='" + value + "']";
    if (XmlDoc.indexOf("<OPTGROUP") >= 0)
        path = "/select/OPTGROUP/option[@value='" + value + "']";
    var oNode = XUI.Xml.SelectSingleNode(oXml, path, null);
    if (!IsNull(oNode))
        return XUI.Xml.GetText(oNode);
    return null
}

function GetDefaultValueDisplayText(defaultValueNode, dataType) {
    switch (dataType) {
    case "Integer":
        var control = document.getElementById(defaultValueNode.nodeName);
        if (!IsNull(control) && !IsNull(control.tagName)) {
            var val = XUI.Xml.GetText(defaultValueNode);
            switch (control.tagName.toUpperCase()) {
            case "SELECT":
                for (var index = 0; index < control.options.length; index++)
                    if (control.options[index].value == val)
                        return XUI.Html.GetText(control.options[index]);
                return val;
                break;
            case "INPUT":
                if (control.className == "ms-crm-Duration")
                    if (typeof iMinutes != "number")
                        return Mscrm.NumberUtility.formatDuration(parseInt(val, 10));
                    else
                        return Mscrm.NumberUtility.formatDuration(val);
                else
                    return defaultValueNode.getAttribute("displaytext");
                break
            }
        }
        return null;
    case "String":
        return XUI.Xml.GetText(defaultValueNode);
    case "DateTime":
    case "Decimal":
    case "Float":
    case "Money":
        return defaultValueNode.getAttribute("displaytext");
    case "Picklist":
    case "Status":
    case "State":
        return GetOptionTitleWithValue(defaultValueNode.nodeName, XUI.Xml.GetText(defaultValueNode));
    case "Boolean":
        var control = document.getElementById(defaultValueNode.nodeName),
            className = control.className;
        if (!IsNull(className))
            className = className.replace(" ", "");
        switch (className) {
        case "ms-crm-CheckBox":
            if (XUI.Xml.GetText(defaultValueNode) == "1")
                return true;
            else
                return false;
            break;
        case "ms-crm-SelectBox":
            return GetOptionTitleWithValue(defaultValueNode.nodeName, XUI.Xml.GetText(defaultValueNode));
            break;
        case "ms-crm-RadioButton":
            for (var inputControls = XUI.Html.DomUtils.GetChildElementAt(control, 2).getElementsByTagName("INPUT"),
                inputLabels = XUI.Html.DomUtils.GetChildElementAt(control, 2).getElementsByTagName("LABEL"),
                index = 0;
                index < inputControls.length;
                index++)
                if (Sys.UI.DomElement.containsCssClass(inputControls[index], "ms-crm-RadioButton") &&
                    inputControls[index].value == XUI.Xml.GetText(defaultValueNode))
                    return XUI.Html.GetText(inputLabels[index]);
            break
        }
        break;
    case "Lookup":
    case "User":
    case "Customer":
    case "Owner":
        if (!IsNull(defaultValueNode.attributes[1]))
            return defaultValueNode.attributes[1].nodeValue;
        else
            return XUI.Xml.GetText(defaultValueNode);
    case "PartyList":
        for (var returnValue = null,
            index = 0,
            index = 0;
            index < defaultValueNode.childNodes.length;
            index++) {
            var childNode = XUI.Html.DomUtils.GetChildElementAt(defaultValueNode, index);
            if (index == 0)
                returnValue = GetDisplayTextForPartyList(XUI.Html.DomUtils.GetFirstChild(childNode));
            else
                returnValue += ", " + GetDisplayTextForPartyList(XUI.Html.DomUtils.GetFirstChild(childNode))
        }
        return returnValue
    }
    return null
}

function GetDisplayTextForPartyList(node) {
    if (node.nodeName == "addressused")
        return XUI.Xml.GetText(node);
    else
        return node.attributes[1].nodeValue
}

function GetOptionTitleWithValue(controlId, value) {
    return GetOptionText(controlId, value, false)
}

function GetOptionValueWithTitle(controlId, title) {
    return GetOptionText(controlId, title, true)
}

function GetOptionText(controlId, compareText, isTitle) {
    for (var control = document.getElementById(controlId),
        index = 0,
        index = 0;
        index < control.options.length;
        index++) {
        var option = control.options[index];
        if (isTitle) {
            if (XUI.Html.GetText(option) == compareText)
                return option.getAttribute("desc")
        } else if (option.value == compareText)
            return XUI.Html.GetText(option)
    }
    return null
}

function IsMultiSlug(dataType, control) {
    if (dataType == "String")
        return true;
    if (dataType == "PartyList") {
        for (var imgControls = control.getElementsByTagName("IMG"),
            index = 0;
            index < imgControls.length;
            index++)
            if (Sys.UI.DomElement.containsCssClass(imgControls[index], "ms-crm-Lookup-Party") &&
                Mscrm.FormControlInputBehavior.GetBehavior(imgControls[index].id).get_lookupStyle() == "single")
                return false;
        return true
    }
    return false
}

function IsReadOnly(dataType) {
    if (dataType == "String")
        return false;
    return true
}

function selDblClick(eventObj) {
    var se = eventObj.target;
    !IsNull(se) &&
        !IsNull(se.value) &&
        XUI.Html.DispatchDomEvent(se, XUI.Html.CreateDomEvent("change"))
}

function ShowDurationControl(dataType) {
    var sel = document.getElementById("valueSelector"),
        durationControl = document.getElementById("durationControl");
    if (!IsNull(durationControl) && !IsNull(sel))
        if (dataType == "DateTime") {
            if (durationControl.style.display != "block") {
                AttachDurationEvent(true);
                durationControl.style.display = "block";
                $addHandler(sel, "dblclick", selDblClick)
            }
            SetBeforeAfterOperator()
        } else {
            durationControl.style.display = "none";
            try {
                $removeHandler(sel, "dblclick", selDblClick)
            } catch (e) {
            }
            AttachDurationEvent(false)
        }
}

function AttachDurationEvent(attach) {
    var month = document.getElementById("monthSelector"),
        day = document.getElementById("daySelector"),
        hour = document.getElementById("hourSelector"),
        minute = document.getElementById("minuteSelector"),
        beforeAfter = document.getElementById("beforeAfterSelector");
    if (!attach)
        try {
            $removeHandler(month, "change", DurationValueChanged);
            $removeHandler(day, "change", DurationValueChanged);
            $removeHandler(hour, "change", DurationValueChanged);
            $removeHandler(minute, "change", DurationValueChanged);
            $removeHandler(beforeAfter, "change", DurationValueChanged)
        } catch (e) {
        }
    else {
        $addHandler(month, "change", DurationValueChanged);
        $addHandler(day, "change", DurationValueChanged);
        $addHandler(hour, "change", DurationValueChanged);
        $addHandler(minute, "change", DurationValueChanged);
        $addHandler(beforeAfter, "change", DurationValueChanged)
    }
}

function SetBeforeAfterOperator() {
    var beforeAfter = document.getElementById("beforeAfterSelector");
    if (IsTimeoutCondition(_currentValueConditionControl.get_conditionParentControl())) {
        if (beforeAfter.options.length == 2) {
            var durationTitle = document.getElementById("hidDurationTitle"),
                oOption = document.createElement("OPTION");
            Mscrm.Utilities.addOption(oOption, beforeAfter, beforeAfter.options.length);
            var optionText = durationTitle.getAttribute("text");
            XUI.Html.SetText(oOption, optionText);
            oOption.value = durationTitle.getAttribute("value");
            oOption.setAttribute("title", optionText)
        }
    } else
        beforeAfter.options.length == 3 &&
            beforeAfter.remove(2)
}

function ResetDurationValue() {
    var month = document.getElementById("monthSelector"),
        day = document.getElementById("daySelector"),
        hour = document.getElementById("hourSelector"),
        minute = document.getElementById("minuteSelector");
    month.selectedIndex = 0;
    day.selectedIndex = 0;
    hour.selectedIndex = 0;
    minute.selectedIndex = 0
}

function IsDurationSelected() {
    var month = document.getElementById("monthSelector"),
        day = document.getElementById("daySelector"),
        hour = document.getElementById("hourSelector"),
        minute = document.getElementById("minuteSelector");
    return month.selectedIndex > 0 || day.selectedIndex > 0 || hour.selectedIndex > 0 || minute.selectedIndex > 0
}

function DurationValueChanged(eventObj) {
    if (IsNull(_currentValueControl))
        return;
    var beforeAfter = document.getElementById("beforeAfterSelector"),
        attributesSelect = document.getElementById("valueSelector"),
        entityNameSelect = document.getElementById("selObjects"),
        entityDisplayArea = document.getElementById("divEntitySelectArea"),
        variableName;
    if (!IsNull(beforeAfter) && beforeAfter.value == DurationOption) {
        if (eventObj.target == beforeAfter) {
            for (var i = 0,
                i = 0;
                i < entityNameSelect.options.length;
                i++)
                if (entityNameSelect.options[i].value.indexOf("#Workflow#") == 0) {
                    variableName = entityNameSelect.options[i].value;
                    entityNameSelect.removeAttribute("disabled");
                    entityNameSelect.selectedIndex = i;
                    break
                }
            entityDisplayArea.style.display = "none"
        }
        if (IsDurationSelected())
            for (var hiddenSelectBox = document.getElementById("valueSelectorHiddenDateTime"),
                index = 0;
                index < hiddenSelectBox.options.length;
                index++) {
                var option = hiddenSelectBox.options[index];
                if (option.value.search(variableName) != -1 && IsTimeoutExpr(option.value)) {
                    InsertCustomizedDataSlug(option.value);
                    break
                }
            }
        entityNameSelect.setAttribute("disalbed", true);
        attributesSelect.setAttribute("disabled", true)
    } else {
        entityDisplayArea.style.display = "block";
        entityNameSelect.removeAttribute("disalbed");
        attributesSelect.removeAttribute("disabled");
        entityNameSelect.selectedIndex = 0
    }
}

function IsEmailBody(element) {
    return !IsNull(element.className) && element.className.indexOf("ms-crm-Email-Body") >= 0
}

function GetLatestDataTypeMapping(dataType) {
    try {
        return GetHiddenDataTypeMappingInfo(dataType)
    } catch (e) {
    }
    return null
}

function IsSlugDeleted(element) {
    var slug = null;
    while (!IsNull(element) && !(slug = Mscrm.FormUtility.getSlugBehavior(element)))
        element = element.parentNode;
    if (IsNull(element))
        return false;
    return slug.get_isSlugDeleted()
}

function GetLocalizedLocalValueDisplayName(localValueKey) {
    if (IsNull(localValueKey))
        return null;
    var retVal = null,
        command = new RemoteCommand("Workflow", "GetLocalizedLocalValueDisplayName");
    command.SetParameter("localValueKey", localValueKey);
    var oResult = command.Execute();
    if (oResult.Success)
        retVal = oResult.ReturnValue;
    if (retVal == "")
        return null;
    return retVal
}

function GetControlOrBehavior(element) {
    var ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(element);
    if (IsNull(ctrl))
        ctrl = $find(element.id);
    if (IsNull(ctrl)) {
        var behaviors = Sys.UI.Behavior.getBehaviors(element);
        if (behaviors.length > 0)
            ctrl = behaviors[0]
    }
    return ctrl
}