
var _oFieldXmlDoc = null,
    _oFieldXslDoc = null,
    _oFieldXslt = CreateXslTemplate(),
    _oRelationShipXmlDoc = null,
    _oRelationShipXslDoc = null,
    _oRelationShipXslt = CreateXslTemplate(),
    _sSortColumnName = "displayname",
    _bSortOrderAscend = true,
    _oLastGridColumnOver = null;

function BuildFieldList(includeHiddenFields) {
    if (typeof includeHiddenFields == "undefined")
        includeHiddenFields = false;
    XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/fields.xsl").toString(),
        false,
        function(xmlDoc) {
            _oFieldXslDoc = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(xmlDoc));
            var _oFriendlyTypeNames = XUI.Xml.LoadXml(_sFriendlyTypeNames),
                documentElementNode = Mscrm.Utilities
                    .getAdoptedNode(_oFieldXslDoc, _oFriendlyTypeNames.documentElement);
            XUI.Xml.SelectSingleNode(_oFieldXslDoc,
                "*/xsl:variable[@name='FriendlyTypeNames']",
                XUI.Xml.CreateNSDictionary(_oFieldXslDoc.documentElement)).appendChild(documentElementNode)
        },
        function(statusCode, xmlDoc) {
            _oFieldXslDoc = null
        });
    _oFieldXslt.stylesheet = _oFieldXslDoc;
    if (includeHiddenFields)
        _oFieldXmlDoc = XUI.Xml.LoadXml(GetFieldsXmlInlcudingHiddenFields());
    else
        _oFieldXmlDoc = XUI.Xml.LoadXml(GetFieldsXml());
    Mscrm.CrmUri.create(window.location.href).get_query()["mode"] === "updateonattr" &&
        RemoveNonPersistentSourceTypes();
    UpdateFieldList(null, false)
}

function RemoveNonPersistentSourceTypes() {
    for (var oNonPersistentProperties = XUI.Xml.SelectNodes(_oAllFieldPropertiesXml,
                 "/entity/entity[@name='" + _sPrimaryEntityName + "']/fields/field[@sourcetype!='0']",
                 null),
        len = oNonPersistentProperties.length,
        parentNode = XUI.Xml.SelectSingleNode(_oFieldXmlDoc, "/fields", null),
        i = 0;
        i < len;
        i++) {
        var nodeToRemove = XUI.Xml.SelectSingleNode(_oFieldXmlDoc,
            "/fields/field[@name='" + oNonPersistentProperties[i].getAttribute("name") + "']",
            null);
        !IsNull(nodeToRemove) &&
            parentNode.removeChild(nodeToRemove)
    }
}

function RefreshFieldExplorer(oFormXml, oPropertiesXml, oFieldsXml) {
    if (Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.dashboardEditor)
        return;
    (!_oFieldXslDoc || _oFieldXslDoc.xml == "") &&
        XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/fieldExplorer.xsl").toString(),
            false,
            function(xmlDoc) {
                _oFieldXslDoc = xmlDoc
            },
            function(statusCode, xmlDoc) {
                _oFieldXslDoc = null
            });
    _oFieldXslt.stylesheet = _oFieldXslDoc;
    _oFieldXmlDoc = XUI.Xml.LoadXml(GetFilteredFieldsXml(oFormXml, oPropertiesXml, oFieldsXml));
    var oFieldXslProc = _oFieldXslt.createProcessor();
    oFieldXslProc.input = _oFieldXmlDoc;
    oFieldXslProc.addParameter("sortColumnName", _sSortColumnName);
    oFieldXslProc.addParameter("userLanguageCode", USER_LANGUAGE_CODE);
    oFieldXslProc.addParameter("sortOrder", _bSortOrderAscend ? "ascending" : "descending");
    oFieldXslProc.addParameter("RTL", LOCID_UI_DIR == "RTL" ? "true" : "false");
    oFieldXslProc.addParameter("ToolTip_DisplayName", _toolTipDisplayName);
    oFieldXslProc.addParameter("ToolTip_DBName", _toolTipSchemaName);
    oFieldXslProc.addParameter("ToolTip_DataType", _toolTipDataType);
    oFieldXslProc.addParameter("isCustomizable", Mscrm.FormEditorVariables.isCustomizabe.toLowerCase());
    try {
        oFieldXslProc.addParameter("languageName", XML_LANGUAGE_NAME);
        oFieldXslProc.transform()
    } catch (err) {
        oFieldXslProc.addParameter("languageName", _twoletterlanguagename);
        oFieldXslProc.transform()
    }
    $get("FieldList").innerHTML = oFieldXslProc.output;
    Mscrm.FieldExplorerUtils.scrollFieldExplorer();
    Mscrm.FormUndoRedo.fldExpRefreshed = true;
    ShowSideStrip()
}

function RefreshRelationShipExplorer() {
    (!_oRelationShipXslDoc || _oRelationShipXslDoc.xml == "") &&
        XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/fieldExplorer.xsl").toString(),
            false,
            function(xmlDoc) {
                _oRelationShipXslDoc = xmlDoc
            },
            function(statusCode, xmlDoc) {
                _oRelationShipXslDoc = null
            });
    _oRelationShipXslt.stylesheet = _oRelationShipXslDoc;
    Mscrm.FormEditorVariables.currentRelationshipFielter = parseInt($get("relationshipFilter").value, 10);
    _oRelationShipXmlDoc = XUI.Xml.LoadXml(Mscrm.RelatioShipExplorerUtils.getFilteredRelationShipsXml());
    var oFieldXslProc = _oRelationShipXslt.createProcessor();
    oFieldXslProc.input = _oRelationShipXmlDoc;
    oFieldXslProc.addParameter("sortColumnName", _sSortColumnName);
    oFieldXslProc.addParameter("userLanguageCode", USER_LANGUAGE_CODE);
    oFieldXslProc.addParameter("sortOrder", _bSortOrderAscend ? "ascending" : "descending");
    oFieldXslProc.addParameter("RTL", LOCID_UI_DIR == "RTL" ? "true" : "false");
    oFieldXslProc.addParameter("ToolTip_DisplayName", _toolTipDisplayName);
    oFieldXslProc.addParameter("ToolTip_DBName", _toolTipSchemaName);
    oFieldXslProc.addParameter("ToolTip_DataType", _toolTipDataType);
    try {
        oFieldXslProc.addParameter("languageName", XML_LANGUAGE_NAME);
        oFieldXslProc.transform()
    } catch (err) {
        oFieldXslProc.addParameter("languageName", _twoletterlanguagename);
        oFieldXslProc.transform()
    }
    $get("FieldList").innerHTML = oFieldXslProc.output;
    Mscrm.FormUndoRedo.fldExpRefreshed = true;
    ShowSideStrip()
}

function GetFilteredFieldsXml(oFormXml, oPropertiesXml, oFieldsXml) {
    var sFieldName,
        sFieldLocName,
        sFilter = null,
        formXmlPath = null;
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        formXmlPath = "/entity/form/tabs/tab/columns/column/sections/" +
            Mscrm.FormEditorVariables.fieldExpIsFor +
            "/rows/row/cell[control/@id]";
        break;
    case "header":
    case "footer":
        formXmlPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows/row/cell[control/@id]";
        break
    }
    Mscrm.FormEditorVariables.currentFieldFilter = parseInt($get("fieldFilter").value, 10);
    switch (Mscrm.FormEditorVariables.currentFieldFilter) {
    case Mscrm.FieldFilter.all:
        sFilter = "";
        if ($get(Mscrm.FormEditorVariables.explorerCheckBoxId).checked)
            sFilter = BuildUsedFormFieldFilter(XUI.Xml.SelectNodes(oFormXml, formXmlPath, null));
        break;
    case Mscrm.FieldFilter.custom:
        sFilter = Mscrm.FieldExplorerUtils.buildCustomFieldFilter(oFieldsXml);
        if ($get(Mscrm.FormEditorVariables.explorerCheckBoxId).checked)
            sFilter = Mscrm.FieldExplorerUtils.buildUnUsedCustomFieldFilter(oFieldsXml);
        break
    }
    var oFields = null;
    if (Mscrm.FormEditorVariables.currentFieldFilter != Mscrm.FieldFilter.custom)
        oFields = XUI.Xml.SelectNodes(oPropertiesXml,
            "/entity/fields/field" + (sFilter.length > 0 ? "[" + sFilter + "]" : ""),
            null);
    else if (sFilter.length > 0)
        oFields = XUI.Xml.SelectNodes(oPropertiesXml,
            "/entity/fields/field" + (sFilter.length > 0 ? "[" + sFilter + "]" : ""),
            null);
    var sFieldsXml = "<fields>";
    if (!IsNull(oFields))
        for (var oEntityField,
            iLen = oFields.length,
            oFormat,
            sFormat,
            i = 0;
            i < iLen;
            i++) {
            sFieldName = oFields[i].getAttribute("name");
            oEntityField = XUI.Xml.SelectSingleNode(oFieldsXml,
                "/entity/fields/field[@name = '" + sFieldName + "']",
                null);
            if (null != oEntityField)
                switch (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oEntityField, "./@datatype", null))) {
                case "primarykey":
                case "uniqueidentifier":
                case "timezone":
                    continue;
                default:
                    if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oEntityField, "./@validforform", null)) == "true")
                        if (Mscrm.FormEditorVariables.FormType != "quickCreate" ||
                            Mscrm.FormEditorVariables.FormType == "quickCreate" &&
                            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oEntityField, "./@validforcreateapi", null)) ==
                            "true") {
                            oFormat = oFields[i].getAttribute("format");
                            if (oFormat == null)
                                sFormat = "";
                            else
                                sFormat = oFormat;
                            sFieldsXml += '<field name="' +
                                CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName) +
                                '" displayname="' +
                                CrmEncodeDecode
                                .CrmXmlAttributeEncode(XUI.Xml
                                    .GetText(XUI.Xml
                                        .SelectSingleNode(oFields[i],
                                            'displaynames/displayname[@languagecode = "' +
                                            CrmEncodeDecode.CrmXmlAttributeEncode(USER_LANGUAGE_CODE) +
                                            '"]/@description',
                                            null))) +
                                '" datatype="' +
                                CrmEncodeDecode
                                .CrmXmlAttributeEncode(XUI.Xml
                                    .GetText(XUI.Xml
                                        .SelectSingleNode(oFieldsXml,
                                            '/entity/fields/field[@name = "' +
                                            CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName) +
                                            '"]/@datatype',
                                            null))) +
                                '" format="' +
                                CrmEncodeDecode.CrmXmlAttributeEncode(sFormat) +
                                '" required="' +
                                CrmEncodeDecode
                                .CrmXmlAttributeEncode(XUI.Xml
                                    .GetText(XUI.Xml
                                        .SelectSingleNode(oFieldsXml,
                                            '/entity/fields/field[@name = "' +
                                            CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName) +
                                            '"]/@requiredforplatform',
                                            null))) +
                                '" orgrequired="' +
                                CrmEncodeDecode
                                .CrmXmlAttributeEncode(XUI.Xml
                                    .GetText(XUI.Xml
                                        .SelectSingleNode(oPropertiesXml,
                                            '/entity/fields/field[@name = "' +
                                            CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName) +
                                            '"]/@requiredlevel',
                                            null))) +
                                '"/>'
                        }
                    break
                }
        }
    sFieldsXml += "</fields>";
    return sFieldsXml
}

function BuildUsedFormFieldFilter(oNodes) {
    for (var sFilter = "",
        iLen = oNodes.length,
        i = 0;
        i < iLen;
        i++) {
        if (i != 0)
            sFilter += " and ";
        var controlId = XUI.Xml.SelectSingleNode(oNodes[i], "control", null).getAttribute("id");
        if (controlId.startsWith("header_") || controlId.startsWith("footer_"))
            controlId = controlId.substr(7);
        sFilter += "@name != '" + controlId + "'"
    }
    return sFilter
}

function UpdateGridBar(sSortColumnName, bSortOrderAscend, bSelectAll) {
    for (var rowIndex = 0; rowIndex < _tblGridBar.rows.length; rowIndex++)
        for (var aCells = _tblGridBar.rows[rowIndex].cells,
            i = 0;
            i < aCells.length;
            i++) {
            var oCell = aCells[i];
            if (oCell.className == "ViewForm_AddFields_th_gridheader") {
                var oImg = XUI.Html.DomUtils.GetFirstChild(oCell).children[0];
                oImg.style.visibility = sSortColumnName == oCell.getAttribute("field") ? "visible" : "hidden";
                var imgTitle = sSortColumnName == oCell.getAttribute("field")
                    ? bSortOrderAscend ? LOCID_ALT_COLUMNSORTORDER_UP : LOCID_ALT_COLUMNSORTORDER_DOWN
                    : "";
                oImg.alt = imgTitle;
                oImg.title = imgTitle;
                Mscrm.Utilities.cancelElementFlipping(oImg);
                !bSortOrderAscend &&
                    Mscrm.Utilities.flipElementVertically(oImg);
                LOCID_UI_DIR == "RTL" &&
                    Mscrm.Utilities.flipElementHorizontally(oImg)
            }
        }
    if (typeof _chkAll != "undefined")
        _chkAll.checked = typeof bSelectAll != "undefined" && bSelectAll ? true : false
}

function UpdateFieldList(oFieldListInfo, bSaveRestoreState) {
    _Fields = $get("Fields");
    oFieldListInfo = "undefined" == typeof oFieldListInfo ? null : oFieldListInfo;
    var oChecked = {};
    if (bSaveRestoreState)
        for (var i = 0; i < _Fields.rows.length; i++) {
            var oRow = _Fields.rows[i];
            oChecked[XUI.Html.GetText(oRow.cells[2])] = XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).checked
        }
    if (!IsNull(oFieldListInfo)) {
        _sSortColumnName = oFieldListInfo.sSortColumnName;
        _bSortOrderAscend = oFieldListInfo.bSortOrderAscend;
        var bSelectAll = oFieldListInfo.bSelectAll;
        $get("FieldList").innerHTML = oFieldListInfo.sHTML
    } else {
        var oFieldXslProc = _oFieldXslt.createProcessor();
        oFieldXslProc.input = _oFieldXmlDoc;
        oFieldXslProc.addParameter("sortColumnName", _sSortColumnName);
        oFieldXslProc.addParameter("sortOrder", _bSortOrderAscend ? "ascending" : "descending");
        oFieldXslProc.addParameter("RTL", LOCID_UI_DIR == "RTL" ? "true" : "false");
        try {
            oFieldXslProc.addParameter("languageName", XML_LANGUAGE_NAME);
            oFieldXslProc.transform()
        } catch (err) {
            oFieldXslProc.addParameter("languageName", _twoletterlanguagename);
            oFieldXslProc.transform()
        }
        $get("FieldList").innerHTML = oFieldXslProc.output
    }
    UpdateGridBar(_sSortColumnName, _bSortOrderAscend, bSelectAll);
    _Fields = $get("Fields");
    if (bSaveRestoreState)
        for (var i = 0; i < _Fields.rows.length; i++) {
            var oRow = _Fields.rows[i];
            XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).checked = oChecked[XUI.Html.GetText(oRow.cells[2])]
        }
    ShowSideStrip()
}

function ShowSideStrip() {
    if (!Mscrm.Utilities.isIE7OrIE7CompactMode()) {
        var fieldElement = $get("Fields");
        !IsNull(fieldElement) &&
            fieldElement.setAttribute("width", "100%")
    }
}

function onGridColumnClick(e) {
    var o = e.target;
    switch (o.tagName) {
    case "IMG":
        return;
    case "NOBR":
        o = o.parentNode
    }
    if (o.className == "ViewForm_AddFields_th_gridheader")
        if (o.getAttribute("field") == _sSortColumnName)
            _bSortOrderAscend = !_bSortOrderAscend;
        else {
            _sSortColumnName = o.getAttribute("field");
            _bSortOrderAscend = true
        }
    UpdateFieldList(null, true)
}

function onGridColumnMouseOver(e) {
    var o = e.target;
    switch (o.tagName) {
    case "IMG":
        return;
    case "NOBR":
        o = o.parentNode
    }
    if (o.className == "ViewForm_AddFields_th_gridheader")
        if (o.title == "" && XUI.Html.GetText(o) != "")
            o.title = XUI.Html.GetText(o)
}