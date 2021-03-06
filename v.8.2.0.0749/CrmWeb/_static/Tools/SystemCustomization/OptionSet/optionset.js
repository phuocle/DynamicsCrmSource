Type.registerNamespace("Mscrm");
Mscrm.OptionSet = function() {};
Mscrm.OptionSet.$5 = function() {
    var $v_0 = true, $v_1 = $get("txtDisplayName");
    $v_0 = $v_0 && validateRequiredValue($v_1);
    var $v_2 = $get("txtSchemaName");
    $v_0 = $v_0 && ($v_2.disabled || validateSchemaName($v_2));
    var $v_3 = $get("ledtPicklistValues_txtItemColor");
    $v_0 = $v_0 && validateColorValue($v_3);
    return $v_0
};
Mscrm.OptionSet.onDisplayNameChange = function() {
    if (!IsNull(window._bCreate) && window._bCreate) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("txtDisplayName"),
            $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("txtSchemaName"),
            $v_2 = $v_0.get_dataValue(),
            $v_3 = $v_1.get_dataValue();
        if (!IsNull($v_2) && $v_2.length > 0 && (IsNull($v_3) || !$v_3.length)) {
            var $v_4 = new RegExp("[^A-Za-z0-9_]", "g");
            $v_1.set_dataValue($v_2.replace($v_4, "").substr(0, $v_1.get_maxLength()))
        }
    }
};
Mscrm.OptionSet.getListXml = function() {
    var $v_0 = createXmlDoc("optionset");
    addTextXmlNode($v_0, "optionsetid", window._optionSetId);
    Mscrm.OptionSet.addSchemaXml($v_0);
    return convertXmlDocToString($v_0)
};
Mscrm.OptionSet.addSchemaXml = function(oDataXml) {
    var $v_0 = $get("txtDisplayName"),
        $v_1 = $get("txtSchemaName"),
        $v_2 = $get("txtDescription"),
        $v_3 = $get("txtPrefix"),
        $v_4 = $find("ledtPicklistValues"),
        $v_5 = $get("txtHelpURL");
    addControlDataValue(oDataXml, "displayname", $v_0);
    if (!IsNull($v_3)) {
        var $v_7 = XUI.Html.GetText($v_3) + $v_1.value;
        addTextXmlNode(oDataXml, "schemaname", $v_7)
    } else addControlDataValue(oDataXml, "schemaname", $v_1);
    addControlDataValue(oDataXml, "description", $v_2);
    !IsNull($v_5) && addControlDataValue(oDataXml, "entityhelpurl", $v_5);
    var $v_6 = addXmlNode(oDataXml, "type");
    addXmlString($v_6, $v_4.get_xmlData())
};
Mscrm.OptionSet.publish = function() {
    var $v_0 = Mscrm.OptionSet.$0();
    if (!$v_0 || $v_0 && confirm(window.LOCID_OPTIONSET_PUBLISHUNSAVED)) {
        DisplayActionMsg(window.LOCID_OPTIONSET_PUBLISHING, 400, 150);
        window.setTimeout(Mscrm.OptionSet.$3, 100)
    }
};
Mscrm.OptionSet.$3 = function() {
    try {
        var $v_0 = createXmlDoc("importexportxml"), $v_1 = addXmlNode($v_0, "optionsets");
        addTextXmlNode($v_1, "optionset", window._optionSetId);
        var $v_2 = convertXmlDocToString($v_0),
            $v_3 = new RemoteCommand("SystemCustomization", "PublishCustomizations", null);
        $v_3.SetXmlParameter("data", $v_2);
        var $v_4 = $v_3.Execute(null)
    } finally {
        HideActionMsg()
    }
};
Mscrm.OptionSet._save = function() { Mscrm.OptionSet.savePicklistAction(false, false) };
Mscrm.OptionSet._saveandclose = function() { Mscrm.OptionSet.savePicklistAction(true, false) };
Mscrm.OptionSet._saveandnew = function() { Mscrm.OptionSet.savePicklistAction(false, true) };
Mscrm.OptionSet.savePicklistAction = function(bClose, bNew) {
    if (!window._bSaving && Mscrm.OptionSet.$5()) {
        window._bSaving = true;
        var $v_0 = Mscrm.OptionSet.getListXml();
        if (window._bCreate) Mscrm.OptionSet.createOptionSet($v_0, bClose, bNew);
        else if (Mscrm.OptionSet.$0()) Mscrm.OptionSet.updateOptionSet($v_0, bClose, bNew);
        else if (bClose) {
            Mscrm.Utilities.setReturnValue(window._optionSetId);
            closeWindow();
            return
        } else window._bSaving = false
    }
};
Mscrm.OptionSet.createOptionSet = function(sDataXml, bClose, bNew) {
    var $v_0 = new RemoteCommand("SystemCustomization", "CreateOptionSet", null);
    $v_0.SetXmlParameter("data", sDataXml);
    var $v_1 = $v_0.Execute(null);
    Mscrm.OptionSet.$1($v_1, bClose, bNew)
};
Mscrm.OptionSet.updateOptionSet = function(sDataXml, bClose, bNew) {
    var $v_0 = new RemoteCommand("SystemCustomization", "UpdateOptionSet", null);
    $v_0.SetXmlParameter("data", sDataXml);
    var $v_1 = $v_0.Execute(null);
    Mscrm.OptionSet.$1($v_1, bClose, bNew)
};
Mscrm.OptionSet.page_BeforeUnload = function(eventObject) {
    if (!window._bSaving && Mscrm.OptionSet.$0()) {
        eventObject.rawEvent.returnValue = window.LOCID_FORMS_SAVE_CONFIRM_TITLE;
        return LOCID_FORMS_SAVE_CONFIRM_TITLE
    }
};
Mscrm.OptionSet.$4 = function($p0) {
    switch ($p0.keyCode) {
    case 27:
        closeWindow();
        $p0.preventDefault();
        break;
    case 83:
        if ($p0.ctrlKey) {
            $p0.altKey && $p0.preventDefault();
            if (!$p0.shiftKey)
                if (!window._bView) {
                    Mscrm.OptionSet.$2($p0.target);
                    Mscrm.OptionSet._save()
                }
            $p0.preventDefault()
        } else if ($p0.altKey) {
            if (!window._bView) {
                Mscrm.OptionSet.$2($p0.target);
                Mscrm.OptionSet._saveandclose()
            }
            $p0.preventDefault()
        }
        break
    }
};
Mscrm.OptionSet.$2 = function($p0) {
    if (!IsNull($p0) && !IsNull($p0.tagName))
        if ($p0.tagName.toLowerCase() === "input") {
            var $v_0 = $p0;
            XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("change"))
        }
};
Mscrm.OptionSet.page_Onload = function() {
    Mscrm.OptionSet._sInputXml = Mscrm.OptionSet.getListXml();
    $addHandler(document, "keydown", Mscrm.OptionSet.$4);
    attachWindowOnBeforeUnload(Mscrm.OptionSet.page_BeforeUnload, window.self)
};
Mscrm.OptionSet.deleteOptionSet = function(sDataXml) {
    var $v_0 = new RemoteCommand("SystemCustomization", "DeleteOptionSet", null);
    $v_0.SetParameter("optionSetId", window._optionSetId);
    var $v_1 = $v_0.Execute(null);
    !IsNull($v_1.ReturnValue) && $v_1.ReturnValue.Used && showUsage("OptionSet", $v_1.ReturnValue)
};
Mscrm.OptionSet.$0 = function() {
    if (window._bView) return false;
    return Mscrm.OptionSet._sInputXml !== Mscrm.OptionSet.getListXml()
};
Mscrm.OptionSet.$1 = function($p0, $p1, $p2) {
    if ($p0.Success) {
        if ($p0.RemoteCommand.Command === "CreateOptionSet") window._optionSetId = $p0.ReturnValue;
        if ($p0.RemoteCommand.Command === "CreateOptionSet" || $p0.RemoteCommand.Command === "UpdateOptionSet")
            try {
                var $v_1 = window.opener.$find(Mscrm.Utilities.getGridId(window.opener));
                !IsNull($v_1) && $v_1.refresh()
            } catch ($$e_4) {
            }
        if ($p1) {
            Mscrm.Utilities.setReturnValue(window._optionSetId);
            closeWindow();
            return true
        }
        var $v_0 = document.getElementsByName("frmReload")[0];
        if ($p2) {
            $v_0.action = Mscrm.CrmUri.create("optionset.aspx").toString();
            $v_0.submit();
            return true
        }
        $v_0.action = Mscrm.CrmUri.create("optionset.aspx?id=" + window._optionSetId).toString();
        $v_0.submit();
        return true
    }
    window._bSaving = false;
    return false
};
Mscrm.OptionSet.registerClass("Mscrm.OptionSet");
Mscrm.OptionSet._sInputXml = ""