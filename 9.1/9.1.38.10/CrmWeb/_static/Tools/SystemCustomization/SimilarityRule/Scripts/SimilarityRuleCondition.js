
var baseAttributeList = "",
    baseAttributeMetadataList,
    matchingAttributeMetadataList,
    iBaseAttributeListIndex = 0,
    iMatchingAttributeListIndex = -1,
    iOperatorListIndex = 1,
    iNumCharsIndex = 2;
function CreateAttributeMetadataDictionary(entityName)
{
    var command = new RemoteCommand("SimilarityRuleWebService","GetAttributeMetadataXml");
    command.SetParameter("entityName",entityName);
    var result = command.Execute();
    if(result.Success && result.ReturnValue != "")
    {
        var oXmlDoc = XUI.Xml.LoadXml(result.ReturnValue),
            oNodes = XUI.Xml.SelectNodes(oXmlDoc,"metadata/attribute",null);
        if(oNodes != null)
        {
            for(var attributeDictionary = [],
                i = 0; i < oNodes.length; i++)
                attributeDictionary[oNodes[i].getAttribute("name")] = parseInt(XUI.Xml.GetText(oNodes[i]),10);
            return attributeDictionary
        }
    }
    return null
}
function getOptionTag(value,title)
{
    var optionTag = "<option value=" + value + " title=" + title + " >" + title + "</option>";
    return optionTag
}
function GetSimilarityRuleAttributeOperatorList(args)
{
    sColumnId = args["ID"];
    regardingObject = args["Element"];
    var appCondition = $find("similarityRuleAppCondition"),
        command = null,
        result = null;
    if(sColumnId == "colBaseAttribute")
    {
        if(!baseAttributeList || baseAttributeList == "")
        {
            command = new RemoteCommand("SimilarityRuleWebService","GetBaseAttributeList");
            command.SetParameter("entityName",appCondition.get_primaryEntityCode());
            result = command.Execute();
            baseAttributeList = result.ReturnValue
        }
        return baseAttributeList
    }
    if(sColumnId == "colMatchingAttribute")
    {
        var matchingAttributeList = "",
            baseAttributeName = $find(regardingObject.id).get_conditionParentControl().GetControl(0).get_dataValue();
        if(baseAttributeName && baseAttributeName != "")
        {
            command = new RemoteCommand("SimilarityRuleWebService","GetMatchingAttributeList");
            command.SetParameter("baseEntityName",appCondition.get_primaryEntityCode());
            command.SetParameter("matchingEntityName",appCondition.get_secondaryEntityCode());
            command.SetParameter("baseAttributeName",baseAttributeName);
            result = command.Execute();
            matchingAttributeList = result.ReturnValue
        }
        return matchingAttributeList
    }
    if(sColumnId == "colCriteria")
    {
        var startTag = "<select class='ms-crm-SelectBox'>",
            endTag = "</select>",
            optionXml = "",
            baseAttributeName = $find(regardingObject.id).get_conditionParentControl().GetControl(0).get_dataValue(),
            oNode = appCondition.get_clientCache().GetField(baseAttributeName,appCondition.get_primaryEntityCode()),
            dataType = "";
        if(oNode)
            dataType = oNode.getAttribute("datatype");
        else
            dataType = GetDataTypeOfAttribute(appCondition.get_primaryEntityCode(),baseAttributeName);
        switch(dataType.toLowerCase())
        {
            case "nvarchar":
            case "text":
            case "string":
                var secondaryEntityCode = appCondition.get_secondaryEntityCode();
                if(appCondition.get_primaryEntityCode() == secondaryEntityCode)
                    optionXml = optionXml + getOptionTag(aspxVars_operatorEquals,aspxVars_operatorEqualsLabel);
                else
                    if(secondaryEntityCode)
                    {
                        var matchingAttributeName = $find(regardingObject.id).get_conditionParentControl().GetControl(1).get_dataValue(),
                            matchingNode = appCondition.get_clientCache().GetField(matchingAttributeName,secondaryEntityCode),
                            matchingdataType = "";
                        if(matchingNode)
                            matchingdataType = matchingNode.getAttribute("datatype");
                        else
                            matchingdataType = GetDataTypeOfAttribute(secondaryEntityCode,matchingAttributeName);
                        if(matchingdataType != "" && matchingdataType != "ntext")
                            optionXml = optionXml + getOptionTag(aspxVars_operatorEquals,aspxVars_operatorEqualsLabel)
                    }
                optionXml = optionXml + getOptionTag(aspxVars_operatorStartsWith,aspxVars_operatorStartsWithLabel);
                optionXml = optionXml + getOptionTag(aspxVars_operatorEndsWith,aspxVars_operatorEndsWithLabel);
                break;
            case "ntext":
                optionXml = optionXml + getOptionTag(aspxVars_operatorStartsWith,aspxVars_operatorStartsWithLabel);
                optionXml = optionXml + getOptionTag(aspxVars_operatorEndsWith,aspxVars_operatorEndsWithLabel);
                break;
            case "date":
            case "time":
            case "datetime":
                optionXml = optionXml + getOptionTag(aspxVars_operatorEqualsDateOnly,aspxVars_operatorEqualsDateOnlyLabel);
                optionXml = optionXml + getOptionTag(aspxVars_operatorEqualsDateAndTime,aspxVars_operatorEqualsDateAndTimeLabel);
                break;
            case "lookup":
            case "customer":
            case "owner":
            case "integer":
            case "smallint":
            case "tinyint":
            case "int":
            case "decimal":
            case "float":
            case "money":
            case "picklist":
            case "state":
            case "status":
            case "bit":
                optionXml = optionXml + getOptionTag(aspxVars_operatorEquals,aspxVars_operatorEqualsLabel);
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
function GetDataTypeOfAttribute(entityName,attributeName)
{
    var command = new RemoteCommand("SimilarityRuleWebService","GetAttributeDataType");
    command.SetParameter("attributeName",attributeName);
    command.SetParameter("entityName",entityName);
    var result = command.Execute();
    return result.ReturnValue
}
