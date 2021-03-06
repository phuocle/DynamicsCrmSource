
var ENTITYLIST_CTRL = "Crm:EntityList",
    FILTER_CTRL = "Crm:FilterControl",
    FILTERFIELDGRP_CTRL = "Crm:FilterFieldGroup",
    FILTERFIELD_CTRL = "Crm:FilterField",
    FIELDLIST_CTRL = "Crm:FieldList",
    OPERATORLIST_CTRL = "Crm:OperatorList",
    CLIENTCONTROl_CTRL = "Crm:ClientControl",
    AUTOSHOW_CTRL = "Crm:AutoShow",
    FILTERENTITY_CTRL = "Crm:FilterEntity",
    QUERYLIST_CTRL = "Crm:QueryList",
    XPATH_SHOWNINSIMPLE = ".//condition[(not(@uihidden) or @uihidden='0')]",
    XPATH_EMPTYFILTER = ".//filter[not(.//condition)]",
    FIELD_GROUP = "fld",
    ENTITY_GROUP = "ent",
    _oFetchXml = null,
    _oClientCache = null,
    _sAliasForLinkEntity;

function ConvertLikeToUserType(s) {
    s = s.replace(/\[%\]/g, "[*]");
    s = s.replace(/%/g, "*");
    s = s.replace(/\[\*\]/g, "%");
    s = s.replace(/\[\[\]/g, "[");
    return s.replace(/\[_\]/g, "_")
}

function GetFetchAttributes(sFetchXml) {
    _oFetchXml = XUI.Xml.LoadXml(sFetchXml);
    for (var sAttribs = "",
        oAttribNodes = XUI.Xml.SelectNodes(_oFetchXml, "/fetch/entity/attribute", null),
        nLength = oAttribNodes.length,
        i = 0;
        i < nLength;
        i++)
        sAttribs += XUI.Xml.XMLSerializer.serializeToString(oAttribNodes[i]);
    if (Trim(sAttribs) == "")
        sAttribs = "<all-attributes />";
    var oOrderNodes = XUI.Xml.SelectNodes(_oFetchXml, "/fetch/entity/order", null);
    if (!IsNull(oOrderNodes))
        for (var i = 0; i < oOrderNodes.length; i++)
            sAttribs += XUI.Xml.XMLSerializer.serializeToString(oOrderNodes[i]);
    return sAttribs
}

function RegisterAjaxControl(ctrl) {
    switch (ctrl.nodeName) {
    case "SELECT":
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-SelectBox") &&
            $create(Mscrm.FormInputControl.SelectInputBehavior, null, null, null, ctrl);
        break;
    case "TABLE":
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-DateTime") &&
            Mscrm.FormInputControl.DateTimeBehavior.registerDateTimeComponents(ctrl.parentNode);
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-FiscalPeriodAndYear") &&
            $create(Mscrm.FiscalPeriodAndYear, null, null, null, ctrl);
        if (Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Lookup")) {
            var img = XUI.Html.DomUtils.GetFirstChild(ctrl.rows[0].cells[1]);
            img.id = ctrl.id + "_img";
            $create(Mscrm.FormInputControl.PresenceLookupUIBehavior, null, null, null, img)
        }
        break;
    case "INPUT":
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Number") &&
            $create(Mscrm.FormInputControl.NumberInputBehavior, null, null, null, ctrl);
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Text") &&
            $create(Mscrm.FormInputControl.TextBoxInputBehavior, null, null, null, ctrl);
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Money") &&
            $create(Mscrm.FormInputControl.MoneyInputBehavior, null, null, null, ctrl);
        Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-CheckBox") &&
            $create(Mscrm.FormInputControl.CheckBoxInputBehavior, null, null, null, ctrl);
        break;
    case "DIV":
        if (Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Input-Container")) {
            var innerInput = XUI.Html.DomUtils.GetFirstChild(ctrl);
            innerInput.id = ctrl.id;
            ctrl.id = ctrl.id + "_container";
            RegisterAjaxControl(innerInput)
        }
        break;
    case "SPAN":
        Sys.UI.DomElement.containsCssClass(ctrl, "multipicklist") &&
            $create(Mscrm.MultiPicklist, null, null, null, ctrl);
        break
    }
}

function UnregisterAjaxControl(ctrl) {
    switch (ctrl.nodeName) {
    case "TABLE":
        if (Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Lookup"))
            ctrl = XUI.Html.DomUtils.GetFirstChild(ctrl.rows[0].cells[1]);
        break;
    case "DIV":
        if (Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Input-Container")) {
            UnregisterAjaxControl(XUI.Html.DomUtils.GetFirstChild(ctrl));
            return
        }
        break
    }
    !IsNull(ctrl) &&
        Mscrm.AdvFind.disposeAndDeleteElement(ctrl)
}

function GetAjaxControl(ctrl) {
    if (ctrl.nodeName == "TABLE" && Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Lookup"))
        return Mscrm.FormControlInputBehavior.GetBehavior(XUI.Html.DomUtils.GetFirstChild(ctrl.rows[0].cells[1]).id);
    if (ctrl.nodeName == "DIV" && Sys.UI.DomElement.containsCssClass(ctrl, "ms-crm-Input-Container"))
        return Mscrm.FormControlInputBehavior.GetBehavior(XUI.Html.DomUtils.GetFirstChild(ctrl).id);
    var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(ctrl.id);
    if (IsNull(ajaxControl))
        ajaxControl = $find(ctrl.id);
    return ajaxControl
}

function ShowIfDetailedOrNotHidden(oCtrl, bNotHidden, iMode) {
    oCtrl.style.display = bNotHidden || iMode == Mscrm.AdvancedFindModes.detailed ? "inline" : "none"
}

function IsDefaultAdvancedFindView(sQueryId, sEntityName, oClientCache) {
    var oQryData = oClientCache.GetElement("DefaultAdvFindView", sEntityName);
    if (!IsNull(oQryData))
        return oQryData.QueryId == sQueryId;
    return false
}

function ConfigureToolbars(oAdvFind) {
    var oToolbar,
        sOp = "attachclick";
    oToolbar = $find(oAdvFind.get_id() + "mnuBar7");
    if (!IsNull(oToolbar)) {
        var obuttonContainer = XUI.Html.DomUtils.GetFirstChild(oToolbar.get_element());
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnSave", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').Save()");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnSaveAs", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').SaveAs()");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnNew", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').StartNew()");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnEditView", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').EditView()");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnEditProperties", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').EditProperties()")
    }
    oToolbar = $find(oAdvFind.get_id() + "mnuBar5");
    if (!IsNull(oToolbar) && oAdvFind.get_modes() & Mscrm.AdvancedFindModes.detailed) {
        var obuttonContainer = XUI.Html.DomUtils.GetFirstChild(oToolbar.get_element());
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnSimple", obuttonContainer),
            "$find('" +
            oAdvFind.get_id() +
            "').set_mode(" +
            Mscrm.AdvancedFindModes.simple +
            ");$find('" +
            oAdvFind.get_id() +
            "').ConfigureMode()");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnAnd", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').Group('and')");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnOr", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').Group('or')");
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnClear", obuttonContainer),
            "$find('" + oAdvFind.get_id() + "').Clear(true,false)")
    }
    oToolbar = $find(oAdvFind.get_id() + "mnuBar6");
    if (!IsNull(oToolbar) && oAdvFind.get_modes() & Mscrm.AdvancedFindModes.simple) {
        var obuttonContainer = XUI.Html.DomUtils.GetFirstChild(oToolbar.get_element());
        PerformToolbarOperation(sOp,
            oToolbar,
            $get("btnDetailed", obuttonContainer),
            "$find('" +
            oAdvFind.get_id() +
            "').set_mode(" +
            Mscrm.AdvancedFindModes.detailed +
            ");$find('" +
            oAdvFind.get_id() +
            "').ConfigureMode()")
    }
}

function generateNextAlias(sAlias) {
    var c1 = sAlias.charCodeAt(0),
        c2 = sAlias.charCodeAt(1);
    c2++;
    if (c2 > 122) {
        c2 = 97;
        c1++;
        if (c1 > 122)
            return null
    }
    return String.fromCharCode(c1, c2)
}

function GetNextAliasForLinkEntity(sLayoutXml, sAliasesInInitialFetch) {
    if (IsNull(_sAliasForLinkEntity) || _sAliasForLinkEntity.length == 0)
        _sAliasForLinkEntity = "aa";
    else
        _sAliasForLinkEntity = generateNextAlias(_sAliasForLinkEntity);
    var regEx = new RegExp("name\\s*=\\s*['|\"]" + _sAliasForLinkEntity + ".", "igm");
    while (regEx.test(sLayoutXml) || sAliasesInInitialFetch.indexOf("|" + _sAliasForLinkEntity + "|") != -1) {
        _sAliasForLinkEntity = generateNextAlias(_sAliasForLinkEntity);
        regEx.source = "name\\s*=\\s*['|\"]" + _sAliasForLinkEntity + "."
    }
    return _sAliasForLinkEntity
}

function GetOrderNodeAttrAndDirection(fetchDom) {
    var sortcolumn = "",
        oOrderNodes = XUI.Xml.SelectNodes(fetchDom, "/fetch/entity/order", null);
    if (oOrderNodes != null && oOrderNodes.length > 0)
        for (var i = 0; i < oOrderNodes.length; i++) {
            var s = oOrderNodes[i].getAttribute("attribute");
            sortcolumn += s == null ? "" : s;
            sortcolumn += ":";
            s = oOrderNodes[i].getAttribute("descending");
            s = s == null ? "0" : s;
            sortcolumn += s == "true" || s == "0" ? "0" : "1";
            sortcolumn += ";"
        }
    return sortcolumn
}