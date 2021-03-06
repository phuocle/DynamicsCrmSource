
function CacheManager() {
    this.GetEntityFieldList = getEntityFieldList;
    this.GetFieldDataType = getFieldDataType;
    this.GetLinkedEntityList = getLinkedEntityList;
    var _oaCache = [];

    function getCacheItem(sItemType, sItemName, iLocaleId) {
        if (IsNull(sItemType) || sItemType.length == 0)
            return null;
        if (IsNull(sItemName) || sItemName.length == 0)
            return null;
        if (IsNull(iLocaleId))
            return null;
        var sCacheKey = iLocaleId + ":" + sItemType + ":" + sItemName;
        if (IsNull(_oaCache[sCacheKey])) {
            var oCommand;
            switch (sItemType) {
            case "Entity":
                oCommand = new RemoteCommand("AdvancedFind", "GetLinkedEntityListAdvanced");
                oCommand.SetParameter("entityName", sItemName);
                oCommand.SetParameter("langCode", iLocaleId);
                oCommand.SetParameter("includeReferencesFrom", false);
                oCommand.SetParameter("includeReferencesTo", true);
                break;
            case "Field":
                oCommand = new RemoteCommand("AdvancedFind", "GetEntityFieldListAdvanced");
                oCommand.SetParameter("entityName", sItemName);
                oCommand.SetParameter("langCode", iLocaleId);
                break;
            default:
                return null
            }
            var oResult = oCommand.Execute();
            if (oResult.Success == ERROR_NONE) {
                var oResultXml = oResult.Xml,
                    oText = oResultXml.textContent ? oResultXml.textContent : oResultXml.text;
                if (!IsNull(oResultXml) && oText.length > 0)
                    _oaCache[sCacheKey] = XUI.Xml.LoadXml(oText)
            }
        }
        return _oaCache[sCacheKey]
    }

    function getEntityFieldList(sEntityName, iLocaleId) {
        return getCacheItem("Field", sEntityName, iLocaleId)
    }

    function getFieldDataType(sFieldName, sEntityName, iLocaleId) {
        if (IsNull(sFieldName) || sFieldName.length == 0)
            return null;
        var oFieldListXml = getEntityFieldList(sEntityName, iLocaleId);
        if (!IsNull(oFieldListXml)) {
            var oFieldNode = XUI.Xml.SelectSingleNode(oFieldListXml,
                formatString("/fields/result[@value = '{0}' or @nameattr = '{0}']", sFieldName),
                null);
            if (!IsNull(oFieldNode))
                return oFieldNode.getAttribute("datatype")
        }
        return null
    }

    function getLinkedEntityList(sEntityName, iLocaleId) {
        return getCacheItem("Entity", sEntityName, iLocaleId)
    }
}