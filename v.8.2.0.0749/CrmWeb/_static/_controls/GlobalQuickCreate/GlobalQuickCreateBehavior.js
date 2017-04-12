Type.registerNamespace("Mscrm.GlobalQuickCreate");
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior = function() {};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .launchGlobalQuickCreate = function(callbacks,
        entityDisplayName,
        quickFormEtc,
        timestampDictionary,
        createFromId,
        createFromType,
        searchText,
        width,
        height,
        extraParams) {
        window.self.QuickCreateFormLoadStartTime = (new Date).getTime();
        Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().push(entityDisplayName);
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$13(callbacks);
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .$10(callbacks,
                quickFormEtc,
                timestampDictionary,
                width,
                height,
                createFromId,
                createFromType,
                searchText,
                extraParams)
    };
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .xrmLaunchGlobalQuickCreate = function(successCallback,
        errorCallback,
        entityLogicalName,
        createFromEntity,
        extraParameters) {
        var $v_0 = Xrm.Internal.getEntityCode(entityLogicalName),
            $v_1 = new Mscrm.GlobalQuickCreate.XrmGlobalQuickCreateCallbacks(successCallback, errorCallback, 990),
            $v_2 = null,
            $v_3 = -1;
        if (!IsNull(createFromEntity)) {
            $v_2 = createFromEntity.id;
            $v_3 = Xrm.Internal.getEntityCode(createFromEntity.entityType)
        }
        var $v_4 = Xrm.Internal.getEntityDisplayName(entityLogicalName);
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
            .launchGlobalQuickCreate($v_1, $v_4, $v_0, null, $v_2, $v_3, null, null, null, extraParameters)
    };
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.showGlobalQuickCreate = function() {
    var $v_0 = window.self._globalQuickCreate;
    !IsNull($v_0) &&
        $v_0 &&
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.executeCallbacksAssociatedWithGlobalQuickCreate("open")
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .executeCallbacksAssociatedWithGlobalQuickCreate = function(callbackType, result) {
        var $v_0 = window.self._globalQuickCreate;
        if (!IsNull($v_0) && $v_0) {
            var $v_1 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$m(),
                $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9($v_1.id);
            if (!IsNull($v_2))
                switch (callbackType) {
                case "open":
                    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$i($v_2, $v_1);
                    break;
                case "saveinitiated":
                    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$k($v_2, $v_1);
                    break;
                case "savesuccess":
                    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$l($v_2, result, $v_1);
                    break;
                case "savefailure":
                    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$j($v_2, result, $v_1);
                    break;
                default:
                    break
                }
        }
    };
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.removeGlobalQuickCreateAttachedEvents = function(quickCreateFrameId) {
    var $v_0 = window.self;
    if (quickCreateFrameId !== "NavBarGloablQuickCreate") $v_0 = window.parent;
    var $v_1 = $v_0.document.getElementById(CrmEncodeDecode
        .CrmHtmlAttributeEncode(String.format("globalquickcreate_save_button_{0}", quickCreateFrameId)));
    !IsNull($v_1) && $removeHandler($v_1, "click", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$W);
    var $v_2 = $v_0.document.getElementById(CrmEncodeDecode
        .CrmHtmlAttributeEncode(String.format("globalquickcreate_cancel_button_{0}", quickCreateFrameId)));
    !IsNull($v_2) && $removeHandler($v_2, "click", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$T);
    var $v_3 = $v_0.document.getElementById(CrmEncodeDecode
        .CrmHtmlAttributeEncode(String.format("globalquickcreate_cross_anchor_{0}", quickCreateFrameId)));
    if (!IsNull($v_3)) {
        $removeHandler($v_3, "click", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$U);
        $removeHandler($v_3, "keydown", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$V)
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .showGlobalQuickCreateContainer = function(quickCreateFrameId, isTurboForm) {
        if (isTurboForm &&
            !isNullOrEmptyString(quickCreateFrameId) &&
            (Mscrm.Utilities.isIE() || Mscrm.Utilities.isFirefox())) {
            var $v_0 = CrmEncodeDecode
                    .CrmHtmlAttributeEncode(String.format("globalquickcreate_container_{0}", quickCreateFrameId)),
                $v_1 = window.top.document.getElementById($v_0);
            if (!IsNull($v_1)) $v_1.style.visibility = "visible"
        }
    };
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$13 = function($p0) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$I(),
        $v_1 = {},
        $v_2 = $p0.get_callbackDictionary(),
        $$dict_5 = $v_2;
    for (var $$key_6 in $$dict_5) {
        var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_1[$v_3.key] = $v_3.value
    }
    $v_0[String.format(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$K,
        $p0.$0_0,
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$L,
        Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length())] = $v_1
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$i = function($p0, $p1) {
    window.parent.QuickCreateIFrameLoadingEndTime = (new Date).getTime();
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$14($p1);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$a($p1);
    var $v_0 = $p0.onQuickCreateLoadCallback, $v_1 = Mscrm.Utilities.executeFunction($v_0, null);
    !IsNull($v_1) && $v_1 && Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8($p1.id)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$k = function($p0, $p1) {
    var $v_0 = $P_CRM($p1);
    $v_0.attr("isErrorNotificatonVisible") == "true" && $v_0.css("margin-top", "-22px");
    var $v_1 = $p0.onQuickCreateSaveInitiatedCallback, $v_2 = Mscrm.Utilities.executeFunction($v_1, null);
    !IsNull($v_2) && $v_2 && Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8($p1.id)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$l = function($p0, $p1, $p2) {
    var $v_0 = $p0.onQuickCreateSaveSuccessCallback, $v_1 = Mscrm.Utilities.executeFunction($v_0, $p1);
    !IsNull($v_1) && $v_1 && Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8($p2.id)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$j = function($p0, $p1, $p2) {
    var $v_0 = $p0.onQuickCreateSaveFailCallback, $v_1 = Mscrm.Utilities.executeFunction($v_0, $p1);
    !IsNull($v_1) && $v_1 && Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8($p2.id);
    if (!IsNull($p1)) {
        var $v_2 = $p1["_error"], $v_3 = !IsNull($v_2) ? $v_2["DisplayText"] : null;
        if (!isNullOrEmptyString($v_3)) {
            var $v_4 = $P_CRM($p2);
            $v_4.attr("isErrorNotificatonVisible", "true");
            $v_4.css("margin-top", "22px")
        }
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$h = function($p0, $p1) {
    var $v_0 = $p0.onQuickCreateStopLoadCallback, $v_1 = Mscrm.Utilities.executeFunction($v_0, null);
    if (!IsNull($v_1) && $v_1) {
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8($p1);
        return true
    }
    return false
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$R = function($p0, $p1) {
    var $v_0 = $p0.onQuickCreateCancelCallback, $v_1 = Mscrm.Utilities.executeFunction($v_0, null);
    !IsNull($v_1) && $v_1 && Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8($p1)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$14 = function($p0) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9($p0.id),
        $v_1 = new Mscrm.GlobalQuickCreate.RefreshFormCallbacks($p0.id),
        $v_2 = $v_1.get_callbackDictionary(),
        $$dict_5 = $v_2;
    for (var $$key_6 in $$dict_5) {
        var $v_4 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_0[$v_4.key] = $v_4.value
    }
    var $v_3 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$I();
    $v_3[String.format(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$K,
        $v_1.$0_0,
        Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$L,
        Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length())] = $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$a = function($p0) {
    var $v_0 = $get("rofContainer");
    $v_0.style.top = "0px";
    var $v_1 = $get("mainContainer");
    $v_1.style.left = "23px";
    var $v_2 = $get("tdAreas"), $v_3 = null;
    if (Mscrm.Utilities.isEdge()) $v_3 = "165px";
    else $v_3 = $v_2.scrollHeight + "px";
    $p0.style.height = $v_3;
    $v_2.style.height = "100%";
    $v_2.style.maxHeight = "100%";
    $v_2.className = "ms-crm-Form-AreaContainerQuick  ms-crm-Form-Background"
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$8 = function($p0) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$I();
    if (!IsNull($v_0) && !IsNull($p0)) {
        $v_0[String.format(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$K,
            $p0,
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$L,
            Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length())] = null;
        $p0 = null
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$I = function() {
    var $v_0 = window.parent, $v_1 = $v_0.parent;
    while ($v_1 !== $v_0) {
        $v_0 = $v_1;
        $v_1 = $v_0.parent
    }
    return $v_1
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$J = function() {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$I();
    return $v_0.document
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3 = function() {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$J();
    return $v_0.body
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$m = function() {
    for (var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$J(),
        $v_1 = $v_0.getElementsByTagName("iframe"),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = $v_1[$v_2], $v_4 = null;
        try {
            $v_4 = !IsNull($v_3.contentDocument) ? $v_3.contentDocument : $v_3.contentWindow.document
        } catch ($$e_5) {
            continue
        }
        if ($v_4 === window.document) return $v_3
    }
    return null
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9 = function($p0) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$I();
    if ($v_0) {
        var $v_1 = $v_0[String.format(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$K,
            $p0,
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$L,
            Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length())];
        return $v_1
    }
    return null
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$10 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$y($p2),
        $v_1 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$o($p8),
        $v_2 = String
            .format("/_forms/read/page.aspx?showglobalquickcreate=true&etc={0}&setLastViewed=false&hidecommandbar=true{1}&_CreateFromId={2}&_CreateFromType={3}&_searchText={4}{5}", CrmEncodeDecode.CrmUrlEncode($p1.toString()), $v_0, CrmEncodeDecode.CrmUrlEncode($p5), CrmEncodeDecode.CrmUrlEncode(IsNull($p6) ? "" : $p6.toString()), CrmEncodeDecode.CrmUrlEncode($p7), $v_1),
        $v_3 = Mscrm.CrmUri.create($v_2),
        $v_4 = $v_3.isTurboFormUrl();
    if ($v_4) {
        var $v_8 = Mscrm.CrmUri.create("/form/page.aspx");
        $v_8.set_fragment($v_3.get_queryString().substr(1));
        $v_3 = $v_8;
        $p0.$7_0 = true
    }
    var $v_5 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
        $v_6 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$d($v_5.ownerDocument, $p0.$0_0, $v_4),
        $v_7 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$f($v_6, $p0.$0_0, $p3, $p4, $v_4);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$g($v_6, $p0.$0_0, $p0.$6_0, $p3);
    $v_6.parentNode !== $v_5 && $v_5.insertBefore($v_6, XUI.Html.DomUtils.GetFirstChild($v_5));
    $v_3.set_includeContextInPath(true);
    $v_7.contentWindow.location.replace($v_3.toString());
    window.self.QuickCreateIFrameLoadingStartTime = (new Date).getTime()
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$y = function($p0) {
    var $v_0 = new Sys.StringBuilder;
    if (!IsNull($p0)) {
        var $$dict_3 = $p0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0.append(String.format(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Q,
                CrmEncodeDecode.CrmUrlEncode($v_1.key),
                CrmEncodeDecode.CrmUrlEncode($v_1.value.toString())))
        }
    }
    return $v_0.toString()
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$o = function($p0) {
    var $v_0 = new Sys.StringBuilder;
    if (!IsNull($p0)) {
        var $$dict_3 = $p0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0.append(String.format(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Q,
                CrmEncodeDecode.CrmUrlEncode($v_1.key.toString()),
                CrmEncodeDecode.CrmUrlEncode($v_1.value.toString())))
        }
    }
    return $v_0.toString()
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$S = function($p0) {
    return !$p0 ||
        !Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0 ||
        Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length() > 1
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$d = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(), $v_1 = null;
    if (Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$S($p2)) {
        $v_1 = $p0.createElement("DIV");
        $v_1.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_maincontainerdiv_{0}", $p1))
    } else {
        $v_1 = $get(CrmEncodeDecode.CrmHtmlAttributeEncode(String
                .format("globalquickcreate_maincontainerdiv_{0}",
                    Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0.id)),
            $v_0);
        $v_1.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_maincontainerdiv_{0}", $p1))
    }
    return $v_1
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$g = function($p0, $p1, $p2, $p3) {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$e($p1, $p2, $p3);
    $v_0.style.top = 50 + "px";
    $p0.appendChild($v_0);
    var $v_1 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Y($p0.ownerDocument, $p1, $p2);
    $p0.appendChild($v_1);
    if (Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length() > 0) {
        var $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Z($p0.ownerDocument, $p1, $p2);
        $p0.appendChild($v_2)
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$f = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0, $v_1 = null, $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3();
    if (Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$S($p4)) {
        $v_1 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$r($p1, $p2);
        $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$w($p1, $p3);
        $v_1.appendChild($v_0);
        $p0.appendChild($v_1);
        if ($p4 && !Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0
        ) Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0 = $v_0
    } else {
        $v_1 = $get(CrmEncodeDecode.CrmHtmlAttributeEncode(String
                .format("globalquickcreate_container_{0}",
                    Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0.id)),
            $v_2);
        $v_1.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_container_{0}", $p1));
        Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0.id = CrmEncodeDecode
            .CrmHtmlAttributeEncode($p1);
        $v_0 = Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().$4_0;
        if (Mscrm.Utilities.isEdge()) $v_0.style.height = "165px"
    }
    var $v_3 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$n($p1);
    $v_1.appendChild($v_3);
    if ($p4 && (Mscrm.Utilities.isIE() || Mscrm.Utilities.isFirefox())) {
        $v_1.style.display = "block";
        $v_1.style.visibility = "hidden"
    }
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$n = function($p0) {
    var $v_0 = document.createElement("DIV");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_actionsdiv_{0}", $p0));
    $v_0.className = "mscrm-globalqc-actionsdiv";
    var $v_1 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$x($p0);
    $v_0.appendChild($v_1);
    var $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$q($p0);
    $v_0.appendChild($v_2);
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$x = function($p0) {
    var $v_0 = document.createElement("BUTTON");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_save_button_{0}", $p0));
    $v_0.className = "mscrm-globalqc-actionbutton";
    $v_0.setAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
        .$H,
        CrmEncodeDecode.CrmHtmlAttributeEncode($p0));
    $addHandler($v_0, "click", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$W);
    $v_0.appendChild(document.createTextNode(window.LOCID_SAVE_GLOBAL_QUICKCREATE));
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$W = function($p0) {
    var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "BUTTON"),
        $v_1 = $v_0.getAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$H),
        $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9($v_1),
        $v_3 = $v_2.onRefreshFormSaveCallback;
    Mscrm.Utilities.executeFunction($v_3, null)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.closeAllGlobalQuickCreateForms = function() {
    if (Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length() > 0) {
        var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.allQuickForms();
        $v_0.each(function($p1_0, $p1_1) {
            var $v_1 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9($p1_1.id);
            $v_1 && Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$R($v_1, $p1_1.id)
        })
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.allQuickForms = function() {
    var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$J(),
        $v_1 = $P_CRM($v_0),
        $v_2 = $v_1.find(".mscrm-globalqc-iframe");
    return $v_2
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$q = function($p0) {
    var $v_0 = document.createElement("BUTTON");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_cancel_button_{0}", $p0));
    $v_0.className = "mscrm-globalqc-actionbutton mscrm-globalqc-actionbutton-last";
    $v_0.setAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
        .$H,
        CrmEncodeDecode.CrmHtmlAttributeEncode($p0));
    $addHandler($v_0, "click", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$T);
    $v_0.appendChild(document.createTextNode(window.LOCID_CANCEL_GLOBAL_QUICKCREATE));
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$T = function($p0) {
    var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "BUTTON"),
        $v_1 = $v_0.getAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$H),
        $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9($v_1);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$R($v_2, $v_1)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$w = function($p0, $p1) {
    var $v_0 = document.createElement("iframe");
    $v_0.className = "mscrm-globalqc-iframe";
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode($p0);
    if (!isNullOrEmptyString($p1)) $v_0.style.height = $p1;
    if (Mscrm.Utilities.isIE8()) $v_0.frameBorder = "0";
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$r = function($p0, $p1) {
    var $v_0 = document.createElement("DIV");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_container_{0}", $p0));
    $v_0.className = "mscrm-globalqc-containerdiv ms-crm-HighContrastMode-Border";
    $v_0.style.position = "absolute";
    $v_0.style.top = "-1000px";
    $v_0.style.zIndex = -1e3;
    $v_0.style.width = !isNullOrEmptyString($p1) ? $p1 : "100%";
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$e = function($p0, $p1, $p2) {
    var $v_0 = document.createElement("DIV");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_entityinfo_{0}", $p0));
    $v_0.className = "mscrm-globalqc-parentdiv ms-crm-HighContrastMode-Border";
    $v_0.style.width = !isNullOrEmptyString($p2) ? $p2 : "100%";
    var $v_1 = document.createElement("DIV");
    $v_1.className = "mscrm-globalqc-entitycrossdiv";
    $v_0.appendChild($v_1);
    var $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$v($p0);
    $v_1.appendChild($v_2);
    var $v_3 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$p();
    $v_1.appendChild($v_3);
    var $v_4 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$s($p0);
    $v_1.appendChild($v_4);
    var $v_5 = document.createElement("DIV");
    $v_5.className = "mscrm-globalqc-cleardiv";
    $v_1.appendChild($v_5);
    var $v_6 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$t($p0);
    $v_1.appendChild($v_6);
    $v_0.style.zIndex = $p1 + 2;
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$t = function($p0) {
    var $v_0 = document.createElement("DIV");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_error_message_{0}", $p0));
    $v_0.className = "mscrm-globalqc-errormessage";
    $v_0.style.display = "none";
    var $v_1 = document.createElement("img");
    $v_1.src = "/_imgs/inlineedit/warning.png";
    $v_1.style.verticalAlign = "middle";
    $v_0.appendChild($v_1);
    var $v_2 = document.createElement("SPAN");
    $v_2.className = "mscrm-globalqc-warningmessage";
    $v_0.appendChild($v_2);
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$v = function($p0) {
    var $v_0 = document.createElement("img");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_loading_bar_{0}", $p0));
    $v_0.src = "/_imgs/progressbar.gif";
    $v_0.className = "mscrm-globalqc-loadingBar";
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Y = function($p0, $p1, $p2) {
    var $v_0 = $p0.createElement("DIV");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_overlay_{0}", $p1));
    $v_0.className = "ms-crm-InlineDialogBackground";
    $v_0.style.zIndex = $p2 + 0;
    $v_0.style.display = "block";
    XUI.Html.SetOpacity($v_0, .5);
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$s = function($p0) {
    var $v_0 = document.createElement("DIV");
    $v_0.className = "mscrm-globalqc-cross";
    var $v_1 = document.createElement("A");
    $v_1.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("globalquickcreate_cross_anchor_{0}", $p0));
    $v_1.className = "mscrm-globalqc-cross";
    $v_0.appendChild($v_1);
    $v_1.setAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
        .$P,
        CrmEncodeDecode.CrmHtmlAttributeEncode($p0));
    $v_1.href = "#";
    $v_1.title = window.LOCID_CLOSE_GLOBAL_QUICKCREATE;
    $addHandler($v_1, "click", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$U);
    $addHandler($v_1, "keydown", Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$V);
    var $v_2 = document.createElement("img");
    $v_2.className = "mscrm-globalqc-cross";
    $v_1.appendChild($v_2);
    $v_2.src = "/_imgs/refreshcommandbar/close_16.png";
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$p = function() {
    var $v_0 = document.createElement("DIV");
    $v_0.appendChild(document.createTextNode(Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance()
        .get_breadcrumbText()));
    $v_0.className = "mscrm-globalqc-entityname";
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$U = function($p0) {
    var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
        $v_1 = $v_0.getAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$P),
        $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$J(),
        $v_3 = $P_CRM($v_2);
    $v_3.find("#" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_1)).stop();
    var $v_4 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$9($v_1);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$h($v_4, $v_1)
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$V = function($p0) {
    var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
        $v_1 = $v_0.getAttribute(Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$P),
        $v_2 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$J(),
        $v_3 = $P_CRM($v_2),
        $v_4 = $v_3.find("#" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_1))[0];
    if ($p0.keyCode === 9 && !$p0.shiftKey) {
        $p0.stopPropagation();
        $p0.preventDefault();
        var $v_5 = Mscrm.InlineDialogUtility.findFirstFocusableElement($v_4.contentDocument.body);
        !IsNull($v_5) && $v_5.focus()
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Z = function($p0, $p1, $p2) {
    var $v_0 = $p0.createElement("DIV");
    $v_0.id = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("navbar_overlay_{0}", $p1));
    $v_0.className = "ms-crm-InlineDialogBackground";
    $v_0.style.zIndex = $p2 + 14;
    $v_0.style.height = 50 + "px";
    $v_0.style.display = "block";
    XUI.Html.SetOpacity($v_0, .5);
    return $v_0
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks = function(quickCreateFrameId, zIndex) {
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$0_0 = quickCreateFrameId;
    this.$6_0 = parseInt(zIndex.toString(), 10);
    var $v_0 = Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length();
    if ($v_0 > 0) this.$6_0 = this.$6_0 + $v_0 * 3
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.prototype = {
    get_quickCreateFrameId: function() { return this.$0_0 },
    get_zIndex: function() { return this.$6_0 },
    get_isTurboForm: function() { return this.$7_0 },
    set_isTurboForm: function(value) {
        this.$7_0 = value;
        return value
    },
    get_callbackDictionary: function() {
        var $v_0 = {};
        $v_0["onQuickCreateLoadCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onQuickCreateLoadCallback", this, null, false);
        $v_0["onQuickCreateSaveSuccessCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onQuickCreateSaveSuccessCallback", this, null, false);
        $v_0["onQuickCreateCancelCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onQuickCreateCancelCallback", this, null, false);
        $v_0["onQuickCreateSaveFailCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onQuickCreateSaveFailCallback", this, null, false);
        $v_0["onQuickCreateSaveInitiatedCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onQuickCreateSaveInitiatedCallback", this, null, false);
        $v_0["onQuickCreateStopLoadCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onQuickCreateStopLoadCallback", this, null, false);
        return $v_0
    },
    onQuickCreateLoadCallback: function() {
        var $v_0 = $get(CrmEncodeDecode
            .CrmHtmlAttributeEncode(String.format("globalquickcreate_loading_bar_{0}", this.$0_0)),
            this.get_entityInfoObject()[0]);
        $v_0.style.visibility = "hidden";
        this.get_entityInfoObject().css("box-shadow", "none");
        this.get_containerObject()[0].style.top = String.format("-{0}px", this.get_containerObject().height());
        this.get_containerObject()[0].style.zIndex = this.$6_0 + 1;
        this.get_containerObject()[0].style.display = "block";
        this.$b_0(this.$0_0);
        var $v_1 = {};
        $v_1["top"] = 50 + this.get_entityInfoObject().height() + "px";
        window.self.QuickCreateFormLoadEndTime = (new Date).getTime();
        this.get_containerObject().animate($v_1, "slow")
    },
    $b_0: function($p0) {
        this.$5_0 = this.$u_0($p0);
        if (!IsNull(this.$5_0)) {
            this.$5_0.focus();
            $addHandler(this.$5_0, "keydown", this.$$d_$z_0)
        }
    },
    $u_0: function($p0) {
        var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
            $v_1 = $get(CrmEncodeDecode.CrmHtmlAttributeEncode($p0), $v_0);
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.contentDocument.body, $v_3 = Mscrm.InlineDialogUtility.findFirstFocusableElement($v_2);
            $v_2.setAttribute("tabindex", -1);
            return $v_3
        }
        return null
    },
    $z_0: function($p0) {
        if ($p0.keyCode === 9 && $p0.shiftKey) {
            var $v_0 = $get(CrmEncodeDecode
                .CrmHtmlAttributeEncode(String.format("globalquickcreate_cross_anchor_{0}", this.$0_0)),
                this.get_entityInfoObject()[0]);
            $p0.stopPropagation();
            $p0.preventDefault();
            $v_0.focus()
        }
    },
    onQuickCreateStopLoadCallback: function() {
        var $$t_0 = this;
        this.hideQuickCreateWithAnimation(function() { $$t_0.removeEntireGlobalQuickCreateFromDom() });
        return true
    },
    onQuickCreateSaveSuccessCallback: function(record) {
        var $$t_1 = this;
        this.hideQuickCreateWithAnimation(function() { $$t_1.removeEntireGlobalQuickCreateFromDom() });
        return true
    },
    onQuickCreateSaveFailCallback: function(jsonData) {
        var $v_0 = $get(CrmEncodeDecode
            .CrmHtmlAttributeEncode(String.format("globalquickcreate_loading_bar_{0}", this.$0_0)),
            this.get_entityInfoObject()[0]);
        $v_0.style.visibility = "hidden";
        var $v_1 = $get(CrmEncodeDecode
                .CrmHtmlAttributeEncode(String.format("globalquickcreate_save_button_{0}", this.$0_0)),
                this.get_containerObject()[0]),
            $v_2 = $P_CRM($v_1);
        $v_2.attr("disabled") == "disabled" && $v_2.removeAttr("disabled");
        if (!IsNull(jsonData)) {
            var $v_3 = jsonData["errorCode"], $v_4 = $v_3["message"];
            IsNull($v_3["errorCode"]) && !isNullOrEmptyString($v_4) && this.$X_0(true, $v_4)
        }
        return false
    },
    onQuickCreateCancelCallback: function() {
        var $$t_0 = this;
        this.hideQuickCreateWithAnimation(function() { $$t_0.removeEntireGlobalQuickCreateFromDom() });
        return true
    },
    onQuickCreateSaveInitiatedCallback: function() {
        var $v_0 = $get(CrmEncodeDecode
            .CrmHtmlAttributeEncode(String.format("globalquickcreate_loading_bar_{0}", this.$0_0)),
            this.get_entityInfoObject()[0]);
        $v_0.style.visibility = "visible";
        var $v_1 = $get(CrmEncodeDecode
                .CrmHtmlAttributeEncode(String.format("globalquickcreate_save_button_{0}", this.$0_0)),
                this.get_containerObject()[0]),
            $v_2 = $P_CRM($v_1);
        $v_2.attr("disabled", "disabled");
        this.$X_0(false, null);
        return false
    },
    hideQuickCreateWithAnimation: function(afterAnimateCallback) {
        var $$t_1 = this;
        this.get_containerObject().slideUp(250,
            function() {
                $$t_1.get_entityInfoObject().slideUp(250,
                    function() {
                        $$t_1.get_overlayObject().hide();
                        afterAnimateCallback()
                    })
            })
    },
    $X_0: function($p0, $p1) {
        var $v_0 = $get(CrmEncodeDecode
                .CrmHtmlAttributeEncode(String.format("globalquickcreate_error_message_{0}", this.$0_0)),
                this.get_entityInfoObject()[0]),
            $v_1 = $P_CRM($v_0);
        if ($p0) {
            $P_CRM("span", $v_1).text($p1);
            $v_1.show()
        } else $v_1.hide();
        var $v_2 = {};
        $v_2["top"] = 50 + this.get_entityInfoObject().height() + "px";
        this.get_containerObject().animate($v_2, "fast")
    },
    get_entityInfoObject: function() {
        if (IsNull(this.$C_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode
                    .CrmHtmlAttributeEncode(String.format("globalquickcreate_entityinfo_{0}", this.$0_0)),
                    $v_0);
            this.$C_0 = $P_CRM($v_1)
        }
        return this.$C_0
    },
    get_overlayObject: function() {
        if (IsNull(this.$G_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode
                    .CrmHtmlAttributeEncode(String.format("globalquickcreate_overlay_{0}", this.$0_0)),
                    $v_0);
            this.$G_0 = $P_CRM($v_1)
        }
        return this.$G_0
    },
    get_containerObject: function() {
        if (IsNull(this.$B_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode
                    .CrmHtmlAttributeEncode(String.format("globalquickcreate_container_{0}", this.$0_0)),
                    $v_0);
            this.$B_0 = $P_CRM($v_1)
        }
        return this.$B_0
    },
    get_iFrameObject: function() {
        if (IsNull(this.$D_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode.CrmHtmlAttributeEncode(this.$0_0), $v_0);
            this.$D_0 = $P_CRM($v_1)
        }
        return this.$D_0
    },
    get_navBarOverlayObject: function() {
        if (IsNull(this.$F_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("navbar_overlay_{0}", this.$0_0)),
                    $v_0);
            this.$F_0 = $P_CRM($v_1)
        }
        return this.$F_0
    },
    get_actionsDivObject: function() {
        if (IsNull(this.$A_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode
                    .CrmHtmlAttributeEncode(String.format("globalquickcreate_actionsdiv_{0}", this.$0_0)),
                    $v_0);
            this.$A_0 = $P_CRM($v_1)
        }
        return this.$A_0
    },
    get_mainContainerDivObject: function() {
        if (IsNull(this.$E_0)) {
            var $v_0 = Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$3(),
                $v_1 = $get(CrmEncodeDecode
                    .CrmHtmlAttributeEncode(String.format("globalquickcreate_maincontainerdiv_{0}", this.$0_0)),
                    $v_0);
            this.$E_0 = $P_CRM($v_1)
        }
        return this.$E_0
    },
    removeEntireGlobalQuickCreateFromDom: function() {
        var $$t_2 = this;
        window.setTimeout(function() {
                Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.removeGlobalQuickCreateAttachedEvents($$t_2.$0_0);
                !IsNull($$t_2.$5_0) && $removeHandler($$t_2.$5_0, "keydown", $$t_2.$$d_$z_0);
                !IsNull($$t_2.get_entityInfoObject()) &&
                    $$t_2.get_entityInfoObject().length &&
                    $$t_2.get_entityInfoObject().empty().remove();
                !IsNull($$t_2.get_overlayObject()) &&
                    $$t_2.get_overlayObject().length &&
                    $$t_2.get_overlayObject().empty().remove();
                !IsNull($$t_2.get_navBarOverlayObject()) &&
                    $$t_2.get_navBarOverlayObject().length &&
                    $$t_2.get_navBarOverlayObject().empty().remove();
                if ($$t_2.$7_0 && Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().get_length() === 1) {
                    var $v_0 = $$t_2.get_iFrameObject().get(0), $v_1 = $v_0.contentWindow.location.href;
                    $v_1 += "&deactivate=true";
                    $v_0.contentWindow.location.replace($v_1);
                    !IsNull($$t_2.get_actionsDivObject()) &&
                        $$t_2.get_actionsDivObject().length &&
                        $$t_2.get_actionsDivObject().empty().remove()
                } else {
                    if (!IsNull($$t_2.get_iFrameObject()) && $$t_2.get_iFrameObject().length) {
                        $$t_2.$7_0 && $$t_2.get_iFrameObject().get(0).contentWindow.unloadForm();
                        $$t_2.get_iFrameObject().empty().remove()
                    }
                    !IsNull($$t_2.get_actionsDivObject()) &&
                        $$t_2.get_actionsDivObject().length &&
                        $$t_2.get_actionsDivObject().empty().remove();
                    !IsNull($$t_2.get_containerObject()) &&
                        $$t_2.get_containerObject().length &&
                        $$t_2.get_containerObject().empty().remove();
                    !IsNull($$t_2.get_mainContainerDivObject()) &&
                        $$t_2.get_mainContainerDivObject().length &&
                        $$t_2.get_mainContainerDivObject().empty().remove()
                }
                $$t_2.$C_0 = null;
                $$t_2.$G_0 = null;
                $$t_2.$F_0 = null;
                $$t_2.$A_0 = null;
                $$t_2.$D_0 = null;
                $$t_2.$B_0 = null;
                $$t_2.$E_0 = null;
                Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().pop()
            },
            0)
    },
    $0_0: null,
    $6_0: 0,
    $C_0: null,
    $G_0: null,
    $B_0: null,
    $D_0: null,
    $F_0: null,
    $A_0: null,
    $E_0: null,
    $5_0: null,
    $7_0: false
};
Mscrm.GlobalQuickCreate.RefreshFormCallbacks = function(quickCreateFrameId) { this.$0_0 = quickCreateFrameId };
Mscrm.GlobalQuickCreate.RefreshFormCallbacks.$12 = function($p0) {
    var $v_0 = new Mscrm.EntityReference;
    $v_0.Id = Xrm.Page.data.entity.getId();
    var $v_1 = Xrm.Page.data.entity.getEntityName();
    $v_0.TypeName = $v_1;
    $v_0.TypeCode = Xrm.Internal.getEntityCode($v_1);
    $v_0.TypeDisplayName = Mscrm.GlobalQuickCreate.QuickCreateStack.get_globalInstance().top();
    $v_0.Name = Xrm.Page.data.entity.getPrimaryAttributeValue();
    Xrm.Internal.refreshParentGrid($v_0.TypeCode, "", $v_0.Id);
    Mscrm.Utilities.addEntityToRecent($v_0);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
        .executeCallbacksAssociatedWithGlobalQuickCreate("savesuccess", $v_0)
};
Mscrm.GlobalQuickCreate.RefreshFormCallbacks.$11 = function($p0) {
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
        .executeCallbacksAssociatedWithGlobalQuickCreate("savefailure", $p0)
};
Mscrm.GlobalQuickCreate.RefreshFormCallbacks.$c = function() {
    for (var $v_0 = $find("PrimaryEntity"), $v_1 = $v_0.get_attributes().get(), $v_2 = 0; $v_2 < $v_1.length; $v_2++)
        for (var $v_3 = $v_1[$v_2].get_controls().get(), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_5 = $v_3[$v_4];
            if (!$v_5.get_isValid()) return false
        }
    return true
};
Mscrm.GlobalQuickCreate.RefreshFormCallbacks.prototype = {
    $0_0: null,
    get_quickCreateFrameId: function() { return this.$0_0 },
    get_callbackDictionary: function() {
        var $v_0 = {};
        $v_0["onRefreshFormSaveCallback"] = Mscrm.Utilities
            .createCallbackFunctionObject("onRefreshFormSaveCallback", this, null, false);
        return $v_0
    },
    onRefreshFormSaveCallback: function() {
        var $v_0 = Mscrm.Utilities.isTurboForm(), $v_1 = true;
        if (!$v_0) {
            Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
            $v_1 = Mscrm.GlobalQuickCreate.RefreshFormCallbacks.$c()
        }
        if (Xrm.Page.data.getIsValid() && $v_1) {
            Xrm.Page.data.save().then(Mscrm.GlobalQuickCreate.RefreshFormCallbacks.$12,
                Mscrm.GlobalQuickCreate.RefreshFormCallbacks.$11);
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
                .executeCallbacksAssociatedWithGlobalQuickCreate("saveinitiated")
        } else
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
                .executeCallbacksAssociatedWithGlobalQuickCreate("savefailure")
    }
};
Mscrm.GlobalQuickCreate.QuickCreateCallbackType = function() {};
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder = function() {};
Mscrm.GlobalQuickCreate.LookupGlobalQuickCreateCallbacks = function(quickCreateFrameId, zIndex, saveCallback) {
    Mscrm.GlobalQuickCreate.LookupGlobalQuickCreateCallbacks.initializeBase(this, [quickCreateFrameId, zIndex]);
    this.$1_1 = saveCallback
};
Mscrm.GlobalQuickCreate.LookupGlobalQuickCreateCallbacks.prototype = {
    $1_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        var $$t_1 = this;
        this.hideQuickCreateWithAnimation(function() {
            !IsNull($$t_1.$1_1) && $$t_1.$1_1(record);
            $$t_1.removeEntireGlobalQuickCreateFromDom()
        });
        return true
    }
};
Mscrm.GlobalQuickCreate.CreateChildCaseGlobalQuickCreateCallbacks = function(quickCreateFrameId, zIndex, saveCallback) {
    Mscrm.GlobalQuickCreate.CreateChildCaseGlobalQuickCreateCallbacks
        .initializeBase(this, [quickCreateFrameId, zIndex]);
    this.$1_1 = saveCallback
};
Mscrm.GlobalQuickCreate.CreateChildCaseGlobalQuickCreateCallbacks.prototype = {
    $1_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        var $$t_1 = this;
        this.hideQuickCreateWithAnimation(function() {
            !IsNull($$t_1.$1_1) && $$t_1.$1_1(record);
            $$t_1.removeEntireGlobalQuickCreateFromDom()
        });
        return true
    }
};
Mscrm.GlobalQuickCreate.GridControlGlobalQuickCreateCallbacks = function(quickCreateFrameId, zIndex, saveCallback) {
    Mscrm.GlobalQuickCreate.GridControlGlobalQuickCreateCallbacks.initializeBase(this, [quickCreateFrameId, zIndex]);
    this.$1_1 = saveCallback
};
Mscrm.GlobalQuickCreate.GridControlGlobalQuickCreateCallbacks.prototype = {
    $1_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        var $$t_1 = this;
        this.hideQuickCreateWithAnimation(function() {
            !IsNull($$t_1.$1_1) && $$t_1.$1_1();
            $$t_1.removeEntireGlobalQuickCreateFromDom()
        });
        return true
    }
};
Mscrm.GlobalQuickCreate
    .MultiEntityQuickFindGlobalQuickCreateCallbacks = function(quickCreateFrameId, zIndex, saveCallback) {
        Mscrm.GlobalQuickCreate.MultiEntityQuickFindGlobalQuickCreateCallbacks
            .initializeBase(this, [quickCreateFrameId, zIndex]);
        this.$1_1 = saveCallback
    };
Mscrm.GlobalQuickCreate.MultiEntityQuickFindGlobalQuickCreateCallbacks.prototype = {
    $1_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        var $$t_1 = this;
        this.hideQuickCreateWithAnimation(function() {
            !IsNull($$t_1.$1_1) && $$t_1.$1_1(record);
            $$t_1.removeEntireGlobalQuickCreateFromDom()
        });
        return true
    }
};
Mscrm.GlobalQuickCreate.ProductFamilyGlobalQuickCreateCallbacks = function(quickCreateFrameId, zIndex, saveCallback) {
    Mscrm.GlobalQuickCreate.ProductFamilyGlobalQuickCreateCallbacks.initializeBase(this, [quickCreateFrameId, zIndex]);
    this.$1_1 = saveCallback
};
Mscrm.GlobalQuickCreate.ProductFamilyGlobalQuickCreateCallbacks.prototype = {
    $1_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        var $$t_1 = this;
        this.hideQuickCreateWithAnimation(function() {
            !IsNull($$t_1.$1_1) && $$t_1.$1_1(record);
            $$t_1.removeEntireGlobalQuickCreateFromDom()
        });
        return true
    }
};
Mscrm.GlobalQuickCreate.QuickCreateStack = function() { this.$2_0 = [] };
Mscrm.GlobalQuickCreate.QuickCreateStack.$$cctor = function() {
    if (!IsNull(window.top.Mscrm) && IsNull(window.top.Mscrm.GlobalQuickCreate))
        try {
            var $v_0 = document.createElement("script");
            $v_0.setAttribute("type", "text/javascript");
            $v_0.setAttribute("src",
                Mscrm.CrmUri.create("/_static/_controls/globalquickcreate/globalquickcreatebehavior.js").toString());
            window.top.document.body.appendChild($v_0)
        } catch ($$e_1) {
        }
};
Mscrm.GlobalQuickCreate.QuickCreateStack
    .get_globalInstance = function() { return window.top.Mscrm.GlobalQuickCreate.QuickCreateStack.get_instance() };
Mscrm.GlobalQuickCreate.QuickCreateStack.get_instance = function() {
    if (!Mscrm.GlobalQuickCreate.QuickCreateStack.$M)
        Mscrm.GlobalQuickCreate.QuickCreateStack.$M = new Mscrm.GlobalQuickCreate.QuickCreateStack;
    return Mscrm.GlobalQuickCreate.QuickCreateStack.$M
};
Mscrm.GlobalQuickCreate.QuickCreateStack.prototype = {
    $4_0: null,
    get_breadcrumbText: function() {
        var $v_0 = window.LOCID_UI_DIR === "LTR" ? " > " : " < ";
        if (this.get_length() <= 2) return this.$2_0.join($v_0);
        else {
            var $v_1 = this.$2_0[this.get_length() - 2] + $v_0 + this.$2_0[this.get_length() - 1], $v_2 = "...";
            if (window.LOCID_UI_DIR === "LTR") return $v_2 + $v_1;
            else return $v_1 + $v_2
        }
    },
    get_length: function() { return this.$2_0.length },
    get_cachedIFrame: function() { return this.$4_0 },
    set_cachedIFrame: function(value) {
        this.$4_0 = value;
        return value
    },
    canAddItems: function() { return !!this.$2_0 && this.$2_0.length < 10 },
    push: function(itemText) {
        if (!this.canAddItems())
            throw Error.invalidOperation("QuickCreateStack is full - can't push an item onto the stack.");
        this.$2_0[this.$2_0.length] = itemText
    },
    pop: function() {
        if (!this.$2_0 || !this.$2_0.length)
            throw Error.invalidOperation("QuickCreateStack is empty - can't pop the top item.");
        for (var $v_0 = this.$2_0[this.$2_0
                     .length -
                     1],
            $v_1 = [],
            $v_2 = 0;
            $v_2 < this.$2_0.length - 1;
            $v_2++) $v_1[$v_2] = this.$2_0[$v_2];
        this.$2_0 = $v_1;
        return $v_0
    },
    top: function() {
        if (!this.$2_0 || !this.$2_0.length)
            throw Error.invalidOperation("QuickCreateStack is empty - can't get the top item.");
        return this.$2_0[this.$2_0.length - 1]
    }
};
Mscrm.GlobalQuickCreate.XrmGlobalQuickCreateCallbacks = function(saveSuccessCallback, saveErrorCallback, zIndex) {
    Mscrm.GlobalQuickCreate.XrmGlobalQuickCreateCallbacks.initializeBase(this, ["NavBarGloablQuickCreate", zIndex]);
    this.$O_1 = saveSuccessCallback;
    this.$N_1 = saveErrorCallback
};
Mscrm.GlobalQuickCreate.XrmGlobalQuickCreateCallbacks.prototype = {
    $O_1: null,
    $N_1: null,
    onQuickCreateSaveSuccessCallback: function(record) {
        if (!IsNull(this.$O_1)) {
            var $v_0 = new Xrm.LookupObject;
            $v_0.id = record.Id;
            $v_0.name = record.Name;
            $v_0.entityType = Xrm.Internal.getEntityName(record.TypeCode);
            var $v_1 = new Xrm.SaveSuccessResponse;
            $v_1.savedEntityReference = $v_0;
            this.$O_1($v_1)
        }
        return Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.prototype.onQuickCreateSaveSuccessCallback
            .call(this, record)
    },
    onQuickCreateSaveFailCallback: function(jsonData) {
        if (!IsNull(this.$N_1) && !IsNull(jsonData))
            if (IsNull(jsonData["errorCode"]) || Mscrm.Utilities.getHexErrorCode(jsonData["errorCode"]) !== "80040333"
            ) {
                var $v_0 = jsonData["errorCode"],
                    $v_1 = jsonData["message"],
                    $v_2 = jsonData["debugMessage"],
                    $v_3 = new Xrm.SaveErrorResponse($v_0, $v_1, $v_2);
                this.$N_1($v_3)
            }
        return Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.prototype.onQuickCreateSaveFailCallback
            .call(this, jsonData)
    }
};
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.registerClass("Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior");
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.registerClass("Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks");
Mscrm.GlobalQuickCreate.RefreshFormCallbacks.registerClass("Mscrm.GlobalQuickCreate.RefreshFormCallbacks");
Mscrm.GlobalQuickCreate.QuickCreateCallbackType.registerClass("Mscrm.GlobalQuickCreate.QuickCreateCallbackType");
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder
    .registerClass("Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder");
Mscrm.GlobalQuickCreate.LookupGlobalQuickCreateCallbacks
    .registerClass("Mscrm.GlobalQuickCreate.LookupGlobalQuickCreateCallbacks",
        Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.GlobalQuickCreate.CreateChildCaseGlobalQuickCreateCallbacks
    .registerClass("Mscrm.GlobalQuickCreate.CreateChildCaseGlobalQuickCreateCallbacks",
        Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.GlobalQuickCreate.GridControlGlobalQuickCreateCallbacks
    .registerClass("Mscrm.GlobalQuickCreate.GridControlGlobalQuickCreateCallbacks",
        Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.GlobalQuickCreate.MultiEntityQuickFindGlobalQuickCreateCallbacks
    .registerClass("Mscrm.GlobalQuickCreate.MultiEntityQuickFindGlobalQuickCreateCallbacks",
        Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.GlobalQuickCreate.ProductFamilyGlobalQuickCreateCallbacks
    .registerClass("Mscrm.GlobalQuickCreate.ProductFamilyGlobalQuickCreateCallbacks",
        Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.GlobalQuickCreate.QuickCreateStack.registerClass("Mscrm.GlobalQuickCreate.QuickCreateStack");
Mscrm.GlobalQuickCreate.XrmGlobalQuickCreateCallbacks
    .registerClass("Mscrm.GlobalQuickCreate.XrmGlobalQuickCreateCallbacks",
        Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks);
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateEntityInfoDivIdFormat = "globalquickcreate_entityinfo_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.globalQuickCreateOverlayIdFormat = "globalquickcreate_overlay_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateLoadingBarIdFormat = "globalquickcreate_loading_bar_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateErrorMessageIdFormat = "globalquickcreate_error_message_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateActionsDivIdFormat = "globalquickcreate_actionsdiv_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateSaveButtonIdFormat = "globalquickcreate_save_button_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateCancelButtonIdFormat = "globalquickcreate_cancel_button_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateContainerDivIdFormat = "globalquickcreate_container_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateMainContainerDivIdFormat = "globalquickcreate_maincontainerdiv_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
    .globalQuickCreateCrossAnchorIdFormat = "globalquickcreate_cross_anchor_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.navBarOverlayIdFormat = "navbar_overlay_{0}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.navigationControlHeight = 50;
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$L = "_quickCreateArgumentsKey";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$K = "{0}_{1}_{2}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$P = "anchor_quickiframe_id";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$H = "button_quickiframe_id";
Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.$Q = "&{0}={1}";
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.onQuickCreateLoadCallbackFuncName = "onQuickCreateLoadCallback";
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks
    .onQuickCreateSaveSuccessCallbackFuncName = "onQuickCreateSaveSuccessCallback";
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks
    .onQuickCreateSaveFailCallbackFuncName = "onQuickCreateSaveFailCallback";
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks.onQuickCreateCancelCallbackFuncName = "onQuickCreateCancelCallback";
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks
    .onQuickCreateSaveInitiatedCallbackFuncName = "onQuickCreateSaveInitiatedCallback";
Mscrm.GlobalQuickCreate.GlobalQuickCreateCallbacks
    .onQuickCreateStopLoadCallbackFuncName = "onQuickCreateStopLoadCallback";
Mscrm.GlobalQuickCreate.RefreshFormCallbacks.onRefreshFormSaveCallbackFuncName = "onRefreshFormSaveCallback";
Mscrm.GlobalQuickCreate.QuickCreateCallbackType.open = "open";
Mscrm.GlobalQuickCreate.QuickCreateCallbackType.saveSuccess = "savesuccess";
Mscrm.GlobalQuickCreate.QuickCreateCallbackType.saveFail = "savefailure";
Mscrm.GlobalQuickCreate.QuickCreateCallbackType.saveInitiated = "saveinitiated";
Mscrm.GlobalQuickCreate.QuickCreateCallbackType.cancel = "cancel";
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder.overlay = 0;
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder.quickCreateIFrame = 1;
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder.quickCreateEntityInfoDiv = 2;
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder.navBarOverlay = 14;
Mscrm.GlobalQuickCreate.GlobalQuickCreateLayoutZIndexOrder.nestedQuickCreate = 3;
Mscrm.GlobalQuickCreate.QuickCreateStack.$M = null;
Mscrm.GlobalQuickCreate.QuickCreateStack.$$cctor()