
var baseAttributeList = "",
    baseAttributeMetadataList,
    matchingAttributeMetadataList,
    iTotalCurrentMatchCodeLength = 0,
    iBaseAttributeListIndex = 0,
    iMatchingAttributeListIndex = -1,
    iOperatorListIndex = 1,
    iNumCharsIndex = 2;

function CreateAttributeMetadataDictionary(entityName) {
    var command = new RemoteCommand("DuplicateDetection", "GetAttributeMetadataXml");
    command.SetParameter("entityName", entityName);
    var result = command.Execute();
    if (result.Success && result.ReturnValue != "") {
        var oXmlDoc = XUI.Xml.LoadXml(result.ReturnValue),
            oNodes = XUI.Xml.SelectNodes(oXmlDoc, "metadata/attribute", null);
        if (oNodes != null) {
            for (var attributeDictionary = [],
                i = 0;
                i < oNodes.length;
                i++)
                attributeDictionary[oNodes[i].getAttribute("name")] = parseInt(XUI.Xml.GetText(oNodes[i]), 10);
            return attributeDictionary
        }
    }
    return null
}

function getOptionTag(value, title) {
    var optionTag = "<option value=" + value + " title=" + title + " >" + title + "</option>";
    return optionTag
}

function ComputeTotalMatchCodeLength() {
    iTotalCurrentMatchCodeLength = 0;
    var numValidConditions = 0,
        appCondition = $find("dupRuleAppCondition"),
        conditionGroup = appCondition.GetConditionGroup();
    if (conditionGroup) {
        var iNumRows = conditionGroup.GetNumControls();
        for (i = 0; i < iNumRows; i++) {
            var currentRowMatchCodeLength = 0,
                currentRow = conditionGroup.GetControl(i);
            if (currentRow) {
                var operator = currentRow.GetControl(iOperatorListIndex);
                if (operator)
                    if (operator.isUnary()) {
                        var baseAttributeControl = currentRow.GetControl(iBaseAttributeListIndex);
                        if (baseAttributeControl) {
                            var baseAttributeName = baseAttributeControl.get_dataValue();
                            if (baseAttributeMetadataList[baseAttributeName] &&
                                baseAttributeMetadataList[baseAttributeName] > 0)
                                if (operator.get_dataValue() == "dedupe-equalsdateonly")
                                    currentRowMatchCodeLength = aspxVars_iDateOnlyMatchCodeLength;
                                else
                                    currentRowMatchCodeLength = baseAttributeMetadataList[baseAttributeName]
                        }
                        if (!window._isSingleEntityRule) {
                            var matchingAttributeControl = currentRow.GetControl(iMatchingAttributeListIndex);
                            if (matchingAttributeControl) {
                                var matchingAttributeName = matchingAttributeControl.get_dataValue();
                                if (matchingAttributeMetadataList[matchingAttributeName] &&
                                    matchingAttributeMetadataList[matchingAttributeName] > 0)
                                    if (operator.get_dataValue() == "dedupe-equalsdateonly")
                                        currentRowMatchCodeLength = aspxVars_iDateOnlyMatchCodeLength;
                                    else
                                        currentRowMatchCodeLength =
                                            currentRowMatchCodeLength <=
                                            matchingAttributeMetadataList[matchingAttributeName]
                                            ? currentRowMatchCodeLength
                                            : matchingAttributeMetadataList[matchingAttributeName]
                            }
                        }
                    } else {
                        var numCharsProxyControl = currentRow.GetControl(iNumCharsIndex);
                        if (numCharsProxyControl) {
                            var numCharsValue = parseInt(numCharsProxyControl.get_dataValue(), 10);
                            if (numCharsValue)
                                currentRowMatchCodeLength = numCharsValue
                        }
                    }
            }
            iTotalCurrentMatchCodeLength += currentRowMatchCodeLength;
            if (currentRowMatchCodeLength > 0)
                numValidConditions++
        }
        if (numValidConditions > 0)
            iTotalCurrentMatchCodeLength += numValidConditions - 1
    }
    XUI.Html.SetText(document.getElementById("status"),
        formatString(LOCID_DEDUP_MATCHCODE_STATUS, iTotalCurrentMatchCodeLength, aspxVars_iMaxMatchCodeLength));
    return iTotalCurrentMatchCodeLength
}

function GetDeDupeAttributeOperatorList(args) {
    sColumnId = args["ID"];
    regardingObject = args["Element"];
    var appCondition = $find("dupRuleAppCondition"),
        command = null,
        result = null;
    if (sColumnId == "colBaseAttribute") {
        if (!baseAttributeList || baseAttributeList == "") {
            command = new RemoteCommand("DuplicateDetection", "GetBaseAttributeList");
            command.SetParameter("entityName", appCondition.get_primaryEntityCode());
            result = command.Execute();
            baseAttributeList = result.ReturnValue
        }
        return baseAttributeList
    }
    if (sColumnId == "colNumberChars") {
        var valueControl = XUI.Html.DomUtils.GetFirstChild(appCondition.get_clientCache()
            .GetElement("ValueControl", "number"));
        if (valueControl) {
            valueControl.setAttribute("acc", 0);
            var conditionParentControl = $find(regardingObject.id).get_conditionParentControl(),
                freeFormControl = conditionParentControl.GetControl(2).get_element(),
                autoShowControl = !IsNull(freeFormControl) ? XUI.Html.DomUtils.GetFirstChild(freeFormControl) : null,
                autoShowContainer = !IsNull(autoShowControl) ? XUI.Html.DomUtils.GetFirstChild(autoShowControl) : null,
                controlDiv = !IsNull(autoShowContainer)
                    ? XUI.Html.DomUtils.GetChildElementAt(autoShowContainer, 1)
                    : null;
            if (controlDiv)
                if (controlDiv.className.indexOf("ms-crm-Input-Container") == -1)
                    controlDiv.className += " ms-crm-Input-Container";
            var baseAttributeName = conditionParentControl.GetControl(0).get_dataValue(),
                baseMaxMatchcodeLength = aspxVars_iMaxMatchCodeLength;
            if (baseAttributeName && baseAttributeName != "")
                baseMaxMatchcodeLength = baseAttributeMetadataList[baseAttributeName];
            var matchingMaxMatchcodeLength = baseMaxMatchcodeLength;
            if (appCondition.get_secondaryEntityCode() &&
                appCondition.get_primaryEntityCode() != appCondition.get_secondaryEntityCode()) {
                var matchingAttributeName = conditionParentControl.GetControl(1).get_dataValue();
                if (matchingAttributeName && matchingAttributeName != "")
                    matchingMaxMatchcodeLength = matchingAttributeMetadataList[matchingAttributeName]
            }
            valueControl.setAttribute("min", 1);
            if (baseMaxMatchcodeLength <= matchingMaxMatchcodeLength)
                valueControl.setAttribute("max", baseMaxMatchcodeLength);
            else
                valueControl.setAttribute("max", matchingMaxMatchcodeLength);
            return XUI.Html.GetOuterHTML(valueControl)
        }
    }
    if (sColumnId == "colIgnoreBlankValues")
        return "<input type='checkbox' class='ms-crm-CheckBox' />";
    if (sColumnId == "colMatchingAttribute") {
        var matchingAttributeList = "",
            baseAttributeName = $find(regardingObject.id).get_conditionParentControl().GetControl(0).get_dataValue();
        if (baseAttributeName && baseAttributeName != "") {
            command = new RemoteCommand("DuplicateDetection", "GetMatchingAttributeList");
            command.SetParameter("baseEntityName", appCondition.get_primaryEntityCode());
            command.SetParameter("matchingEntityName", appCondition.get_secondaryEntityCode());
            command.SetParameter("baseAttributeName", baseAttributeName);
            result = command.Execute();
            matchingAttributeList = result.ReturnValue
        }
        return matchingAttributeList
    }
    if (sColumnId == "colCriteria") {
        var startTag = "<select class='ms-crm-SelectBox'>",
            endTag = "</select>",
            optionXml = "",
            baseAttributeName = $find(regardingObject.id).get_conditionParentControl().GetControl(0).get_dataValue(),
            oNode = appCondition.get_clientCache().GetField(baseAttributeName, appCondition.get_primaryEntityCode()),
            dataType = "";
        if (oNode)
            dataType = oNode.getAttribute("datatype");
        else
            dataType = GetDataTypeOfAttribute(appCondition.get_primaryEntityCode(), baseAttributeName);
        switch (dataType) {
        case "nvarchar":
        case "text":
        case "memo":
        case "string":
            var secondaryEntityCode = appCondition.get_secondaryEntityCode();
            if (appCondition.get_primaryEntityCode() == secondaryEntityCode)
                optionXml = optionXml + getOptionTag(aspxVars_operatorEquals, aspxVars_operatorEqualsLabel);
            else if (secondaryEntityCode) {
                var matchingAttributeName = $find(regardingObject.id).get_conditionParentControl().GetControl(1)
                        .get_dataValue(),
                    matchingNode = appCondition.get_clientCache().GetField(matchingAttributeName, secondaryEntityCode),
                    matchingdataType = "";
                if (matchingNode)
                    matchingdataType = matchingNode.getAttribute("datatype");
                else
                    matchingdataType = GetDataTypeOfAttribute(secondaryEntityCode, matchingAttributeName);
                if (matchingdataType != "" && matchingdataType != "ntext")
                    optionXml = optionXml + getOptionTag(aspxVars_operatorEquals, aspxVars_operatorEqualsLabel)
            }
            optionXml = optionXml + getOptionTag(aspxVars_operatorFirstN, aspxVars_operatorFirstNLabel);
            optionXml = optionXml + getOptionTag(aspxVars_operatorLastN, aspxVars_operatorLastNLabel);
            break;
        case "ntext":
            optionXml = optionXml + getOptionTag(aspxVars_operatorFirstN, aspxVars_operatorFirstNLabel);
            optionXml = optionXml + getOptionTag(aspxVars_operatorLastN, aspxVars_operatorLastNLabel);
            break;
        case "date":
        case "time":
        case "datetime":
            optionXml = optionXml + getOptionTag(aspxVars_operatorEqualsDateOnly, aspxVars_operatorEqualsDateOnlyLabel);
            optionXml = optionXml +
                getOptionTag(aspxVars_operatorEqualsDateAndTime, aspxVars_operatorEqualsDateAndTimeLabel);
            break;
        case "picklist":
        case "integer":
        case "int":
        case "state":
        case "status":
        case "number":
        case "lookup":
        case "customer":
        case "owner":
            optionXml = optionXml + getOptionTag(aspxVars_operatorEquals, aspxVars_operatorEqualsLabel);
            break;
        default:
            alert(LOCID_INVALID_ATTRIBUTE_TYPE);
            return null
        }
        var returnXml = startTag + optionXml + endTag;
        return returnXml
    }
    return null
}

function GetDataTypeOfAttribute(entityName, attributeName) {
    var command = new RemoteCommand("DuplicateDetection", "GetAttributeDataType");
    command.SetParameter("attributeName", attributeName);
    command.SetParameter("entityName", entityName);
    var result = command.Execute();
    return result.ReturnValue
}