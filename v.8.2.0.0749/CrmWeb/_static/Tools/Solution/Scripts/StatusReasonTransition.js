Type.registerNamespace("Mscrm");
Mscrm.StatusReasonTransition = function() {};
Mscrm.StatusReasonTransition.launchStatusReasonTransitionDialog = function(objectTypeCode, enforceStateTransitions) {
    var $v_0 = Mscrm.CrmUri.create("/tools/SystemCustomization/Attributes/dlg_SetStateModelStatus.aspx"),
        $v_1 = getStatesXml(),
        $v_2 = [$v_1, objectTypeCode, enforceStateTransitions],
        $v_3 = new Mscrm.CrmDialog($v_0, $v_2, 750, 500, null);
    $v_3.setCallbackInfo("launchStatusReasonTransitionCallback", Mscrm.StatusReasonTransition, null);
    $v_3.show()
};
Mscrm.StatusReasonTransition.launchStatusReasonTransitionCallback = function(returnValue) {
    if (returnValue) {
        var $v_0 = returnValue;
        loadStates($v_0[0]);
        resetCurrentState();
        initControls();
        setEnableStatusReasonTransition($v_0[1])
    }
};
Mscrm.StatusReasonTransition.getStateTransitionPath = function(entityTypeCode) {
    return Mscrm.StatusTransitionPathFactory.getTransitionPath(entityTypeCode)
};
Mscrm.StatusReasonTransition.validateTransitionPath = function(transitionDocument, transitionPath, entityTypeCode) {
    var $v_0 = false, $v_1 = 0;
    if (transitionDocument) {
        for (var $v_2 = [], $v_3 = 0;
            $v_3 < transitionPath.$0_0.length;
            $v_3++
        ) $v_2 = $v_2.concat(Mscrm.StatusReasonTransition.$2(transitionPath.$0_0[$v_3], transitionDocument));
        for (var $v_4 = 0; $v_4 < transitionPath.$1_0.length; $v_4++) {
            for (var $v_5 = Mscrm.StatusReasonTransition.$2(transitionPath.$1_0[$v_4], transitionDocument), $v_6 = 0;
                $v_6 < $v_2.length;
                $v_6++) {
                var $v_7 = XUI.Xml.SelectNodes(transitionDocument,
                        "states/state/values/value[@value='" +
                        $v_2[$v_6] +
                        "']/*[local-name() = 'allowedtransitions']/*[local-name() = 'allowedtransition']",
                        null),
                    $v_8 = Mscrm.StatusReasonTransition.$3($v_7);
                $v_0 = Mscrm.StatusReasonTransition.$4($v_8, $v_5);
                if ($v_0) break
            }
            if (!$v_0) {
                $v_1 = transitionPath.$1_0[$v_4];
                break
            }
        }
    }
    if (!$v_0) {
        var $v_9 = Mscrm.StatusTransitionPathFactory.getErrorMessage(entityTypeCode, $v_1);
        Mscrm.StatusReasonTransition.launchStatusReasonConfirmationTransitionDialog($v_9)
    } else if (Mscrm.StatusReasonTransition
        .validateEachStatusReasonTransitions(transitionDocument, transitionPath)
    ) Mscrm.StatusReasonTransition.closeWindowMainDialog();
    else
        Mscrm.StatusReasonTransition.launchStatusReasonConfirmationTransitionDialog(window.LOCID_NO_TRANSITION_DEFINED);
    return $v_0
};
Mscrm.StatusReasonTransition.validateEachStatusReasonTransitions = function(transitionDocument, transitionPath) {
    for (var $v_0 = false, $v_1 = [], $v_2 = 0;
        $v_2 < transitionPath.$0_0.length;
        $v_2++
    ) $v_1 = $v_1.concat(Mscrm.StatusReasonTransition.$2(transitionPath.$0_0[$v_2], transitionDocument));
    for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
        var $v_4 = XUI.Xml.SelectNodes(transitionDocument,
                "states/state/values/value[@value='" +
                $v_1[$v_3] +
                "']/*[local-name() = 'allowedtransitions']/*[local-name() = 'allowedtransition']",
                null),
            $v_5 = Mscrm.StatusReasonTransition.$3($v_4);
        $v_0 = $v_5.length > 0;
        if (!$v_0) break
    }
    return $v_0
};
Mscrm.StatusReasonTransition.$2 = function($p0, $p1) {
    for (var $v_0 = [],
        $v_1 = XUI.Xml.SelectNodes($p1, "states/state[@value='" + $p0 + "']/values/value", null),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) Array.add($v_0, XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("value")));
    return $v_0
};
Mscrm.StatusReasonTransition.$3 = function($p0) {
    for (var $v_0 = [], $v_1 = 0;
        $v_1 < $p0.length;
        $v_1++
    ) Array.add($v_0, XUI.Xml.GetText($p0[$v_1].attributes.getNamedItem("tostatusid")));
    return $v_0
};
Mscrm.StatusReasonTransition.$4 = function($p0, $p1) {
    for (var $v_0 = false, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        for (var $v_2 = 0; $v_2 < $p1.length; $v_2++) {
            $v_0 = $p0[$v_1] === $p1[$v_2];
            if ($v_0) break
        }
        if ($v_0) break
    }
    return $v_0
};
Mscrm.StatusReasonTransition.launchStatusReasonConfirmationTransitionDialog = function(message) {
    var $v_0 = Mscrm.CrmUri.create("/tools/SystemCustomization/Attributes/dlg_SetStateModelStatusConfirm.aspx");
    $v_0.get_query()["message"] = message;
    var $v_1 = new Mscrm.CrmDialog($v_0, $v_0.get_query()["message"].toString(), 550, 200, null);
    $v_1.setCallbackInfo("launchStatusReasonConfirmationCallback", Mscrm.StatusReasonTransition, null);
    return $v_1.show()
};
Mscrm.StatusReasonTransition
    .launchStatusReasonConfirmationCallback = function(returnValue) {
        returnValue && Mscrm.StatusReasonTransition.closeWindowMainDialog()
    };
Mscrm.StatusReasonTransition.closeWindowMainDialog = function() { statustransitionarguments() };
Mscrm.SelectStatusTransition = function() {};
Mscrm.SelectStatusTransition.createAvailableFieldsXml = function(statusTransitionsXml, sourceStatusValue) {
    var $v_0 = createXmlDoc("select");
    addXmlAttribute($v_0, "disablesorting", "false");
    for (var $v_1 = XUI.Xml.SelectNodes(statusTransitionsXml, "states/state", null), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        for (var $v_3 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("value")),
            $v_4 = XUI.Xml.SelectNodes($v_1[$v_2], "values/value", null),
            $v_5 = 0;
            $v_5 < $v_4.length;
            $v_5++)
            if (sourceStatusValue !== XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("value"))) {
                var $v_6 = addXmlNode($v_0, "option");
                addXmlAttribute($v_6, "value", XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("value")));
                addXmlAttribute($v_6, "state", $v_3);
                XUI.Xml.SetText($v_6, XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("label")))
            }
    return $v_0
};
Mscrm.SelectStatusTransition.getAllowedTransitionsForSelectedState = function(xmlDocument, queryExpression) {
    for (var $v_0 = XUI.Xml.SelectNodes(xmlDocument, queryExpression, null), $v_1 = [], $v_2 = 0;
        $v_2 < $v_0.length;
        $v_2++) $v_1[$v_2] = XUI.Xml.GetText($v_0[$v_2].attributes.getNamedItem("tostatusid"));
    return $v_1
};
Mscrm.SetStatusTransition = function() {};
Mscrm.SetStatusTransition.$5 = function($p0) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.SetStatusTransition._updatedStausXml,
        "states/state/values/value[@value=" + CrmEncodeDecode.CrmXmlAttributeEncode($p0) + "]",
        null).parentNode.parentNode;
    return XUI.Xml.GetText($v_0.attributes.getNamedItem("value"))
};
Mscrm.SetStatusTransition.$6 = function($p0) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.SetStatusTransition._updatedStausXml,
        "states/state/values/value[@value=" + CrmEncodeDecode.CrmXmlAttributeEncode($p0) + "]",
        null).parentNode.parentNode;
    return XUI.Xml.GetText($v_0.attributes.getNamedItem("label"))
};
Mscrm.SetStatusTransition.$7 = function($p0) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.SetStatusTransition._updatedStausXml,
        "states/state/values/value[@value=" + CrmEncodeDecode.CrmXmlAttributeEncode($p0) + "]",
        null);
    return XUI.Xml.GetText($v_0.attributes.getNamedItem("label"))
};
Mscrm.SetStatusTransition.getStateIcon = function(statusCode) {
    var $v_0 = "";
    switch (Mscrm.SetStatusTransition.entityTypeCode) {
    case 112:
        switch (statusCode) {
        case "0":
            $v_0 = window.CDNURL + "/_imgs/ico/16_status_active.png";
            break;
        case "1":
            $v_0 = window.CDNURL + "/_imgs/ico/16_status_resolved.png";
            break;
        case "2":
            $v_0 = window.CDNURL + "/_imgs/ico/16_status_canceled.png";
            break
        }
        break;
    default:
        switch (statusCode) {
        case "0":
            $v_0 = window.CDNURL + "/_imgs/ico/16_status_active.png";
            break;
        default:
            $v_0 = window.CDNURL + "/_imgs/ico/16_status_inactive.png";
            break
        }
        break
    }
    return $v_0
};
Mscrm.SetStatusTransition.retrieveTargetTransitionNames = function(queryExpression) {
    for (var $v_0 = "",
        $v_1 = XUI.Xml.SelectNodes(Mscrm.SetStatusTransition._updatedStausXml, queryExpression, null),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("tostatusid")),
            $v_4 = Mscrm.SetStatusTransition.$7($v_3),
            $v_5 = CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.SetStatusTransition.$6($v_3)),
            $v_6 = Mscrm.SetStatusTransition.$5($v_3);
        if ($v_4.length) {
            if (!$v_0.length)
                if (window.LOCID_UI_DIR === "RTL")
                    $v_0 = "<img alt='" +
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_5) +
                        "' src='" +
                        CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.SetStatusTransition.getStateIcon($v_6)) +
                        "' style='float:right;'/>";
                else
                    $v_0 = "<img alt='" +
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_5) +
                        "' src='" +
                        CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.SetStatusTransition.getStateIcon($v_6)) +
                        "' style='float:left;'/>";
            else
                $v_0 += " <img alt='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_5) +
                    "' src='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.SetStatusTransition.getStateIcon($v_6)) +
                    "'/>";
            $v_0 = $v_0 + $v_4 + ";"
        }
    }
    return $v_0
};
Mscrm.SetStatusTransition.resetAllowedStatusTransitions = function() {
    for (var $v_0 = XUI.Xml.SelectNodes(Mscrm.SetStatusTransition._updatedStausXml, "states/state/values/value", null),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) {
        var $v_2 = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("value"));
        XUI.Xml.SetText(XUI.Xml.SelectSingleNode(Mscrm.SetStatusTransition._updatedStausXml,
                "states/state/values/value[@value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_2) + "']",
                null),
            "");
        var $v_3 = $get($v_2 + "_target");
        $v_3.innerHTML = ""
    }
};
Mscrm.SetStatusTransition.$8 = function($p0) {
    var $v_0 = $get($p0 + "_target");
    $v_0.innerHTML = Mscrm.SetStatusTransition
        .retrieveTargetTransitionNames("states/state/values/value[@value=" +
            CrmEncodeDecode.CrmXmlAttributeEncode($p0) +
            "]/*[local-name() = 'allowedtransitions']/*[local-name() = 'allowedtransition']")
};
Mscrm.SetStatusTransition.cleanOrphanAllowedTransitionStatus = function(xmlDocument) {
    for (var $v_0 = XUI.Xml.SelectNodes(xmlDocument,
                 "states/state/values/value/*[local-name() = 'allowedtransitions']/*[local-name() = 'allowedtransition']",
                 null),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) {
        var $v_2 = XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("tostatusid")),
            $v_3 = XUI.Xml.SelectNodes(xmlDocument,
                "states/state/values/value[@value=" + CrmEncodeDecode.CrmXmlAttributeEncode($v_2) + "]",
                null);
        $v_3.length <= 0 && $v_0[$v_1].parentNode.removeChild($v_0[$v_1])
    }
    return xmlDocument
};
Mscrm.SetStatusTransition.updateStateTransitionXml = function(returnValue) {
    if (IsNull(returnValue)) return;
    for (var $v_0 = createXmlDoc("allowedtransitions"),
        $v_1 = returnValue["dstStatusValues"].length > 0 ? returnValue["dstStatusValues"] : new Array(0),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = addXmlNode($v_0, "allowedtransition");
        addXmlAttribute($v_3, "sourcestatusid", returnValue["srcStatusValue"].toString());
        addXmlAttribute($v_3, "tostatusid", $v_1[$v_2].toString())
    }
    XUI.Xml.SetText(XUI.Xml.SelectSingleNode(Mscrm.SetStatusTransition._updatedStausXml,
            "states/state/values/value[@value='" +
            CrmEncodeDecode.CrmXmlAttributeEncode(returnValue["srcStatusValue"].toString()) +
            "']",
            null),
        "");
    XUI.Xml.SelectSingleNode(Mscrm.SetStatusTransition._updatedStausXml,
        "states/state/values/value[@value='" +
        CrmEncodeDecode.CrmXmlAttributeEncode(returnValue["srcStatusValue"].toString()) +
        "']",
        null).appendChild($v_0);
    if (Mscrm.Utilities.isEdge())
        Mscrm.SetStatusTransition._updatedStausXml = getResultNode(Mscrm.SetStatusTransition._updatedStausXml);
    Mscrm.SetStatusTransition.$8(returnValue["srcStatusValue"].toString())
};
Mscrm.SetStatusTransition.openDialog = function(selectedSourceStatus) {
    var $v_0 = {};
    $v_0["stateXml"] = Mscrm.SetStatusTransition._updatedStausXml;
    $v_0["sourceStatusValue"] = selectedSourceStatus;
    $v_0["entityTypeCode"] = Mscrm.SetStatusTransition.entityTypeCode;
    var $v_1 = Mscrm.CrmUri.create("dlg_SelectStatusReason.aspx"),
        $v_2 = new Mscrm.CrmDialog($v_1, $v_0, 750, 500, null);
    $v_2.setCallbackInfo("updateStateTransitionXml", Mscrm.SetStatusTransition, null);
    $v_2.show()
};
Mscrm.StatusTransitionPath = function(sourceStateCodes, destinationStateCodes) {
    this.$0_0 = sourceStateCodes;
    this.$1_0 = destinationStateCodes
};
Mscrm.StatusTransitionPath.prototype = {
    $0_0: null,
    $1_0: null,
    get_sourceStateCodes: function() { return this.$0_0 },
    get_destinationStateCodes: function() { return this.$1_0 }
};
Mscrm.StatusTransitionPathFactory = function() {};
Mscrm.StatusTransitionPathFactory.getTransitionPath = function(entityTypeCode) {
    var $v_0 = null, $v_1 = [], $v_2 = [];
    switch (entityTypeCode) {
    case 112:
        Array.addRange($v_1, [0]);
        Array.addRange($v_2, [1, 2]);
        $v_0 = new Mscrm.StatusTransitionPath($v_1, $v_2);
        break;
    default:
        Array.addRange($v_1, [0]);
        Array.addRange($v_2, [1]);
        $v_0 = new Mscrm.StatusTransitionPath($v_1, $v_2);
        break
    }
    return $v_0
};
Mscrm.StatusTransitionPathFactory.getErrorMessage = function(entityTypeCode, stateCode) {
    var $v_0 = null;
    switch (entityTypeCode) {
    case 112:
        if (stateCode === 1) $v_0 = window.LOCID_NO_TRANSITIONPATH_FROM_ACTIVE_RESOLVE_CASE;
        else $v_0 = window.LOCID_NO_TRANSITIONPATH_FROM_ACTIVE_CANCEL_CASE;
        break;
    default:
        $v_0 = window.LOCID_NO_TRANSITIONPATH_FROM_ACTIVE_INACTIVE_CUSTOMENTITY;
        break
    }
    return $v_0
};
Mscrm.StatusReasonTransition.registerClass("Mscrm.StatusReasonTransition");
Mscrm.SelectStatusTransition.registerClass("Mscrm.SelectStatusTransition");
Mscrm.SetStatusTransition.registerClass("Mscrm.SetStatusTransition");
Mscrm.StatusTransitionPath.registerClass("Mscrm.StatusTransitionPath");
Mscrm.StatusTransitionPathFactory.registerClass("Mscrm.StatusTransitionPathFactory");
Mscrm.SetStatusTransition._updatedStausXml = null;
Mscrm.SetStatusTransition.entityTypeCode = -1