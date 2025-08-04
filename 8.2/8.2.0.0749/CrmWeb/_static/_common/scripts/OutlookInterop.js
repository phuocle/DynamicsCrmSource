Type.registerNamespace("Mscrm");

function OpenEntityForm(type, id, parameters) {
    try {
        if (id && !id.length) id = null;
        if (parameters && !parameters.length) parameters = null;
        return openObject(type, id, parameters)
    } catch ($$e_3) {
        return null
    }
}

function OpenTurboFormOutlook(type, id, parameters) {
    SetHistoryPositionOffset();
    OpenEntityForm(type, id, parameters)
}

function SetHistoryPositionOffset() {
    var $v_0 = $find("crmHistoryManager");
    !IsNull($v_0) && $v_0.set_historyPositionOffset($v_0.retrieveHistoryPosition())
}

function AreRibbonTabsVisibleOutlook() {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return null;
    for (var $v_1 = Array.prototype.slice.call(arguments),
        $v_2 = $v_1.splice(0, $v_1.length / 2),
        $v_3 = $v_1,
        $v_4 = $v_0.areControlsVisible($v_2, $v_3),
        $v_5 = "",
        $v_6 = 0;
        $v_6 < $v_4.length;
        $v_6++) {
        if ("1" === $v_4.charAt($v_6)) {
            var $v_7 = Mscrm.RibbonLayout.parentGroupCommands[$v_3[$v_6]];
            if ((IsNull($v_7) || $v_0.isControlEnabled($v_7)) && $v_0.isControlEnabled($v_2[$v_6])) {
                $v_5 += "1";
                continue
            }
        }
        $v_5 += "0"
    }
    return $v_5
}

function AreRibbonControlsVisibleOutlook() {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return null;
    var $v_1 = Array.prototype.slice.call(arguments), $v_2 = $v_1.splice(0, $v_1.length / 2), $v_3 = $v_1;
    return $v_0.areControlsVisible($v_2, $v_3)
}

function IsRibbonControlVisibleOutlook(command, id) {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return false;
    return $v_0.isControlVisible(command, id)
}

function AreRibbonControlsEnabledOutlook() {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return null;
    for (var $v_1 = Array.prototype.slice.call(arguments),
        $v_2 = $v_1.splice(0, $v_1.length / 2),
        $v_3 = $v_1,
        $v_4 = [],
        $v_5 = 0;
        $v_5 < $v_3.length;
        $v_5++) $v_4.push(Mscrm.RibbonLayout.parentGroupCommands[$v_3[$v_5]]);
    return $v_0.areControlsEnabled($v_2, $v_4, $v_3)
}

function IsRibbonControlEnabledOutlook(command, id) {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return false;
    var $v_1 = Mscrm.RibbonLayout.parentGroupCommands[id];
    if (!IsNull($v_1) && !$v_0.isControlEnabled($v_1)) return false;
    return $v_0.isControlVisible(command, id) && $v_0.isControlEnabled(command)
}

function AreRibbonControlsPressedOutlook() {
    for (var $v_0 = Array.prototype.slice.call(arguments),
        $v_1 = $v_0.splice(0, $v_0.length / 2),
        $v_2 = $v_0,
        $v_3 = "",
        $v_4 = 0;
        $v_4 < $v_1.length;
        $v_4++) $v_3 += IsRibbonControlPressedOutlook($v_1[$v_4], $v_2[$v_4]) ? "1" : "0";
    return $v_3
}

function IsRibbonControlPressedOutlook(queryCommand, id) {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return false;
    var $v_1 = {};
    if (id && id.length > 0) $v_1["SourceControlId"] = id;
    $v_0.executeCommand(queryCommand, $v_1);
    return IsNull($v_1["On"]) ? false : $v_1["On"]
}

function ExecuteRibbonPopulateCommandAndReturnXml(populateCommand) {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return "";
    return $v_0.getDynamicMenuRibbonFromCommand(populateCommand, {})
}

function ExecuteRibbonCommandOutlook(command, id) {
    var $v_0 = $find("crmRibbonData");
    if (IsNull($v_0)) return;
    var $v_1 = {};
    if (id && id.length > 0) $v_1["SourceControlId"] = id;
    $v_0.executeCommand(command, $v_1);
    !IsNull(Mscrm.Utilities.tryParseGuid(command.substring(0, 36))) &&
        CUI.Page.PageManager.get_instance().get_commandDispatcher().executeCommand(command, $v_1)
}

function IsRibbonDataReadyOutlook() {
    if (Mscrm.PageManager.get_isPageLoaded()) {
        var $v_0 = $find("crmRibbonData");
        return !IsNull($v_0)
    }
    return false
}

function AttachHtmlEvent(eventName, elementId, token) {
    var $v_0 = $get(elementId);
    if ($v_0)
        if (typeof $v_0.attachEventHandler === "unknown") {
            var $v_1 = function() { EventHandlerForOutlook(eventName, elementId, token) };
            $v_0.attachEventHandler(eventName, $v_1)
        } else {
            var $v_2 = function($p1_0) { EventHandlerForOutlook(eventName, elementId, token) };
            $v_0[eventName] = $v_2
        }
}

function EventHandlerForOutlook(eventName, elementId, token) {
    var $v_0 = getOutlookHostedWindow();
    $v_0.handleHtmlEvent(eventName, elementId, token)
}

function PostToNewWindow(url, name, width, height, customWinFeatures, postData) {
    var $v_0 = buildWindowFeatures(width, height, customWinFeatures),
        $v_1 = getOutlookHostedWindow(),
        $v_2 = Mscrm.WrappedManagedBrowserShellArgument
            .tryUnwrap($v_1.postToNewWindow(window.location.href, url, name, $v_0, postData));
    if (!IsNull($v_2)) $v_2.opener = window.self;
    return $v_2
}

function GetHelpRedirectParameters() {
    var $v_0 = {};
    $v_0["IsHelpRedirectAvailable"] = window.HELP_REDIRECT_AVAILABLE;
    $v_0["HelpSku"] = window.HELP_SKU;
    $v_0["OnlineTransactionType"] = window.ONLINE_TRANSACTION_TYPE;
    return $v_0
}

function GetHelpServerUrl() { return window.HELP_SERVER_URL }

function GetHelpUrl() {
    var $v_0 = null;
    if (isRichClient()) {
        var $v_1 = getOutlookHostedWindow().getParameter("currentfolderurl");
        if (!isNullOrEmptyString($v_1)) $v_0 = Mscrm.CrmUri.create($v_1)
    }
    if ($2()) {
        var $v_2 = $v_0.get_query()["etn"];
        if (IsNull($v_2)) {
            var $v_4 = $v_0.get_query()["etc"];
            if (!IsNull($v_4)) $v_2 = Xrm.Internal.getEntityName(parseInt($v_4, 10))
        }
        var $v_3 = $1($0(), $v_2, $3());
        if (!IsNull($v_3)) return $v_3.toString()
    }
    return null
}

function $1($p0, $p1, $p2) {
    var $v_0 = null;
    if (!isNullOrEmptyString($p1)) {
        var $v_1 = Mscrm.EntitiesCustomizedHelpUtility.getEntityCustomizedHelpUrl($p1);
        if (!isNullOrEmptyString($v_1)) $v_0 = Mscrm.CrmUri.create($v_1)
    }
    if (IsNull($v_0) && !isNullOrEmptyString($p0)) $v_0 = Mscrm.CrmUri.create($p0);
    if (!IsNull($v_0) && $p2) {
        $v_0.get_query()["userlcid"] = IsNull(window.USER_HELP_LCID) ? null : window.USER_HELP_LCID.toString();
        if (!isNullOrEmptyString($p1)) $v_0.get_query()["typename"] = $p1
    }
    return $v_0
}

function $2() {
    var $v_0 = window.CUSTOMIZED_HELP_ENABLED;
    return !IsNull($v_0) && $v_0
}

function $0() {
    var $v_0 = window.CUSTOMIZED_HELP_GLOBAL_URL;
    return IsNull($v_0) ? "" : $v_0
}

function $3() {
    var $v_0 = window.CUSTOMIZED_HELP_PASSPARAMS_ENABLED;
    return !IsNull($v_0) && $v_0
}

function UnloadFormOutlook(formTitle) {
    var $v_0 = $find("crmContentPanel");
    $v_0.unloadTurboFormForOutlook();
    window.top.document.title = formTitle;
    Mscrm.Utilities.ShowLoadingDiv(window.document.body);
    Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.closeAllGlobalQuickCreateForms()
}

function GetTurboFormContentFramePageOutlook() { return window.DISPLAY_TURBO_FORM ? "/form/page.aspx" : "" }

function GetWrappedWindowOutlook() { return new Mscrm.WrappedManagedBrowserShellArgument(window) }