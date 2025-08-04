
function FetchBuilder() {
    this.AddAttribute = addAttribute;
    this.AddLinkEntity = addLinkEntity;
    this.ClearSorting = clearSorting;
    this.GetAttributeInfo = getAttributeInfo;
    this.GetAttributeInfos = getAttributeInfos;
    this.GetPrimaryEntityAttributeAliases = getPrimaryEntityAttributeAliases;
    this.GetPrimaryEntityName = getPrimaryEntityName;
    this.GetSecondaryEntityName = getSecondaryEntityName;
    this.GetSecondaryEntityString = getSecondaryEntityString;
    this.GetSortNode = getSortNode;
    this.GetXml = getXml;
    this.IsSortAttribute = isSortAttribute;
    this.LoadXml = loadXml;
    this.RemoveAttribute = removeAttribute;
    this.SetPrimaryEntity = setPrimaryEntity;
    this.SetSecondaryEntity = setSecondaryEntity;
    this.SetSortAttribute = setSortAttribute;
    var _oFetchXml = null;

    function addAttribute(sEntityAlias, sAttributeName) {
        var oEntityNode = getEntityNode(sEntityAlias),
            oAttributeNode = XUI.Xml.SelectSingleNode(oEntityNode,
                formatString("attribute[@name = '{0}']", sAttributeName),
                null),
            sAttributeAlias;
        if (IsNull(oAttributeNode)) {
            sAttributeAlias = getAttributeAlias(sEntityAlias, sAttributeName);
            oAttributeNode = _oFetchXml.createElement("attribute");
            oAttributeNode.setAttribute("name", sAttributeName);
            oAttributeNode.setAttribute("alias", sAttributeAlias);
            oEntityNode.appendChild(oAttributeNode)
        } else
            sAttributeAlias = oAttributeNode.getAttribute("alias");
        return sAttributeAlias
    }

    function addLinkEntity(sName, sAlias, sFrom, sTo, sParentAlias, sEntityAlias) {
        var oParentNode = getEntityNode(sParentAlias),
            oLinkEntityNode = XUI.Xml.SelectSingleNode(oParentNode,
                formatString("link-entity[@alias = '{0}']", sAlias),
                null);
        if (IsNull(oLinkEntityNode)) {
            oLinkEntityNode = createLinkEntityNode(sName, sFrom, sTo, sAlias, sEntityAlias);
            oParentNode.appendChild(oLinkEntityNode)
        }
    }

    function clearSorting() {
        var oSortNode = getSortNode();
        !IsNull(oSortNode) &&
            oSortNode.parentNode.removeChild(oSortNode)
    }

    function createLinkEntityNode(sName, sFrom, sTo, sAlias, sEntityAlias) {
        var oLinkEntityNode = _oFetchXml.createElement("link-entity");
        oLinkEntityNode.setAttribute("name", sName);
        oLinkEntityNode.setAttribute("from", sFrom);
        oLinkEntityNode.setAttribute("to", sTo);
        if (!IsNull(sAlias)) {
            oLinkEntityNode.setAttribute("alias", sAlias);
            oLinkEntityNode.setAttribute("entityalias", sEntityAlias)
        }
        oLinkEntityNode.setAttribute("link-type", "outer");
        return oLinkEntityNode
    }

    function getAttributeInfos(saAttributeAliases) {
        for (var oaAttributeInfos = [],
            i = 0;
            i < saAttributeAliases.length;
            i++) {
            var oAttributeInfo = getAttributeInfo(saAttributeAliases[i]),
                sEntityAlias;
            if (oAttributeInfo.EntityEntityAlias)
                sEntityAlias = oAttributeInfo.EntityEntityAlias;
            else
                sEntityAlias = IsNull(oAttributeInfo.EntityAlias) ? "" : oAttributeInfo.EntityAlias;
            if (IsNull(oaAttributeInfos[sEntityAlias]))
                oaAttributeInfos[sEntityAlias] = [];
            oaAttributeInfos[sEntityAlias][oAttributeInfo.Attribute] = ""
        }
        return oaAttributeInfos
    }

    function getAttributeInfo(sAttributeAlias) {
        var oAttributeNode = getAttributeNode(sAttributeAlias),
            oAttribute = {};
        oAttribute.Entity = oAttributeNode.parentNode.getAttribute("name");
        oAttribute.EntityAlias = oAttributeNode.parentNode.getAttribute("alias");
        oAttribute.EntityEntityAlias = oAttributeNode.parentNode.getAttribute("entityalias");
        oAttribute.Attribute = oAttributeNode.getAttribute("name");
        return oAttribute
    }

    function getAttributeAlias(sEntityAlias, sAttributeName) {
        return IsNull(sEntityAlias) || sEntityAlias.length == 0
            ? sAttributeName
            : formatString("{0}_{1}", sEntityAlias, sAttributeName)
    }

    function getAttributeNode(sAttributeAlias) {
        return XUI.Xml.SelectSingleNode(_oFetchXml, formatString("//attribute[@alias = '{0}']", sAttributeAlias), null)
    }

    function getEntityNode(sAlias) {
        return sAlias.length == 0
            ? getPrimaryEntityNode()
            : XUI.Xml.SelectSingleNode(_oFetchXml, formatString("//link-entity[@alias = '{0}']", sAlias), null)
    }

    function getLinkEntityString(oLinkEntityNode) {
        return formatString("{0};{1};{2}",
            oLinkEntityNode.getAttribute("name"),
            oLinkEntityNode.getAttribute("from"),
            oLinkEntityNode.getAttribute("to"))
    }

    function getPrimaryEntityAttributeAliases() {
        for (var saAttributeAliases = [],
            oaAttributes = XUI.Xml.SelectNodes(getPrimaryEntityNode(), "attribute", null),
            i = 0;
            i < oaAttributes.length;
            i++)
            saAttributeAliases.push(oaAttributes[i].getAttribute("alias"));
        return saAttributeAliases
    }

    function getPrimaryEntityName() {
        var oPrimaryEntityNode = getPrimaryEntityNode();
        return IsNull(oPrimaryEntityNode) ? null : oPrimaryEntityNode.getAttribute("name")
    }

    function getPrimaryEntityNode() {
        return XUI.Xml.SelectSingleNode(_oFetchXml, "/fetch/entity", null)
    }

    function getSecondaryEntityName() {
        var oSecondaryEntityNode = getSecondaryEntityNode();
        return IsNull(oSecondaryEntityNode) ? null : oSecondaryEntityNode.getAttribute("name")
    }

    function getSecondaryEntityNode() {
        return XUI.Xml.SelectSingleNode(_oFetchXml, "/fetch/entity//link-entity[@secondary = '1']", null)
    }

    function getSecondaryEntityString() {
        var oSecondaryEntityNode = getSecondaryEntityNode();
        if (IsNull(oSecondaryEntityNode))
            return null;
        if (isLinkEntityNode(oSecondaryEntityNode.parentNode)) {
            var oIntersectEntityNode = oSecondaryEntityNode.parentNode;
            return formatString("{0};;;true;{1};{2};{3};{4};{5};",
                oSecondaryEntityNode.getAttribute("name"),
                oIntersectEntityNode.getAttribute("name"),
                oIntersectEntityNode.getAttribute("to"),
                oSecondaryEntityNode.getAttribute("from"),
                oIntersectEntityNode.getAttribute("from"),
                oSecondaryEntityNode.getAttribute("to"))
        } else
            return getLinkEntityString(oSecondaryEntityNode)
    }

    function getSortNode() {
        var node = getPrimaryEntityNode();
        return XUI.Xml.SelectSingleNode(node, "order", null)
    }

    function getXml() {
        for (var oReturnFetchXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(_oFetchXml)),
            oaAttributeNodes = XUI.Xml.SelectNodes(oReturnFetchXml, "//attribute", null),
            i = 0;
            i < oaAttributeNodes.length;
            i++)
            oaAttributeNodes[i].removeAttribute("alias");
        return oReturnFetchXml
    }

    function isLinkEntityNode(oNode) {
        return oNode.nodeName == "link-entity"
    }

    function isSortAttribute(sAttributeAlias) {
        var oSortNode = getSortNode();
        return !IsNull(oSortNode) && oSortNode.getAttribute("attribute") == sAttributeAlias
    }

    function loadXml(oFetchXml) {
        _oFetchXml = IsNull(oFetchXml)
            ? XUI.Xml.LoadXml('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" />')
            : oFetchXml;
        if (!IsNull(oFetchXml))
            for (var oaAttributeNodes = XUI.Xml.SelectNodes(_oFetchXml, "//attribute", null),
                i = 0;
                i < oaAttributeNodes.length;
                i++) {
                var oAttributeNode = oaAttributeNodes[i],
                    sAttributeAlias = getAttributeAlias(oAttributeNode.parentNode.getAttribute("alias"),
                        oAttributeNode.getAttribute("name"));
                oAttributeNode.setAttribute("alias", sAttributeAlias)
            }
    }

    function removeAttribute(sAttributeAlias) {
        var oAttributeNode = getAttributeNode(sAttributeAlias);
        if (IsNull(oAttributeNode))
            return;
        var oEntityNode = oAttributeNode.parentNode;
        oEntityNode.removeChild(oAttributeNode);
        oEntityNode.childNodes.length == 0 &&
            isLinkEntityNode(oEntityNode) &&
            IsNull(oEntityNode.getAttribute("secondary")) &&
            oEntityNode.parentNode.removeChild(oEntityNode);
        var oSortNode = getSortNode();
        !IsNull(oSortNode) &&
            oSortNode.getAttribute("attribute") == sAttributeAlias &&
            oEntityNode.removeChild(oSortNode)
    }

    function setPrimaryEntity(sEntityName) {
        if (IsNull(sEntityName) || sEntityName.length == 0)
            return;
        var oRootNode = XUI.Xml.SelectSingleNode(_oFetchXml, "/fetch", null),
            oPrimaryEntityNode = getPrimaryEntityNode();
        if (IsNull(oPrimaryEntityNode) || oPrimaryEntityNode.getAttribute("name") != sEntityName) {
            if (!IsNull(oPrimaryEntityNode)) {
                var oChildNodes = XUI.Xml.SelectNodes(oRootNode, "*", null);
                Mscrm.Utilities.removeAll(oChildNodes)
            }
            var oNewPrimaryEntityNode = _oFetchXml.createElement("entity");
            oNewPrimaryEntityNode.setAttribute("name", sEntityName);
            oRootNode.appendChild(oNewPrimaryEntityNode)
        }
    }

    function setSecondaryEntity(sEntityString) {
        var saEntityStringElements = null,
            bIsIntersect = false,
            sEntityName = null;
        if (!IsNull(sEntityString)) {
            saEntityStringElements = sEntityString.split(";");
            bIsIntersect = saEntityStringElements.length > 3;
            sEntityName = saEntityStringElements[0]
        }
        var oPrimaryEntityNode = getPrimaryEntityNode(),
            sSecondaryEntityString = getSecondaryEntityString(),
            bSecondaryEntityChanged = sSecondaryEntityString != sEntityString;
        if (!IsNull(sSecondaryEntityString))
            if (IsNull(sEntityName) || sEntityName.length == 0 || bSecondaryEntityChanged) {
                var oSecondaryEntityNode = getSecondaryEntityNode();
                if (isLinkEntityNode(oSecondaryEntityNode.parentNode))
                    oSecondaryEntityNode = oSecondaryEntityNode.parentNode;
                oPrimaryEntityNode.removeChild(oSecondaryEntityNode)
            }
        if (!IsNull(sEntityName) && sEntityName.length > 0 && bSecondaryEntityChanged) {
            var oNewSecondaryEntityNode,
                sSecondaryEntityAlias = formatString("{0}1", sEntityName);
            if (bIsIntersect) {
                var sIntersectEntityName = saEntityStringElements[4],
                    sIntersectFromAttributeName = saEntityStringElements[7],
                    sIntersectToAttributeName = saEntityStringElements[5],
                    oIntersectEntityNode =
                        createLinkEntityNode(sIntersectEntityName,
                            sIntersectFromAttributeName,
                            sIntersectToAttributeName,
                            null);
                oPrimaryEntityNode.appendChild(oIntersectEntityNode);
                var sSecondaryEntityFromAttribute = saEntityStringElements[6],
                    sSecondaryEntityToAttribute = saEntityStringElements[8];
                oNewSecondaryEntityNode =
                    createLinkEntityNode(sEntityName,
                        sSecondaryEntityFromAttribute,
                        sSecondaryEntityToAttribute,
                        sSecondaryEntityAlias);
                oIntersectEntityNode.appendChild(oNewSecondaryEntityNode)
            } else {
                var sFromAttribute = saEntityStringElements[1],
                    sToAttribute = saEntityStringElements[2];
                oNewSecondaryEntityNode =
                    createLinkEntityNode(sEntityName, sFromAttribute, sToAttribute, sSecondaryEntityAlias);
                oPrimaryEntityNode.appendChild(oNewSecondaryEntityNode)
            }
            oNewSecondaryEntityNode.setAttribute("secondary", 1)
        }
    }

    function setSortAttribute(sAttributeName, bDescending) {
        var oSortNode = getSortNode(),
            oPrimaryEntityNode = getPrimaryEntityNode();
        !IsNull(oSortNode) &&
            oPrimaryEntityNode.removeChild(oSortNode);
        oSortNode = _oFetchXml.createElement("order");
        oSortNode.setAttribute("attribute", sAttributeName);
        oSortNode.setAttribute("descending", bDescending);
        oPrimaryEntityNode.appendChild(oSortNode)
    }
}