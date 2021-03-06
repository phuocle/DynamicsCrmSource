Type.registerNamespace("Mscrm");
Mscrm.ITileBuilderProvider = function() {};
Mscrm.ITileBuilderProvider.registerInterface("Mscrm.ITileBuilderProvider");
Mscrm.IAppModuleBuilder = function() {};
Mscrm.IAppModuleBuilder.registerInterface("Mscrm.IAppModuleBuilder");
Mscrm.ITileControlContainer = function() {};
Mscrm.ITileControlContainer.registerInterface("Mscrm.ITileControlContainer");
Mscrm.IAppModuleStructureProvider = function() {};
Mscrm.IAppModuleStructureProvider.registerInterface("Mscrm.IAppModuleStructureProvider");
Mscrm.AppModuleRoleAssignment = function() {};
Mscrm.AppModuleRoleAssignment.onLoadDialog = function() {
    if (window.performance) {
        Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Initiate Load Dialog",
            window.top.ManageRolesRequestStart,
            window.performance.timing.requestStart);
        Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Manage Role Page Request",
            window.performance.timing.requestStart,
            window.performance.timing.responseEnd);
        Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Page Load",
            window.performance.timing.responseEnd,
            (new Date).getTime())
    }
    $P_CRM("#tdDialogHeader").attr("overriddenFirstFocusableOnLoadElementId", "appUrlTextBox");
    $P_CRM("#tdDialogHeader").attr("overrideDefaultFocus", "true");
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Render Start", 1);
    var $v_0 = new Mscrm.Performance.PerformanceStopwatch("Render Dialog");
    $v_0.start();
    $P_CRM("#butBegin").attr("title",
        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEDLGSAVETOOLTIP"));
    $P_CRM("#cmdDialogCancel").attr("title",
        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEDLGCANCELTOOLTIP"));
    $P_CRM("#appUrlText").attr("title",
        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEAPPURLTOOLTIP"));
    $P_CRM("#appUrl_warning").attr("title",
        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEAPPURLVALIDATEMSG"));
    Mscrm.AppModuleRoleAssignment.$Y = $find("crmGrid");
    Mscrm.AppModuleRoleAssignment.$j = XUI.Html.GetText($get("preAppIdentifierId"));
    Mscrm.AppModuleRoleAssignment.$i = XUI.Html.GetText($get("preAppComponentStateIdentifierId"));
    $P_CRM("#appUrlTextBox").bind("keyup", Mscrm.AppModuleRoleAssignment.onTextChangedEventHandler);
    Mscrm.AppModuleRoleAssignment.setAppUrl();
    Mscrm.AppModuleRoleAssignmentHelper.unselectAllRoles();
    Mscrm.AppModuleRoleAssignmentHelper.storeAllRoles();
    Mscrm.AppModuleRoleAssignment.displayConditionsXml = Mscrm.AppModuleRoleAssignmentHelper.loadDisplayConditionsXml();
    Mscrm.AppModuleRoleAssignmentHelper
        .updateGridFromDisplayConditions(Mscrm.AppModuleRoleAssignment.displayConditionsXml);
    $v_0.stop();
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Render Complete", 1)
};
Mscrm.AppModuleRoleAssignment.setAppUrl = function() {
    Mscrm.AppModuleRoleAssignment.$H = XUI.Html.GetText($get("preAppUrlIdentifierId"));
    var $v_0 = $P_CRM("#appUrlTextBox");
    $v_0.val(Mscrm.AppModuleRoleAssignment.$H);
    Mscrm.AppModuleRoleAssignment.$3 = window.location.protocol + "//" + window.location.host + "/";
    if (!Mscrm.AppModuleRoleAssignment.isOnlineOrIfd)
        Mscrm.AppModuleRoleAssignment.$3 = Mscrm.AppModuleRoleAssignment.$3 +
            Mscrm.AppModuleRoleAssignment.orgName +
            "/";
    Mscrm.AppModuleRoleAssignment.$3 = Mscrm.AppModuleRoleAssignment.$3 + "apps/";
    if (!isNullOrEmptyString(Mscrm.AppModuleRoleAssignment.$H)) {
        var $v_1 = $P_CRM("#appUrlLabel");
        $v_1.text(Mscrm.AppModuleRoleAssignment.$3 + Mscrm.AppModuleRoleAssignment.$H);
        $P_CRM("#appUrlLabel").attr("title", Mscrm.AppModuleRoleAssignment.$3 + $P_CRM("#appUrlTextBox").val())
    }
};
Mscrm.AppModuleRoleAssignment.onTextChangedEventHandler = function($p0) {
    if (!isNullOrEmptyString($P_CRM("#appUrlTextBox").val())) {
        $P_CRM("#appUrlLabel").text(Mscrm.AppModuleRoleAssignment.$3 + $P_CRM("#appUrlTextBox").val());
        $P_CRM("#appUrlLabel").attr("title", Mscrm.AppModuleRoleAssignment.$3 + $P_CRM("#appUrlTextBox").val())
    } else $P_CRM("#appUrlLabel").text("")
};
Mscrm.AppModuleRoleAssignment.validateAppUrl = function(url) {
    var $v_0 = new RegExp("^[a-zA-Z0-9]{0,20}$");
    return $v_0.test(url)
};
Mscrm.AppModuleRoleAssignment.showHideAppUrlWarning = function(display) {
    var $v_0 = $P_CRM("#appUrlWarningNode");
    if (display) {
        $v_0.attr("title", Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEAPPURLVALIDATEMSG"));
        $v_0.show()
    } else $v_0.hide()
};
Mscrm.AppModuleRoleAssignment.onOkPress = function() { Mscrm.AppModuleRoleAssignment.updateAppUrlAndRoles() };
Mscrm.AppModuleRoleAssignment.displayConfirmDialog = function(AppId) {
    var $v_0 = new Xrm.ConfirmDialogStrings;
    $v_0.title = Xrm.Internal.getResourceString("Dialog_Publish_Title");
    $v_0.text = Xrm.Internal.getResourceString("Dialog_Activate_Description_AppModule");
    $v_0.confirmButtonLabel = Xrm.Internal.getResourceString("AppModuleLandingPage.PublishAppText");
    $v_0.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 500;
    Xrm.Dialog.openConfirmDialog($v_0, $v_1, Mscrm.AppModuleRoleAssignment.updateAppUrlAndRoles, null)
};
Mscrm.AppModuleRoleAssignment.updateAppUrlAndRoles = function() {
    Mscrm.LoadingBuilder.showLoadingDiv(Xrm.Internal
        .getResourceString("AppModuleLandingPage.ManageAppDialogProgressMessage"),
        true);
    var $v_0 = $P_CRM("#appUrlTextBox").val(),
        $v_1 = Mscrm.AppModuleRoleAssignmentHelper.setSelectedRoles(),
        $v_2 = Mscrm.AppModuleRoleAssignmentHelper.getNewlySelectedRoles($v_1),
        $v_3 = Mscrm.AppModuleRoleAssignmentHelper.getUnselectedRoles($v_1),
        $v_4 = Mscrm.AppModuleRoleAssignmentHelper
            .extractDisplayConditionsFromGrid(Mscrm.AppModuleRoleAssignment.$j,
                $v_0,
                Mscrm.AppModuleRoleAssignment.$i,
                $v_2,
                $v_3),
        $v_5 = new XMLHttpRequest,
        $v_6 = Mscrm.CrmUri.create("/Tools/AppModuleContainer/Cmds/cmd_AppModuleOperations.aspx?oType=" + 2);
    $v_5.open("POST", $v_6.toString(), true);
    Mscrm.Utilities.setResponseTypeToMSXml($v_5);
    Mscrm.WrpcTokenFuncs.setTokenInHeader($v_5, $v_6);
    $v_5.onreadystatechange = function() {
        if ($v_5.readyState !== 4) return;
        var $v_7 = $v_5.responseXML;
        Mscrm.LoadingBuilder.hideLoadingDiv();
        if (!IsNull($v_7)) {
            var $v_8 = XUI.Xml.SelectSingleNode($v_7, "/error", null);
            !IsNull($v_8) && Mscrm.XmlUtil.handleXMLErr($v_5.responseXML, false)
        }
        $P_CRM(window.parent.document.getElementById("InlineDialog_Background")).remove();
        $P_CRM(window.parent.document.getElementById("InlineDialog")).remove();
        closeWindow()
    };
    $v_5.send(XUI.Xml.XMLSerializer.serializeToString($v_4))
};
Mscrm.AppModuleRoleAssignment.onClickVisibleToEveryone = function() {
    Mscrm.AppModuleRoleAssignmentHelper.onClickVisibleToEveryone(Mscrm.AppModuleRoleAssignment.$Y)
};
Mscrm.AppModuleRoleAssignment
    .onClickVisibleToSelectedRoles = function() {
        Mscrm.AppModuleRoleAssignmentHelper.onClickVisibleToSelectedRoles(Mscrm.AppModuleRoleAssignment.$Y)
    };
Mscrm.AppModuleRoleAssignmentHelper = function() {};
Mscrm.AppModuleRoleAssignmentHelper.updateGridFromDisplayConditions = function(displayConditionsXml) {
    var $v_0 = [], $v_1 = null;
    if (!IsNull(displayConditionsXml)) $v_1 = XUI.Xml.SelectSingleNode(displayConditionsXml, "DisplayConditions", null);
    if (!IsNull($v_1)) {
        var $v_2 = XUI.Xml.SelectNodes($v_1, "Role", null);
        if (!IsNull($v_2) && $v_2.length > 0) {
            $v_0 = [];
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3].attributes.getNamedItem("Id").nodeValue,
                    $v_5 = $get("checkBox_" + $v_4.toUpperCase());
                if (!IsNull($v_5)) {
                    Mscrm.Utilities.click($v_5);
                    Array.add($v_0, $v_4)
                }
            }
        }
    }
    Mscrm.AppModuleRoleAssignmentHelper.$C = $v_0;
    Mscrm.AppModuleRoleAssignmentHelper.setRadioButtonValue($v_0)
};
Mscrm.AppModuleRoleAssignmentHelper.loadDisplayConditionsXml = function() {
    var $v_0 = XUI.Html.GetText($get("preDisplayConditionsXml"));
    if (isNullOrEmptyString($v_0)) return null;
    else return XUI.Xml.LoadXml($v_0)
};
Mscrm.AppModuleRoleAssignmentHelper
    .extractDisplayConditionsFromGrid = function(appId, appUrl, componentState, selectedRoles, unselectedRoles) {
        var $v_0 = XUI.Xml.LoadXml("<DisplayConditions/>"),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "DisplayConditions", null),
            $v_2 = $v_0.createElement("AppModule"),
            $v_3 = $v_0.createElement("Id"),
            $v_4 = $v_0.createTextNode("value");
        $v_4.data = appId;
        $v_3.appendChild($v_4);
        $v_2.appendChild($v_3);
        var $v_5 = $v_0.createElement("Url"), $v_6 = $v_0.createTextNode("value");
        $v_6.data = appUrl;
        $v_5.appendChild($v_6);
        $v_2.appendChild($v_5);
        var $v_7 = $v_0.createElement("ComponentState"), $v_8 = $v_0.createTextNode("value");
        $v_8.data = componentState;
        $v_7.appendChild($v_8);
        $v_2.appendChild($v_7);
        $v_1.appendChild($v_2);
        if (!IsNull(selectedRoles)) {
            for (var $v_9 = $v_0.createElement("Selected"), $v_A = 0; $v_A < selectedRoles.length; $v_A++) {
                var $v_B = $v_0.createElement("Role");
                Mscrm.AppModuleRoleAssignmentHelper.addAttribute($v_B, "Id", selectedRoles[$v_A].toString());
                $v_9.appendChild($v_B)
            }
            $v_1.appendChild($v_9)
        }
        if (!IsNull(unselectedRoles)) {
            for (var $v_C = $v_0.createElement("Unselected"), $v_D = 0; $v_D < unselectedRoles.length; $v_D++) {
                var $v_E = $v_0.createElement("Role");
                Mscrm.AppModuleRoleAssignmentHelper.addAttribute($v_E, "Id", unselectedRoles[$v_D].toString());
                $v_C.appendChild($v_E)
            }
            $v_1.appendChild($v_C)
        }
        return $v_0
    };
Mscrm.AppModuleRoleAssignmentHelper.unselectAllRoles = function() {
    for (var $v_0 = document.getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        $v_2.id.startsWith("checkBox_") && $v_2.checked && Mscrm.Utilities.click($v_2)
    }
};
Mscrm.AppModuleRoleAssignmentHelper.storeAllRoles = function() {
    for (var $v_0 = document.getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        $v_2.id.startsWith("checkBox_") && Array.add(Mscrm.AppModuleRoleAssignmentHelper.$T, $v_2.id.substr(9))
    }
};
Mscrm.AppModuleRoleAssignmentHelper.setRadioButtonValue = function(selectedRoles) {
    if (Mscrm.AppModuleRoleAssignmentHelper
        .areAllRolesSelected(selectedRoles)) Mscrm.Utilities.click($get("visibleToEveryone"));
    else Mscrm.Utilities.click($get("visibleToSelectedRoles"))
};
Mscrm.AppModuleRoleAssignmentHelper.areAllRolesSelected = function(selectedRoles) {
    for (var $v_0 = 0; $v_0 < Mscrm.AppModuleRoleAssignmentHelper.$T.length; $v_0++) {
        var $v_1 = Mscrm.AppModuleRoleAssignmentHelper.$T[$v_0];
        if (!(Array
            .contains(selectedRoles, $v_1.toUpperCase()) ||
            Array.contains(selectedRoles, $v_1.toLowerCase()))) return false
    }
    return true
};
Mscrm.AppModuleRoleAssignmentHelper.onClickVisibleToEveryone = function(crmGrid) {
    var $v_0 = $get("chkAll");
    !$v_0.checked && Mscrm.Utilities.click($v_0);
    $v_0.disabled = true;
    $get("visibleToSelectedRoles").checked = false;
    crmGrid.get_innerGrid().get_element().disabled = true;
    $get("selBusinessUnit").disabled = true;
    crmGrid.disableOrEnableAllGridCheckBoxes(true)
};
Mscrm.AppModuleRoleAssignmentHelper.onClickVisibleToSelectedRoles = function(crmGrid) {
    $get("visibleToEveryone").checked = false;
    crmGrid.get_innerGrid().get_element().disabled = false;
    $get("selBusinessUnit").disabled = false;
    $get("chkAll").disabled = false;
    crmGrid.disableOrEnableAllGridCheckBoxes(false)
};
Mscrm.AppModuleRoleAssignmentHelper.getNewlySelectedRoles = function(checkedRoles) {
    for (var $v_0 = [], $v_1 = 0; $v_1 < checkedRoles.length; $v_1++) {
        var $v_2 = checkedRoles[$v_1];
        !(Array.contains(Mscrm.AppModuleRoleAssignmentHelper.$C, $v_2.toUpperCase()) ||
                Array.contains(Mscrm.AppModuleRoleAssignmentHelper.$C, $v_2.toLowerCase())) &&
            Array.add($v_0, $v_2)
    }
    return $v_0
};
Mscrm.AppModuleRoleAssignmentHelper.getUnselectedRoles = function(checkedRoles) {
    for (var $v_0 = [], $v_1 = 0; $v_1 < Mscrm.AppModuleRoleAssignmentHelper.$C.length; $v_1++) {
        var $v_2 = Mscrm.AppModuleRoleAssignmentHelper.$C[$v_1];
        !(Array.contains(checkedRoles, $v_2.toUpperCase()) || Array.contains(checkedRoles, $v_2.toLowerCase())) &&
            Array.add($v_0, $v_2)
    }
    return $v_0
};
Mscrm.AppModuleRoleAssignmentHelper.setSelectedRoles = function() {
    for (var $v_0 = [], $v_1 = 0, $v_2 = document.getElementsByTagName("INPUT"), $v_3 = null, $v_4 = 0;
        $v_4 < $v_2.length;
        $v_4++) {
        $v_3 = $v_2[$v_4];
        if ($v_3.id.startsWith("checkBox_") && $v_3.checked) $v_0[$v_1++] = $v_2[$v_4].id.substr(9)
    }
    return $v_0
};
Mscrm.AppModuleRoleAssignmentHelper.addAttribute = function(cell, attributeName, attributeValue) {
    if (!IsNull(cell)) {
        var $v_0 = cell.ownerDocument.createAttribute(attributeName);
        $v_0.value = attributeValue;
        cell.attributes.setNamedItem($v_0)
    }
};
Mscrm.LoadingBuilder = function() {};
Mscrm.LoadingBuilder.createLoadingDivElement = function($p0) {
    var $v_0 =
        "<div id='{0}' style='position: absolute; width: 100%; height: 100%; top: 0px; background-color: #000; z-index: 1005; opacity: 0.7;'><table id='display-loader' style='width: 100%;height: 100%;position: fixed;color: #fff;z-index:1008;top:0;'><tr><td align='center' valign='middle'><img id='DialogLoadingDivImg' alt='' src='/_imgs/loading.gif'><p id='MessageToShow' style='font-weight: 300;font-size: 18px;margin: 6px;'>{1}</p><br></td></tr></table></div>";
    Mscrm.LoadingBuilder.loadingDivElement = $P_CRM(String.format($v_0, "DisaplayLoaderDiv", $p0));
    $P_CRM(window.top.document.body).append(Mscrm.LoadingBuilder.loadingDivElement)
};
Mscrm.LoadingBuilder.hideLoadingDiv = function() {
    $P_CRM(window.top.document.getElementById("DisaplayLoaderDiv")).hide()
};
Mscrm.LoadingBuilder.showLoadingDiv = function($p0, $p1) {
    if ($p1) {
        $P_CRM(window.parent.document.getElementById("InlineDialog_Background")).hide();
        $P_CRM(window.parent.document.getElementById("InlineDialog")).hide()
    } else {
        $P_CRM(document).find("#InlineDialog_Background").hide();
        $P_CRM(document).find("#InlineDialog").hide()
    }
    var $v_0 = $P_CRM(window.top.document.body);
    if (!$v_0.find("#DisaplayLoaderDiv").length) Mscrm.LoadingBuilder.createLoadingDivElement($p0);
    else {
        $v_0.find("#DisaplayLoaderDiv").show();
        $v_0.find("#MessageToShow").text($p0)
    }
};
Mscrm.ShowHideDefaultAppForAllRoles = function() {};
Mscrm.ShowHideDefaultAppForAllRoles.initializeShowForAllrole = function($p0, $p1) {
    Mscrm.ShowHideDefaultAppForAllRoles.showForAllrole = $p0;
    Mscrm.ShowHideDefaultAppForAllRoles.appId = $p1
};
Mscrm.ShowHideDefaultAppForAllRoles.defaultAppForAllRoles = function() {
    var $v_0 = XUI.Xml.LoadXml("<Organization/>"),
        $v_1 = XUI.Xml.SelectSingleNode($v_0, "Organization", null),
        $v_2 = $v_0.createElement("defaultappenabled"),
        $v_3 = $v_0.createTextNode("value");
    $v_3.data = Mscrm.ShowHideDefaultAppForAllRoles.showForAllrole.toString();
    $v_2.appendChild($v_3);
    $v_1.appendChild($v_2);
    var $v_4 = new XMLHttpRequest,
        $v_5 = Mscrm.CrmUri.create("/Tools/AppModuleContainer/Cmds/cmd_AppModuleOperations.aspx?oType=" + 3);
    $v_4.open("POST", $v_5.toString(), false);
    Mscrm.Utilities.setResponseTypeToMSXml($v_4);
    Mscrm.WrpcTokenFuncs.setTokenInHeader($v_4, $v_5);
    Mscrm.Utilities.safeHttpSend($v_4, $v_0);
    var $v_6 = $v_4.responseXML;
    if (IsNull($v_6))
        Mscrm.AppModuleContainer
            .successHandlerCallbackForShowHideDefaultApp(Mscrm.ShowHideDefaultAppForAllRoles.showForAllrole,
                Mscrm.ShowHideDefaultAppForAllRoles.appId);
    else {
        var $v_7 = XUI.Xml.SelectSingleNode($v_6, "/error", null);
        Mscrm.XmlUtil.handleXMLErr($v_4.responseXML, false)
    }
};
Mscrm.PublishAppModule = function() {};
Mscrm.PublishAppModule.publishingAppModule = function($p0) {
    Mscrm.LoadingBuilder.showLoadingDiv(Xrm.Internal
        .getResourceString("AppModuleLandingPage.PublishAppDialogProgressMessage"),
        false);
    var $v_0 = XUI.Xml.LoadXml("<AppModule/>"),
        $v_1 = XUI.Xml.SelectSingleNode($v_0, "AppModule", null),
        $v_2 = $v_0.createElement("appmoduleid"),
        $v_3 = $v_0.createTextNode("value");
    $v_3.data = $p0;
    $v_2.appendChild($v_3);
    $v_1.appendChild($v_2);
    var $v_4 = new XMLHttpRequest,
        $v_5 = Mscrm.CrmUri.create("/Tools/AppModuleContainer/Cmds/cmd_AppModuleOperations.aspx?oType=" + 1);
    $v_4.open("POST", $v_5.toString(), true);
    Mscrm.Utilities.setResponseTypeToMSXml($v_4);
    Mscrm.WrpcTokenFuncs.setTokenInHeader($v_4, $v_5);
    $v_4.onreadystatechange = function() {
        if ($v_4.readyState !== 4) return;
        var $v_6 = $v_4.responseXML;
        if (IsNull($v_6)) Mscrm.AppModuleContainer.successHandlerCallbackForPublishingApp($p0);
        else {
            var $v_7 = XUI.Xml.SelectSingleNode($v_6, "/error", null);
            if (IsNull($v_7)) Mscrm.AppModuleContainer.successHandlerCallbackForPublishingApp($p0);
            else Mscrm.XmlUtil.handleXMLErr($v_4.responseXML, false)
        }
        Mscrm.LoadingBuilder.hideLoadingDiv()
    };
    $v_4.send(XUI.Xml.XMLSerializer.serializeToString($v_0))
};
Mscrm.AppModuleBuilderHelper = function() {};
Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID = function($p0) { return window[$p0] };
Mscrm.TileAdminOptionsFlyoutItemBuilder = function(id, displayText, adminOptionItemClickHandler, toolTip) {
    this.$9_0 = id;
    this.$18_0 = toolTip;
    this.$4_0 = displayText;
    this.$8_0 = adminOptionItemClickHandler
};
Mscrm.TileAdminOptionsFlyoutItemBuilder.prototype = {
    $9_0: null,
    $4_0: null,
    $18_0: null,
    $8_0: null,
    build: function() {
        var $v_0 = String
                .format('<div id="{0}" class="tiles-moreInfoFlyout-row" title="{1}&#013;&#013;{2}" tabindex="0">{1}</div>', this.$9_0, this.$4_0, this.$18_0),
            $v_1 = Mscrm.TileBuilderHelper.createElementAndBindClickEvent($v_0, this.$8_0);
        return $v_1
    }
};
Mscrm.TileAdminOptionsFlyoutBuilder = function(id, tileButtonNode, adminOptionItemBuildersList) {
    if (IsNull(id)) throw Error.argumentNull("adminOptionsFlyoutContainerId");
    this.$9_0 = id;
    this.$S_0 = adminOptionItemBuildersList
};
Mscrm.TileAdminOptionsFlyoutBuilder.prototype = {
    $9_0: null,
    $S_0: null,
    build: function() {
        var $v_0 = String
                .format('<div id="{0}" class="tiles-moreInfoFlyout-container" id="tileMoreInfoFlyoutContainerId"></div>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$9_0)),
            $v_1 = $P_CRM($v_0);
        Mscrm.TileBuilderHelper.removeClickEventHandlerFromElement($v_1);
        for (var $v_2 = 0; $v_2 < this.$S_0.length; $v_2++) $v_1.append(this.$S_0[$v_2].build());
        return $v_1
    }
};
Mscrm.TileAdminOptionsFlyoutProvider = function(adminOptionItemClickHandler, tileNode, adminItemsList) {
    if (IsNull(adminOptionItemClickHandler)) throw Error.argumentNull("adminOptionItemClickHandler");
    this.$8_0 = adminOptionItemClickHandler;
    this.$16_0 = tileNode;
    this.$R_0 = adminItemsList
};
Mscrm.TileAdminOptionsFlyoutProvider.prototype = {
    $8_0: null,
    $16_0: null,
    $R_0: null,
    create: function(elementId, tileButtonNode) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < this.$R_0.length; $v_1++) {
            var $v_2 = this.$R_0[$v_1];
            $v_0[$v_1] = new Mscrm
                .TileAdminOptionsFlyoutItemBuilder($v_2.$1_0,
                    $v_2.$4_0,
                    Mscrm.TileBuilderHelper.createEventHandlerForAdminOptionItem(this.$8_0, this.$16_0, $v_2),
                    $v_2.$P_0)
        }
        return $v_0
    }
};
Mscrm.TileBuilderHelper = function() {};
Mscrm.TileBuilderHelper.createElementAndBindClickEvent = function($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    !IsNull($p1) && $v_0.bind("click", $p1);
    return $v_0
};
Mscrm.TileBuilderHelper.createEventHandlerForTile = function($p0, $p1) {
    if (IsNull($p1)) throw Error.argumentNull("tileNode");
    return function($p1_0) {
        !IsNull($p0) && $p0($p1, $p1_0);
        $p1_0.preventDefault();
        $p1_0.stopPropagation()
    }
};
Mscrm.TileBuilderHelper.createEventHandlerForAdminOptionItem = function($p0, $p1, $p2) {
    if (IsNull($p1)) throw Error.argumentNull("tileNode");
    if (IsNull($p2)) throw Error.argumentNull("adminOptionItem");
    return function($p1_0) {
        !IsNull($p0) && $p0($p1, $p2);
        $p1_0.preventDefault();
        $p1_0.stopPropagation()
    }
};
Mscrm.TileBuilderHelper.createEventHandlerForElement = function($p0, $p1) {
    return function($p1_0) {
        !IsNull($p0) && $p0($p1);
        $p1_0.preventDefault();
        $p1_0.stopPropagation()
    }
};
Mscrm.TileBuilderHelper
    .removeClickEventHandlerFromElement = function($p0) { $p0.bind("click", Mscrm.TileBuilderHelper.$1O()) };
Mscrm.TileBuilderHelper.$1O = function() {
    return function($p1_0) {
        $p1_0.preventDefault();
        $p1_0.stopPropagation()
    }
};
Mscrm.TileBuilderHelper.bindClickEventToElement = function($p0, $p1) {
    !IsNull($p1) && $p0.bind("click", $p1);
    return $p0
};
Mscrm.TileButtonContainerBuilder = function(id, tileButtonBuilders) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (IsNull(tileButtonBuilders)) throw Error.argumentNull("tileButtonBuilders");
    this.$1_0 = id;
    this.$d_0 = tileButtonBuilders
};
Mscrm.TileButtonContainerBuilder.prototype = {
    $d_0: null,
    $1_0: null,
    build: function() {
        for (var $v_0 = $P_CRM(String.format('<div id="{0}" class="tile-panel"/>',
                     CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1_0))),
            $v_1 = $P_CRM('<div class="tile-group"/>'),
            $v_2 = 0;
            $v_2 < this.$d_0.length;
            $v_2++) $v_1.append(this.$d_0[$v_2].build());
        $v_0.append($v_1);
        return $v_0
    }
};
Mscrm.TileBuilderProvider = function(adminOptionEventHandler,
    isSystemAdmin,
    isAdmin,
    ellipsisText,
    ellipsisTooltip,
    pageUrl,
    clientTypeValue) {
    if (IsNull(adminOptionEventHandler)) throw Error.argumentNull("adminOptionEventHandler");
    this.$h_0 = adminOptionEventHandler;
    this.$2_0 = isSystemAdmin;
    this.$0_0 = isAdmin;
    this.$l_0 = clientTypeValue;
    this.$M_0 = ellipsisText;
    this.$B_0 = ellipsisTooltip;
    this.$7_0 = pageUrl
};
Mscrm.TileBuilderProvider.prototype = {
    $h_0: null,
    $2_0: false,
    $0_0: false,
    $M_0: null,
    $B_0: null,
    $7_0: null,
    $l_0: null,
    create: function(tileNodes) {
        for (var $v_0 = [], $v_1 = [], $v_2 = 0; $v_2 < tileNodes.length; $v_2++) {
            var $v_3 = tileNodes[$v_2];
            $v_0[$v_2] = new Mscrm.TileButtonBuilder($v_3.AppModuleId,
                $v_3.ClientType,
                CrmEncodeDecode.CrmHtmlDecode($v_3.Name),
                CrmEncodeDecode.CrmHtmlDecode($v_3.Description),
                Mscrm.TileBuilderHelper.createEventHandlerForTile(this.$h_0, $v_3),
                $v_3.Url,
                IsNull($v_3.PublisherName) ? "" : $v_3.PublisherName,
                this.$2_0,
                this.$0_0,
                $v_3.IconPath,
                IsNull($v_3.PublishedOn) ? "" : $v_3.PublishedOn,
                $v_3.ComponentState,
                $v_3.IconName,
                this.$M_0,
                this.$B_0,
                this.$7_0,
                this.$l_0,
                this.getPageNavigationUrl($v_3),
                $v_3.UniqueName)
        }
        return $v_0
    },
    getPageNavigationUrl: function($p0) {
        if ($p0.AppModuleId === "00000000-0000-0000-0000-000000000000") {
            var $v_0 = Mscrm.CrmUri.create("main.aspx", window.ORG_UNIQUE_NAME);
            return $v_0.toString()
        } else {
            var $v_1 = $p0.AppModuleId;
            if ($p0.ComponentState === 1) {
                var $v_2 = String.format("{0}/designer/app/{1}/{2}", this.$7_0, $p0.SolutionId, $p0.AppModuleId);
                return $v_2
            } else {
                var $v_3 = Mscrm.CrmUri.create("main.aspx?appid=" + $v_1, window.ORG_UNIQUE_NAME);
                return $v_3.toString()
            }
        }
    }
};
Mscrm.AppModuleHeaderBuilder = function(id,
    userName,
    welcomeText,
    buttonText,
    buttonTooltip,
    clickEventHandler,
    isAdmin,
    isAppDesignerFcbEnabled) {
    if (IsNull(id)) throw Error.argumentNull("Id");
    this.$o_0 = id;
    this.$1F_0 = userName;
    this.$1A_0 = welcomeText;
    this.$p_0 = buttonText;
    this.$q_0 = buttonTooltip;
    this.$0_0 = isAdmin;
    this.$y_0 = isAppDesignerFcbEnabled;
    this.$n_0 = clickEventHandler
};
Mscrm.AppModuleHeaderBuilder.prototype = {
    $o_0: null,
    $1A_0: null,
    $p_0: null,
    $q_0: null,
    $1F_0: null,
    $0_0: false,
    $y_0: false,
    $n_0: null,
    build: function() {
        var $v_0 = String
                .format('<div id="{0}" class="tiles-createNewApp-container"><div class="tiles-header">{1}</div> ',
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$o_0),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$1A_0)),
            $v_1 = $P_CRM($v_0);
        if (this.$0_0 && this.$y_0) {
            var $v_2 = $P_CRM(String
                    .format('<div class="tiles-createNewApp-button" tabindex="0" title="{0}&#013;&#013;{1}"><img class="tiles-createNewApp-img" src="/_imgs/ribbon/New_16.png"><span>{0}</span></div>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$p_0), this.$q_0)),
                $v_3 = Mscrm.TileBuilderHelper
                    .bindClickEventToElement($v_2,
                        Mscrm.TileBuilderHelper.createEventHandlerForElement(this.$n_0, $v_2));
            $v_1.append($v_3)
        }
        return $v_1
    }
};
Mscrm.TileFiltersBuilder = function(id,
    publishText,
    publishTooltip,
    draftText,
    draftTooltip,
    publishedAppsCount,
    draftAppsCount,
    clickEventHandler,
    isAdmin) {
    if (IsNull(id)) throw Error.argumentNull("id");
    this.$v_0 = id;
    this.$14_0 = publishText;
    this.$15_0 = String.format(publishTooltip, publishedAppsCount);
    this.$t_0 = draftText;
    this.$u_0 = String.format(draftTooltip, draftAppsCount);
    this.$12_0 = publishedAppsCount;
    this.$s_0 = draftAppsCount;
    this.$0_0 = isAdmin;
    this.$X_0 = clickEventHandler
};
Mscrm.TileFiltersBuilder.prototype = {
    $v_0: null,
    $14_0: null,
    $15_0: null,
    $t_0: null,
    $u_0: null,
    $12_0: null,
    $s_0: null,
    $D_0: null,
    $A_0: null,
    $X_0: null,
    $0_0: false,
    build: function() {
        this.$D_0 = $P_CRM(String
            .format('<div class="tile-filters-publishedApps" {0}="{1}" title="{2}" tabindex="0">{3} ({4}) </div>',
                "tileFilterType",
                1,
                this.$15_0,
                this.$14_0,
                this.$12_0));
        this.$D_0 = Mscrm.TileBuilderHelper
            .bindClickEventToElement(this.$D_0,
                Mscrm.TileBuilderHelper.createEventHandlerForElement(this.$X_0, this.$D_0));
        var $v_0 = $P_CRM(String.format('<div id="{0}" class="tile-filters-container"></div>', this.$v_0));
        $v_0.append(this.$D_0);
        if (this.$0_0) {
            this.$A_0 = $P_CRM(String
                .format('<div class="tile-filters-draftApps" {0}="{1}" title="{2}" tabindex="0">{3} ({4}) </div>',
                    "tileFilterType",
                    2,
                    this.$u_0,
                    this.$t_0,
                    this.$s_0));
            this.$A_0 = Mscrm.TileBuilderHelper
                .bindClickEventToElement(this.$A_0,
                    Mscrm.TileBuilderHelper.createEventHandlerForElement(this.$X_0, this.$A_0));
            var $v_1 = $P_CRM(String.format('<div class="tile-filters-separator"></div>', ""));
            $v_0.append($v_1);
            $v_0.append(this.$A_0)
        }
        return $v_0
    }
};
Mscrm.TileAdminOptionItems = function(itemType, id, text, toolTip) {
    this.$N_0 = itemType;
    this.$1_0 = id;
    this.$4_0 = text;
    this.$P_0 = toolTip
};
Mscrm.TileAdminOptionItems.prototype = {
    $N_0: 0,
    $1_0: null,
    $4_0: null,
    $P_0: null,
    get_itemType: function() { return this.$N_0 },
    set_itemType: function(value) {
        this.$N_0 = value;
        return value
    },
    get_id: function() { return this.$1_0 },
    set_id: function(value) {
        this.$1_0 = value;
        return value
    },
    get_displayText: function() { return this.$4_0 },
    set_displayText: function(value) {
        this.$4_0 = value;
        return value
    },
    get_toolTip: function() { return this.$P_0 },
    set_toolTip: function(value) {
        this.$P_0 = value;
        return value
    }
};
Mscrm.AppModuleConstants = function() {};
Mscrm.AppModuleConstants.FilterTypes = function() {};
Mscrm.AppModuleConstants.FilterTypes.prototype = { publishedApps: 1, draftApps: 2 };
Mscrm.AppModuleConstants.FilterTypes.registerEnum("Mscrm.AppModuleConstants.FilterTypes", false);
Mscrm.AppModuleConstants.ComponentState = function() {};
Mscrm.AppModuleConstants.ComponentState.prototype = { published: 0, unPublished: 1 };
Mscrm.AppModuleConstants.ComponentState.registerEnum("Mscrm.AppModuleConstants.ComponentState", false);
Mscrm.AppModuleConstants.ClientType = function() {};
Mscrm.AppModuleConstants.ClientType.prototype = { MOCA: 1, web: 2 };
Mscrm.AppModuleConstants.ClientType.registerEnum("Mscrm.AppModuleConstants.ClientType", false);
Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes = function() {};
Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes
    .prototype = { activate: 1, openDesigner: 2, manageRoles: 3, manageLegacyApp: 4 };
Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes
    .registerEnum("Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes", false);
Mscrm.AppModuleConstants.AdminOperationType = function() {};
Mscrm.AppModuleConstants.AdminOperationType.prototype = { publishApp: 1, manageApp: 2, manageLegacyApp: 3 };
Mscrm.AppModuleConstants.AdminOperationType.registerEnum("Mscrm.AppModuleConstants.AdminOperationType", false);
Mscrm.AppModuleCssConstants = function() {};
Mscrm.TileAdminOptionsFlyoutControl = function(elementId, flyoutBuilderProvider) {
    if (isNullOrEmptyString(elementId)) throw Error.argumentNull("tileAdminOptionsFlyoutContainerId");
    this.$V_0 = elementId;
    this.$w_0 = flyoutBuilderProvider
};
Mscrm.TileAdminOptionsFlyoutControl.prototype = {
    $V_0: null,
    $E_0: null,
    $w_0: null,
    tileFlyoutBuilderProvider: function(tileNode) {
        var $v_0 = this.$w_0.create(this.$V_0, tileNode),
            $v_1 = new Mscrm.TileAdminOptionsFlyoutBuilder(this.$V_0, tileNode, $v_0),
            $v_2 = $v_1.build();
        return $v_2
    },
    render: function(ellipsisElement, tileNode) {
        if (IsNull(ellipsisElement)) throw Error.argumentNull("ellipsisElement");
        this.$E_0 = new Mscrm.ExecutionCompletedNotifier;
        var $v_0 = this.tileFlyoutBuilderProvider(tileNode);
        ellipsisElement.append($v_0);
        return this.$E_0
    }
};
Mscrm.TileControlContainerFactory = function(rootElementId) { this.$F_0 = rootElementId };
Mscrm.TileControlContainerFactory.prototype = {
    $F_0: null,
    createControlContainer: function() { return new Mscrm.TileControlContainer(this.$F_0) }
};
Mscrm.TileControlContainer = function(rootElementId) {
    if (isNullOrEmptyString(rootElementId)) throw Error.argumentNull("rootElementId");
    this.$F_0 = rootElementId
};
Mscrm.TileControlContainer.prototype = {
    $F_0: null,
    $10_0: false,
    $W_0: null,
    $6_0: null,
    show: function() {
        this.$W_0 = $P_CRM(this.$6_0);
        $P_CRM("#" + this.$F_0).append(this.$W_0)
    },
    setContent: function(content) { this.$6_0 = content },
    removeContent: function() {
        this.$6_0 = null;
        this.$W_0 = null;
        $P_CRM("#tileContainer").remove()
    },
    dispose: function() {
        if (this.$10_0) return;
        if (this.$6_0) {
            this.$6_0.find("*").andSelf().unbind().off();
            this.$6_0.remove();
            this.$6_0 = null
        }
        this.$10_0 = true
    }
};
Mscrm.TileControl = function(id, containerControlFactory) {
    this.$$d_$1M_1 = Function.createDelegate(this, this.$1M_1);
    Mscrm.TileControl.initializeBase(this, [containerControlFactory]);
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    this.$1_1 = id
};
Mscrm.TileControl.prototype = {
    $1_1: null,
    tileContentProvider: function(tileNodes) {
        var $v_0 = this.$K_0.create(tileNodes),
            $v_1 = new Mscrm.TileButtonContainerBuilder(this.$1_1, $v_0),
            $v_2 = $v_1.build();
        return $v_2
    },
    getContent: function(tileNodes) {
        var $v_0 = this.tileContentProvider(tileNodes);
        return $v_0
    },
    render: function(tileNodes) {
        var $v_0 = Mscrm.TileBasedControl.prototype.render.call(this, tileNodes);
        $v_0.QueueUntilNotified(this.$$d_$1M_1);
        return $v_0
    },
    $1M_1: function($p0) {}
};
Mscrm.TileBasedControl = function(containerControlFactory) {
    if (IsNull(containerControlFactory)) throw Error.argumentNull("containerControlFactory");
    this.$m_0 = containerControlFactory
};
Mscrm.TileBasedControl.prototype = {
    $m_0: null,
    $J_0: null,
    $E_0: null,
    $K_0: null,
    get_contentProvider: function() { return this.$K_0 },
    set_contentProvider: function(value) {
        this.$K_0 = value;
        return value
    },
    render: function(tileNodes) {
        if (IsNull(tileNodes)) throw Error.argumentNull("tileNodes");
        this.$E_0 = new Mscrm.ExecutionCompletedNotifier;
        var $v_0 = this.$E_0;
        this.$J_0 = this.$m_0.createControlContainer();
        var $v_1 = this.getContent(tileNodes);
        this.$J_0.removeContent();
        this.$J_0.setContent($v_1);
        this.$J_0.show();
        return $v_0
    }
};
Mscrm.AppModuleStructure = function(tileStructureProvider) {
    if (IsNull(tileStructureProvider)) throw Error.argumentNull("tileStructureProvider");
    this.$17_0 = tileStructureProvider
};
Mscrm.AppModuleStructure.prototype = {
    $17_0: null,
    $O_0: null,
    getTileStructure: function() {
        var $v_0 = this.$17_0.GetAppModuleTileStructure(), $$t_3 = this;
        $v_0.QueueUntilNotified(function($p1_0) {
            if (IsNull($p1_0)) throw Error.invalidOperation();
            var $v_1 = $p1_0;
            $$t_3.$O_0 = $v_1
        });
        return $v_0
    }
};
Mscrm.ExecutionCompletedNotifier = function() { this.$5_0 = [] };
Mscrm.ExecutionCompletedNotifier.prototype = {
    $5_0: null,
    $z_0: false,
    $r_0: null,
    QueueUntilNotified: function(executionCompletedHandler) {
        if (IsNull(executionCompletedHandler)) throw Error.argumentNull("executionCompletedHandler");
        this.$5_0.push(executionCompletedHandler);
        this.$z_0 && this.NotifyCompleted(this.$r_0)
    },
    NotifyCompleted: function(result) {
        if (!IsNull(this.$5_0) && this.$5_0.length > 0) {
            var $v_0 = this.$5_0.pop();
            while ($v_0) {
                $v_0(result);
                $v_0 = this.$5_0.pop()
            }
        }
        Array.clear(this.$5_0);
        this.$r_0 = result;
        this.$z_0 = true
    }
};
Mscrm.AppModuleContainer = function($p0) {
    this.$$d_$1B_3 = Function.createDelegate(this, this.$1B_3);
    this.GetAppModuleTileStructure = this.getAppModuleTileStructure;
    Mscrm.AppModuleContainer.initializeBase(this, [$p0]);
    var $v_0 = new Mscrm.TileControlContainerFactory("appModuleContainer");
    this.$e_3 = new Mscrm.TileControl("tileContainer", $v_0);
    this.$O_3 = new Mscrm.AppModuleStructure(this);
    this.$1D_3 = $p0.id
};
Mscrm.AppModuleContainer.$1P = function($p0, $p1) {
    var $v_0 = new Xrm.ConfirmDialogStrings;
    $v_0.title = Xrm.Internal.getResourceString("LandingPage_defaultApp_ConfirmDialogTitle");
    if ($p0) $v_0.text = Xrm.Internal.getResourceString("LandingPage_defaultApp_ConfirmDlgForHideDefaultApp");
    else $v_0.text = Xrm.Internal.getResourceString("LandingPage_defaultApp_ConfirmDlgForShowDefaultApp");
    $v_0.confirmButtonLabel = Xrm.Internal.getResourceString("LandingPage_defaultApp_Dialog_Button_Continue");
    $v_0.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 500;
    Mscrm.ShowHideDefaultAppForAllRoles.initializeShowForAllrole(!$p0, $p1);
    Xrm.Dialog.openConfirmDialog($v_0, $v_1, Mscrm.ShowHideDefaultAppForAllRoles.defaultAppForAllRoles, null)
};
Mscrm.AppModuleContainer.successHandlerCallbackForPublishingApp = function(AppId) {
    Mscrm.CrmLocalStorage.setItem("latestPublishedAppId", AppId);
    window.location.reload()
};
Mscrm.AppModuleContainer.successHandlerCallbackForShowHideDefaultApp = function(ShowOrHide, AppId) {
    for (var $v_0 = 0; $v_0 < Mscrm.AppModuleContainer.$G.length; $v_0++) {
        var $v_1 = Mscrm.AppModuleContainer.$G[$v_0];
        if ($v_1.AppModuleId === AppId) {
            $v_1.IsDefault = ShowOrHide;
            Mscrm.AppModuleContainer.$G[$v_0] = $v_1
        }
    }
};
Mscrm.AppModuleContainer.createNewTabOkButtonClickedEventHandlerCallback = function(retValue) { var $v_0 = retValue };
Mscrm.AppModuleContainer.prototype = {
    $1D_3: null,
    $e_3: null,
    $1E_3: null,
    $O_3: null,
    $f_3: null,
    $0_3: false,
    $I_3: false,
    $2_3: false,
    $a_3: false,
    $L_3: null,
    get_tilesData: function() { return this.$f_3 },
    set_tilesData: function(value) {
        this.$f_3 = value;
        return value
    },
    get_isAdmin: function() { return this.$0_3 },
    set_isAdmin: function(value) {
        this.$0_3 = value;
        return value
    },
    get_canPublishCustomization: function() { return this.$I_3 },
    set_canPublishCustomization: function(value) {
        this.$I_3 = value;
        return value
    },
    get_isSystemAdmin: function() { return this.$2_3 },
    set_isSystemAdmin: function(value) {
        this.$2_3 = value;
        return value
    },
    get_defaultSolutionId: function() { return this.$L_3 },
    set_defaultSolutionId: function(value) {
        this.$L_3 = value;
        return value
    },
    initialize: function() {
        if (window.performance) {
            Mscrm.Performance.PerformanceMarkerManager.get_instance()
                .addRetroactiveMarker("AppLanding Page Start", 1, window.performance.timing.requestStart);
            Mscrm.MetricsStopwatch
                .createRetroactiveStopwatch("Landing Page Request",
                    window.performance.timing.requestStart,
                    window.performance.timing.responseEnd);
            Mscrm.MetricsStopwatch
                .createRetroactiveStopwatch("Page Load", window.performance.timing.responseEnd, (new Date).getTime())
        }
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.Render();
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Render Complete", 1)
    },
    Render: function() {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Render Start", 1);
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("Render");
        $v_0.start();
        var $v_1 = this.$O_3.getTileStructure(), $$t_3 = this;
        $v_1.QueueUntilNotified(function($p1_0) {
            if (!IsNull($p1_0)) {
                Mscrm.AppModuleContainer.$G = $p1_0;
                $$t_3.$1V_3(Mscrm.AppModuleContainer.$G)
            }
        });
        $v_0.stop()
    },
    $1V_3: function($p0) {
        this.addRtlClass();
        $P_CRM("#appModuleContainer").attr("role", "application");
        this.$1Y_3();
        this.$1Z_3($p0);
        this.$1I_3(1, $p0);
        this.$1L_3();
        var $v_0 = Mscrm.CrmLocalStorage.getItem("latestPublishedAppId");
        if ($v_0) {
            var $v_1 = $get($v_0);
            $v_1 && $v_1.focus();
            Mscrm.CrmLocalStorage.clear()
        }
    },
    addRtlClass: function() { window.LOCID_UI_DIR === "RTL" && $P_CRM("#appModuleContainer").addClass("rtl-model") },
    $1L_3: function() { $P_CRM(window).bind("click", this.$$d_$1B_3) },
    $1a_3: function($p0) {
        if (IsNull($p0)) throw Error.argumentNull("tilesData");
        var $v_0 = $p0,
            $v_1 = new Mscrm.TileBuilderProvider(this.$1K_3($v_0),
                this.$2_3,
                this.$0_3,
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MOREOPTIONSTEXT"),
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MOREOPTIONSTOOLTIP"),
                Xrm.Page.context.getClientUrl(),
                Xrm.Internal.getResourceString("SitemapDesigner.Web"));
        this.$e_3.$K_0 = $v_1;
        this.$1E_3 = this.$e_3.render($v_0)
    },
    $1Q_3: function($p0) {
        var $v_0 = [];
        if ($p0.AppModuleId === "00000000-0000-0000-0000-000000000000") Array.add($v_0, this.$1R_3($p0));
        else {
            $p0.ComponentState === 1 &&
                this.$I_3 &&
                Array.add($v_0,
                    new Mscrm.TileAdminOptionItems(1,
                        Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes.toString(1),
                        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_PUBLISHAPP"),
                        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_PUBLISHAPPTOOLTIP")));
            Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AppDesigner") &&
                Array.add($v_0,
                    new Mscrm.TileAdminOptionItems(2,
                        Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes.toString(2),
                        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_OPENINDESIGNER"),
                        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_OPENINDESIGNERTOOLTIP")));
            $p0.ComponentState === 0 &&
                this.$I_3 &&
                Array.add($v_0,
                    new Mscrm.TileAdminOptionItems(3,
                        Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes.toString(3),
                        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEROLES"),
                        Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_MANAGEROLESTOOLTIP")))
        }
        return $v_0
    },
    $1R_3: function($p0) {
        var $v_0 = $p0.IsDefault, $v_1 = "", $v_2 = "";
        if ($v_0) {
            $v_1 = Xrm.Internal.getResourceString("LandingPage_defaultApp_HideForAllRoles");
            $v_2 = Xrm.Internal.getResourceString("LandingPage_defaultApp_HideForAllRolesTooltip")
        } else if (!$v_0) {
            $v_1 = Xrm.Internal.getResourceString("LandingPage_defaultApp_ShowForAllRoles");
            $v_2 = Xrm.Internal.getResourceString("LandingPage_defaultApp_ShowForAllRolesTooltip")
        }
        return new Mscrm.TileAdminOptionItems(4,
            Mscrm.AppModuleConstants.AdminOptionsFlyoutItemTypes.toString(4),
            $v_1,
            $v_2)
    },
    $1K_3: function($p0) {
        var $$t_7 = this;
        return function($p1_0, $p1_1) {
            var $v_0 = null;
            if (!IsNull($p1_1) && !IsNull($p1_1.target)) $v_0 = $P_CRM($p1_1.target);
            if (IsNull($v_0)) throw Error.argumentNull("tile element");
            $$t_7.$1B_3($p1_1);
            var $v_1 = $$t_7.$1Q_3($p1_0),
                $v_2 = new Mscrm.TileAdminOptionsFlyoutProvider($$t_7.$1J_3(), $p1_0, $v_1),
                $v_3 = new Mscrm.TileAdminOptionsFlyoutControl("tileAdminOptionsFlyoutContainerId", $v_2);
            $v_3.render($v_0, $p1_0);
            $$t_7.$a_3 = true;
            return null
        }
    },
    $1J_3: function() {
        var $v_0 = this, $$t_6 = this;
        return function($p1_0, $p1_1) {
            if (IsNull($p1_0)) throw Error.argumentNull("tileNode");
            if (IsNull($p1_1)) throw Error.argumentNull("adminOptionItem");
            switch ($p1_1.$N_0) {
            case 1:
                Mscrm.PublishAppModule.publishingAppModule($p1_0.AppModuleId);
                break;
            case 2:
                var $v_1 = Xrm.Page.context.getClientUrl() + "/designer/app/" + $$t_6.$L_3 + "/" + $p1_0.AppModuleId;
                window.open($v_1, "_blank");
                break;
            case 3:
                Mscrm.Performance.PerformanceMarkerManager.get_instance().clearAllMarkers();
                Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Load Manage Role Start", 1);
                setPerfMarkerTimestamp("ManageRolesRequestStart");
                var $v_2 = Xrm.Page.context.getClientUrl() +
                    "/tools/AppModuleContainer/dialogs/managerole.aspx?appId=" +
                    $p1_0.AppModuleId +
                    "&cState=" +
                    $p1_0.ComponentState;
                $v_0.$1X_3(500, 600, $v_2, null);
                break;
            case 4:
                var $v_3 = $p1_0.IsDefault;
                Mscrm.AppModuleContainer.$1P($v_3, $p1_0.AppModuleId);
                break
            }
            $$t_6.$1B_3(null);
            return null
        }
    },
    $1B_3: function($p0) {
        if (this.$a_3) {
            $P_CRM("#tileAdminOptionsFlyoutContainerId").remove();
            this.$a_3 = false
        }
    },
    $1Z_3: function($p0) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("Render Tile Filters");
        $v_0.start();
        var $v_1 = this.$1T_3($p0);
        $P_CRM("#appModuleContainer").append($v_1);
        $v_0.stop()
    },
    $1T_3: function($p0) {
        var $v_0, $v_1, $$t_5, $$t_6;
        this.$1U_3($p0, $$t_5 = { val: $v_0 }, $$t_6 = { val: $v_1 }), $v_0 = $$t_5.val, $v_1 = $$t_6.val;
        var $v_2 = new Mscrm.TileFiltersBuilder("tileFiltersContainer",
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_PUBLISHEDAPPS"),
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_PUBLISHEDAPPSTOOLTIP"),
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_DRAFTAPPS"),
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_DRAFTAPPSTOOLTIP"),
                $v_0.toString(),
                $v_1.toString(),
                this.$1b_3($p0),
                this.$0_3),
            $v_3 = $v_2.build();
        return $v_3
    },
    $1U_3: function($p0, $p1, $p2) {
        $p1.val = 0;
        $p2.val = 0;
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0];
            if ($v_1.ComponentState === 0) $p1.val++;
            else $p2.val++
        }
    },
    $1b_3: function($p0) {
        var $v_0 = this, $$t_4 = this;
        return function($p1_0) {
            if (IsNull($p1_0)) return null;
            if ($$t_4.$1W_3($p1_0)) return null;
            var $v_1 = Number.parseInvariant($p1_0.attr("tileFilterType"));
            $$t_4.$1I_3($v_1, $p0);
            return null
        }
    },
    $1I_3: function($p0, $p1) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("Render Tiles");
        $v_0.start();
        var $v_1 = null;
        switch ($p0) {
        case 1:
            this.$1H_3($p0);
            $v_1 = this.$1G_3($p0, $p1);
            break;
        case 2:
            this.$1H_3($p0);
            $v_1 = this.$1G_3($p0, $p1);
            break
        }
        this.$1a_3($v_1);
        $v_0.stop()
    },
    $1W_3: function($p0) {
        var $v_0 = $P_CRM("#tileFiltersContainer").find(".tile-filters-active");
        if (!IsNull($v_0) && $v_0.attr("tileFilterType") === $p0.attr("tileFilterType")) return true;
        return false
    },
    $1H_3: function($p0) {
        var $v_0 = null, $v_1 = $P_CRM("#tileFiltersContainer").find(".tile-filters-active");
        if (!IsNull($v_1) && $v_1.length > 0) {
            var $v_2 = Number.parseInvariant($v_1.attr("tileFilterType"));
            $v_2 !== $p0 && $v_1.removeClass("tile-filters-active")
        }
        $v_0 = $P_CRM("#tileFiltersContainer").find("[tileFilterType=" + $p0 + "]");
        !IsNull($v_0) && $v_0.length > 0 && $v_0.addClass("tile-filters-active")
    },
    $1G_3: function($p0, $p1) {
        for (var $v_0 = $p1, $v_1 = [], $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            switch ($p0) {
            case 1:
                $v_3.ComponentState === 0 && Array.add($v_1, $v_3);
                break;
            case 2:
                $v_3.ComponentState === 1 && Array.add($v_1, $v_3);
                break
            }
        }
        return $v_1
    },
    $1Y_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("Render App Section");
        $v_0.start();
        var $v_1 = this.$1S_3();
        $P_CRM("#appModuleContainer").append($v_1);
        $v_0.stop()
    },
    $1S_3: function() {
        var $v_0 = Xrm.Page.context.getUserName(),
            $v_1 = new Mscrm.AppModuleHeaderBuilder("createNewAppContainer",
                $v_0,
                String.format(Mscrm.AppModuleBuilderHelper
                    .getResourceStringFromLOCID("LOCID_AM_WELCOMEUSERTEXT"),
                    $v_0),
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_CREATEAPP"),
                Mscrm.AppModuleBuilderHelper.getResourceStringFromLOCID("LOCID_AM_CREATEAPPTOOLTIP"),
                this.$1N_3(),
                this.$0_3,
                Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AppDesigner")),
            $v_2 = $v_1.build();
        return $v_2
    },
    $1N_3: function() {
        var $v_0 = this, $$t_3 = this;
        return function($p1_0) {
            var $v_1 = Xrm.Page.context.getClientUrl() + "/Designer/App/" + $$t_3.$L_3;
            window.open($v_1, "_blank");
            return null
        }
    },
    $1X_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = $p0;
        $v_0.width = $p1;
        if ($p3) Xrm.Internal.openDialog(Mscrm.CrmUri.create($p2).toString(), $v_0, null, null, $p3);
        else Xrm.Internal.openDialog(Mscrm.CrmUri.create($p2).toString(), $v_0, null, null, null)
    },
    getAppModuleTileStructure: function() {
        var $v_0 = new Mscrm.ExecutionCompletedNotifier;
        $v_0.NotifyCompleted(this.$f_3);
        return $v_0
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.TileButtonBuilder = function(id,
    clientType,
    name,
    description,
    adminOptionClickHandler,
    url,
    publisherName,
    isSystemAdmin,
    isAdmin,
    iconPath,
    publishedOn,
    componentState,
    iconName,
    ellipsisText,
    ellipsisTooltip,
    pageUrl,
    clientTypeValue,
    pageNavigationUrl,
    uniqueName) {
    if (isNullOrEmptyString(id)) throw Error.argumentNull("id");
    if (clientType === 2) this.$k_0 = clientTypeValue;
    this.$1_0 = id;
    this.$b_0 = name;
    this.$Z_0 = description;
    this.$g_0 = adminOptionClickHandler;
    this.$19_0 = url;
    this.$c_0 = publisherName;
    this.$2_0 = isSystemAdmin;
    this.$0_0 = isAdmin;
    this.$x_0 = iconPath;
    this.$13_0 = publishedOn;
    this.$U_0 = componentState;
    this.$1C_0 = iconName;
    this.$Q_0 = uniqueName;
    this.$M_0 = ellipsisText;
    this.$B_0 = ellipsisTooltip;
    this.$7_0 = pageUrl;
    this.$11_0 = pageNavigationUrl
};
Mscrm.TileButtonBuilder.prototype = {
    $1_0: null,
    $k_0: null,
    $g_0: null,
    $b_0: null,
    $c_0: null,
    $Z_0: null,
    $19_0: null,
    $11_0: null,
    $2_0: false,
    $0_0: false,
    $x_0: null,
    $13_0: null,
    $U_0: 0,
    $1C_0: null,
    $Q_0: null,
    $M_0: null,
    $B_0: null,
    $7_0: null,
    build: function() {
        var $v_0 = $P_CRM('<div class="tile-button-container"/>'),
            $v_1 = String
                .format('<a class="tile-button" id="{0}" title="{1}" href="{2}" target="{3}" tabindex="0"><div class="tile-button-icon"><img class="tile-button-icon-img" src="{4}" alt="{5}" title="{5}&#013;{6}"></div><div id="{7}" class="tile-button-data"><div class="{8}" title="{5}">{9}</div><div class="{10}" title="{6}">{11}</div></div></a>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$Q_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$19_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$11_0), this.$U_0 === 0 ? "_top" : "_blank", CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.CrmUri.create("$Webresource:" + this.$x_0, this.$7_0).toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$b_0), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$Z_0), CrmEncodeDecode.CrmHtmlAttributeEncode(String.format("tileButtonDataContainerId_{0}", this.$Q_0)), this.$0_0 ? "tile-button-data-title" : "tile-button-data-title-for-non-admin", CrmEncodeDecode.CrmHtmlEncode(this.$b_0), this.$0_0 ? "tile-button-data-description" : "tile-button-data-description-for-non-admin", CrmEncodeDecode.CrmHtmlEncode(this.$Z_0)),
            $v_2 = $P_CRM($v_1);
        if (this.$0_0) {
            var $v_3 = this.$U_0 === 0 && this.$c_0 !== "",
                $v_4 = String
                    .format('<div class="tile-button-data-footer"><div class="tile-button-supportedclients" title="{0}">{0}</div><div  class="tile-button-footer-publishdetails"><span class="tile-button-publishername" title="{1}">{1}</span> {2} <span class="tile-button-publishedon" title="{3}">{3}</span></div></div>', CrmEncodeDecode.CrmHtmlEncode(this.$k_0), $v_3 ? CrmEncodeDecode.CrmHtmlEncode(this.$c_0) : "", $v_3 ? "|" : "", CrmEncodeDecode.CrmHtmlEncode(this.$13_0)),
                $v_5 = $P_CRM($v_4);
            if (this.$1_0 !== "00000000-0000-0000-0000-000000000000" ||
                this.$1_0 === "00000000-0000-0000-0000-000000000000" && this.$2_0) {
                var $v_6 = String
                        .format('<div class="tile-ellipsis" tabindex="0" title="{0}"><span class="hide-ellipsis">{0}</span></div>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$B_0)),
                    $v_7 = Mscrm.TileBuilderHelper.createElementAndBindClickEvent($v_6, this.$g_0);
                $v_5.append($v_7)
            }
            $v_2.find("#" + String.format("tileButtonDataContainerId_{0}", this.$Q_0)).append($v_5)
        }
        $v_0.append($v_2);
        return $v_0
    }
};
Mscrm.AppModuleRoleAssignment.registerClass("Mscrm.AppModuleRoleAssignment");
Mscrm.AppModuleRoleAssignmentHelper.registerClass("Mscrm.AppModuleRoleAssignmentHelper");
Mscrm.LoadingBuilder.registerClass("Mscrm.LoadingBuilder");
Mscrm.ShowHideDefaultAppForAllRoles.registerClass("Mscrm.ShowHideDefaultAppForAllRoles");
Mscrm.PublishAppModule.registerClass("Mscrm.PublishAppModule");
Mscrm.AppModuleBuilderHelper.registerClass("Mscrm.AppModuleBuilderHelper");
Mscrm.TileAdminOptionsFlyoutItemBuilder.registerClass("Mscrm.TileAdminOptionsFlyoutItemBuilder",
    null,
    Mscrm.IAppModuleBuilder);
Mscrm.TileAdminOptionsFlyoutBuilder.registerClass("Mscrm.TileAdminOptionsFlyoutBuilder", null, Mscrm.IAppModuleBuilder);
Mscrm.TileAdminOptionsFlyoutProvider.registerClass("Mscrm.TileAdminOptionsFlyoutProvider");
Mscrm.TileBuilderHelper.registerClass("Mscrm.TileBuilderHelper");
Mscrm.TileButtonContainerBuilder.registerClass("Mscrm.TileButtonContainerBuilder", null, Mscrm.IAppModuleBuilder);
Mscrm.TileBuilderProvider.registerClass("Mscrm.TileBuilderProvider", null, Mscrm.ITileBuilderProvider);
Mscrm.AppModuleHeaderBuilder.registerClass("Mscrm.AppModuleHeaderBuilder", null, Mscrm.IAppModuleBuilder);
Mscrm.TileFiltersBuilder.registerClass("Mscrm.TileFiltersBuilder", null, Mscrm.IAppModuleBuilder);
Mscrm.TileAdminOptionItems.registerClass("Mscrm.TileAdminOptionItems");
Mscrm.AppModuleConstants.registerClass("Mscrm.AppModuleConstants");
Mscrm.AppModuleCssConstants.registerClass("Mscrm.AppModuleCssConstants");
Mscrm.TileAdminOptionsFlyoutControl.registerClass("Mscrm.TileAdminOptionsFlyoutControl");
Mscrm.TileControlContainerFactory.registerClass("Mscrm.TileControlContainerFactory");
Mscrm.TileControlContainer.registerClass("Mscrm.TileControlContainer",
    null,
    Mscrm.ITileControlContainer,
    Sys.IDisposable);
Mscrm.TileBasedControl.registerClass("Mscrm.TileBasedControl");
Mscrm.TileControl.registerClass("Mscrm.TileControl", Mscrm.TileBasedControl);
Mscrm.AppModuleStructure.registerClass("Mscrm.AppModuleStructure");
Mscrm.ExecutionCompletedNotifier.registerClass("Mscrm.ExecutionCompletedNotifier");
Mscrm.AppModuleContainer.registerClass("Mscrm.AppModuleContainer",
    Mscrm.CrmUIControl,
    Mscrm.IAppModuleStructureProvider);
Mscrm.TileButtonBuilder.registerClass("Mscrm.TileButtonBuilder", null, Mscrm.IAppModuleBuilder);
Mscrm.AppModuleRoleAssignment.displayConditionsXml = null;
Mscrm.AppModuleRoleAssignment.orgName = null;
Mscrm.AppModuleRoleAssignment.isOnlineOrIfd = false;
Mscrm.AppModuleRoleAssignment.$j = "";
Mscrm.AppModuleRoleAssignment.$H = "";
Mscrm.AppModuleRoleAssignment.$i = "";
Mscrm.AppModuleRoleAssignment.$Y = null;
Mscrm.AppModuleRoleAssignment.$3 = "";
Mscrm.AppModuleRoleAssignmentHelper.checkAllId = "chkAll";
Mscrm.AppModuleRoleAssignmentHelper.rowCheckBoxPrefixId = "checkBox_";
Mscrm.AppModuleRoleAssignmentHelper.visibleToEveryoneRadioId = "visibleToEveryone";
Mscrm.AppModuleRoleAssignmentHelper.visibleToSelectedRolesId = "visibleToSelectedRoles";
Mscrm.AppModuleRoleAssignmentHelper.appUrlTextBoxId = "appUrlTextBox";
Mscrm.AppModuleRoleAssignmentHelper.appUrlLabelId = "appUrlLabel";
Mscrm.AppModuleRoleAssignmentHelper.checkBoxPrefixId = "checkBox_";
Mscrm.AppModuleRoleAssignmentHelper.preDisplayConditionsNodeId = "preDisplayConditionsXml";
Mscrm.AppModuleRoleAssignmentHelper.appIdentifierNodeId = "preAppIdentifierId";
Mscrm.AppModuleRoleAssignmentHelper.appUrlIdentifierId = "preAppUrlIdentifierId";
Mscrm.AppModuleRoleAssignmentHelper.appComponentStateIdentifierId = "preAppComponentStateIdentifierId";
Mscrm.AppModuleRoleAssignmentHelper.appUrlWarningNodeId = "appUrlWarningNode";
Mscrm.AppModuleRoleAssignmentHelper.selectBusinessUnitId = "selBusinessUnit";
Mscrm.AppModuleRoleAssignmentHelper.butBeginId = "butBegin";
Mscrm.AppModuleRoleAssignmentHelper.crmGridId = "crmGrid";
Mscrm.AppModuleRoleAssignmentHelper.entityName = "preEntityName";
Mscrm.AppModuleRoleAssignmentHelper.$T = [];
Mscrm.AppModuleRoleAssignmentHelper.$C = [];
Mscrm.LoadingBuilder.loadingDivElement = null;
Mscrm.ShowHideDefaultAppForAllRoles.showForAllrole = true;
Mscrm.ShowHideDefaultAppForAllRoles.appId = "00000000-0000-0000-0000-000000000000";
Mscrm.AppModuleConstants.clickEventName = "click";
Mscrm.AppModuleConstants.appModuleRootPanelId = "appModuleContainerPanel";
Mscrm.AppModuleConstants.appModuleContainerId = "appModuleContainer";
Mscrm.AppModuleConstants.tileContainerId = "tileContainer";
Mscrm.AppModuleConstants.latestPublishedAppId = "latestPublishedAppId";
Mscrm.AppModuleConstants.displayLoaderDivId = "DisaplayLoaderDiv";
Mscrm.AppModuleConstants.tileButtonDataContainerIdFormat = "tileButtonDataContainerId_{0}";
Mscrm.AppModuleConstants.webresourceBaseUri = "/webresources/";
Mscrm.AppModuleConstants.rtlClass = "rtl-model";
Mscrm.AppModuleConstants.roleAttribute = "role";
Mscrm.AppModuleConstants.roleAttributeValue = "application";
Mscrm.AppModuleConstants.emptyGuid = "00000000-0000-0000-0000-000000000000";
Mscrm.AppModuleConstants.createNewAppContainerId = "createNewAppContainer";
Mscrm.AppModuleConstants.tileFilterContainerId = "tileFiltersContainer";
Mscrm.AppModuleConstants.tileFilterAttributeName = "tileFilterType";
Mscrm.AppModuleConstants.tileActiveFilterClassName = "tile-filters-active";
Mscrm.AppModuleConstants.tileAdminOptionsFlyoutContainerId = "tileAdminOptionsFlyoutContainerId";
Mscrm.AppModuleConstants.openPublishedAppsInSameWindow = "_top";
Mscrm.AppModuleConstants.openUnpublishedAppsInNewTab = "_blank";
Mscrm.AppModuleCssConstants.tileButtonClass = "tile-button";
Mscrm.AppModuleCssConstants.tileEllipsisClass = "tile-ellipsis";
Mscrm.AppModuleCssConstants.tileButtonDataFooterClass = "tile-button-data-footer";
Mscrm.AppModuleCssConstants.tileButtonPublisherNameClass = "tile-button-publishername";
Mscrm.AppModuleCssConstants.tileCreateNewAppButtonClass = "tiles-createNewApp-button";
Mscrm.AppModuleContainer.$G = []