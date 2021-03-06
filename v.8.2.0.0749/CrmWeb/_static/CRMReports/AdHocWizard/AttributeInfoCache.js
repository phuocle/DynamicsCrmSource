
function AttributeInfoCache() {
    this.GetAttributeDisplayName = getAttributeDisplayName;
    this.GetAttributeType = getAttributeType;
    this.Initialize = initialize;
    var _oAttributeInfo = null;

    function getAttribute(sAttributeAlias) {
        return XUI.Xml.SelectSingleNode(_oAttributeInfo,
            formatString("/Attributes/Attribute[@Alias = '{0}']", sAttributeAlias),
            null)
    }

    function getAttributeDisplayName(sAttributeAlias) {
        var oAttributeNode = getAttribute(sAttributeAlias);
        return IsNull(oAttributeNode) ? null : XUI.Xml.GetText(oAttributeNode)
    }

    function getAttributeType(sAttributeAlias) {
        var oAttributeNode = getAttribute(sAttributeAlias);
        return IsNull(oAttributeNode) ? null : oAttributeNode.getAttribute("Type")
    }

    function initialize(sFetchXml, iLocaleId) {
        var oCommand = new RemoteCommand("Reports", "GetAttributeInfo");
        oCommand.SetParameter("fetchXml", sFetchXml);
        oCommand.SetParameter("lcid", iLocaleId);
        var oResult = oCommand.Execute(),
            sDisplayNamesXml = oResult.Success == ERROR_NONE ? oResult.ReturnValue : null;
        if (!IsNull(sDisplayNamesXml) && sDisplayNamesXml.length > 0) {
            _oAttributeInfo = XUI.Xml.LoadXml(sDisplayNamesXml);
            return true
        }
        return false
    }
}