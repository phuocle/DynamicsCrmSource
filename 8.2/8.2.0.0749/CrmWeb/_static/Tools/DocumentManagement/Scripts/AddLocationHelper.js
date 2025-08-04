Type.registerNamespace("Mscrm");

function InitializeAddLocationDialogControls() {
    attachWindowOnBeforeUnload(Mscrm.DocumentLocationHelper.page_BeforeUnload, window.self);
    var $v_0 = $get("butBegin");
    $v_0.disabled = true;
    var $v_1 = $get("relativeUrl"),
        $v_2 = $get("absoluteUrl"),
        $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup"),
        $v_4 = $get("absoluteUrlTextSmallDialog");
    if (IsNull($v_4)) $v_4 = $get("absoluteUrlTextFullDialog");
    if (window._dialogMode
        .toString() ===
        "1" &&
        !isNullOrEmptyString(window._absoluteUrlTextValue)) $v_4.value = window._absoluteUrlTextValue;
    var $v_5 = $get("folderNameText"), $v_6 = $get("locationNameText");
    if (!IsNull($v_1) && $v_1.checked) {
        $v_5.disabled = false;
        $v_3.set_disabled(false);
        $v_4.disabled = true
    } else {
        if (!IsNull($v_5)) $v_5.disabled = true;
        !IsNull($v_3) && $v_3.set_disabled(true);
        $v_4.disabled = false
    }
    !IsNull($v_1) && $addHandler($v_1, "click", $0);
    !IsNull($v_2) && $addHandler($v_2, "click", $0);
    !IsNull($v_3) && $v_3.add_change($5);
    if (!IsNull($v_4)) {
        $addHandler($v_4, "change", $0);
        $addHandler($v_4, "keyup", $0)
    }
    if (!IsNull($v_5)) {
        $addHandler($v_5, "keyup", $0);
        $addHandler($v_5, "change", $0)
    }
    if (!IsNull($v_6)) {
        $addHandler($v_6, "keyup", $0);
        $addHandler($v_6, "change", $0);
        if (window._dialogMode.toString() === "0") {
            var $v_7 = getDialogArguments();
            if (!IsNull($v_7)) $v_6.value = String.format(window.DOCM_DEFAULT_LOCATION_NAME, $v_7)
        }
    }
    if (!IsNull($v_5)) {
        var $v_8 = $v_5.value.trim();
        if (!isNullOrEmptyString($v_8)) {
            var $v_9 = $2($v_8);
            if (!isNullOrEmptyString($v_9) && $v_9.length > 2048 && $v_8.length > 32) $v_5.value = $v_8.substring(0, 32)
        }
    }
}

function InitializeS2SAddLocationDialogControls() {
    attachWindowOnBeforeUnload(Mscrm.DocumentLocationHelper.page_BeforeUnload, window.self);
    var $v_0 = $get("butBegin");
    $v_0.disabled = true;
    var $v_1 = $get("folderNameText"), $v_2 = $get("locationNameText");
    !IsNull($v_1) && $addHandler($v_1, "keyup", $1);
    if (!IsNull($v_2)) {
        $addHandler($v_2, "keyup", $1);
        if (window._dialogMode.toString() === "0") {
            var $v_3 = getDialogArguments();
            if (!IsNull($v_3)) {
                $v_2.value = String.format(window.DOCM_DEFAULT_LOCATION_NAME, $v_3);
                $v_0.disabled = false
            }
        }
    }
}

function $1($p0) {
    var $v_0 = $get("folderNameText"), $v_1 = $get("locationNameText"), $v_2 = $get("butBegin");
    if (!IsNull($v_1) && !isNullOrEmptyString($v_1.value))
        if (!IsNull($v_0.value) && !isNullOrEmptyString($v_0.value.trim())) $v_2.disabled = false;
        else $v_2.disabled = true;
    else $v_2.disabled = true
}

function cancelAddLocationDialog() {
    var $v_0 = $get("folderNameText"), $v_1 = $get("locationNameText");
    !IsNull($v_0) && $removeHandler($v_0, "keyup", $1);
    !IsNull($v_1) && $removeHandler($v_1, "keyup", $1);
    Mscrm.Utilities.setReturnValue(null);
    closeWindow()
}

function cancel() {
    detachWindowOnBeforeUnload(Mscrm.DocumentLocationHelper.page_BeforeUnload, window.self);
    var $v_0 = $get("showProgress");
    if (Mscrm.DocumentLocationHelper.showConfirmationMessage()) {
        if (confirm(window.LOCID_CONFIRM_CANCEL)) {
            Mscrm.Utilities.setReturnValue(null);
            closeWindow()
        }
    } else {
        Mscrm.Utilities.setReturnValue(null);
        closeWindow()
    }
}

function applychanges() {
    Mscrm.DocumentLocationHelper.hideNotification();
    var $v_0 = $get("showProgress");
    if (!IsNull($v_0)) $v_0.style.display = "inline";
    Mscrm.DocumentLocationHelper.setAddLocationDialogControlsState(true);
    var $v_1 = $get("relativeUrl"), $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup");
    if (!IsNull($v_1) && $v_1.checked) {
        var $v_3 = $get("folderNameText");
        $v_3.value = $v_3.value.trim();
        var $v_4 = $v_3.value, $v_5 = new RegExp(Mscrm.DocumentLocationHelper.specialCharatersRegExString, "g");
        if ($v_5.test($v_4)) {
            Mscrm.DocumentLocationHelper.showNotification("LOCID_INVALID_FOLDERNAME", "");
            return
        }
        if ($v_4.length > 128) {
            alert(window.LOCID_DOCM_FOLDERNAME_MAXLENGTH);
            Mscrm.DocumentLocationHelper.hideNotification();
            return
        }
        var $v_6 = $2($v_4);
        if (isNullOrEmptyString($v_6)) {
            alert(window.LOCID_GENERIC_MESSAGE);
            Mscrm.DocumentLocationHelper.hideNotification();
            return
        }
        if ($v_6.length > 2048 && $v_4.length > 32) {
            var $v_9 = $v_4.substring(0, 32);
            $v_6 = $2($v_9);
            if ($v_6.length > 2048) {
                alert(window.LOCID_STRING_LENGTH_TOOLONG);
                Mscrm.DocumentLocationHelper.hideNotification();
                return
            }
            $v_4 = $v_9
        }
        if (Object.getType(window
                ._selectedLocationUrl) !==
            String ||
            isNullOrEmptyString(window._selectedLocationUrl)) {
            Mscrm.DocumentLocationHelper.showNotification("LOCID_DOCM_SPLOC_INVALIDPARENT", "");
            return
        }
        Mscrm.DocumentLocationHelper._entityCentricPrimaryName = null;
        Mscrm.DocumentLocationHelper._entityCentricEntityName = null;
        Mscrm.DocumentLocationHelper._folderName = $v_4;
        var $v_7 = window._selectedLocationUrl + "/" + $v_4;
        if ($v_2.get_typedDataValue()[0].type
            .toString() ===
            "9502") $v_7 = window._selectedLocationUrl + "/" + window._entityLogicalName + "/" + $v_4;
        Mscrm.DocumentLocationHelper.showNotification("LOCID_URL_NOTIFICATION", $v_7, false);
        var $v_8 = $get("proxyFrame");
        $v_8.src = $v_6.toString();
        $addHandler($v_8, "load", Mscrm.DocumentLocationHelper.validateGridPresence)
    } else {
        var $v_A = $get("absoluteUrlTextSmallDialog");
        if (IsNull($v_A)) $v_A = $get("absoluteUrlTextFullDialog");
        if (Mscrm.DocumentLocationHelper.validateUrlProtocol($v_A.value)) {
            window._selectedLocationUrl = $v_A.value;
            if (window._dialogMode.toString() === "0")
                Mscrm.DocumentLocationHelper.createDocumentLocation("", window._selectedLocationUrl);
            else Mscrm.DocumentLocationHelper.updateDocumentLocation("", window._selectedLocationUrl)
        } else Mscrm.DocumentLocationHelper.showNotification("LOCID_DOCM__INVALID_PROTOCOL", "", false)
    }
}

function applychangesforsharepoint() {
    var $v_0 = $get("showProgress"), $v_1 = true, $v_2 = true, $v_3 = "", $v_4 = "";
    if (!IsNull($v_0)) $v_0.style.display = "inline";
    if (window._dialogMode.toString() === "1") $v_2 = false;
    var $v_5 = $get("folderNameText");
    $v_5.value = $v_5.value.trim();
    $v_3 = $v_5.value;
    $v_1 = true;
    var $v_6 = $get("locationNameText");
    $v_6.value = $v_6.value.trim();
    $v_4 = $v_6.value;
    var $v_7 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup");
    if (!$v_7.get_dataValue()) {
        $v_0.style.display = "none";
        alert(window.LOCID_SITE_NAME_NOTIFICATION);
        return
    }
    if (isNullOrEmptyString($v_3)) {
        $v_0.style.display = "none";
        alert(window.LOCID_FOLDER_NAME_NOTIFICATION);
        return
    }
    if (isNullOrEmptyString($v_4)) {
        $v_0.style.display = "none";
        alert(window.LOCID_LOCATION_NAME_NOTIFICATION);
        return
    }
    if (isValidFolderName($v_3)) {
        $v_0.style.display = "none";
        $4($v_3, $v_2, $v_1)
    }
}

function isValidFolderName(folderName) {
    var $v_0 = new RegExp(Mscrm.DocumentLocationHelper.specialCharatersRegExString, "g");
    if ($v_0.test(folderName)) {
        alert(window.LOCID_INVALID_FOLDER_NAME);
        return false
    }
    if (folderName.length > 128) {
        alert(window.LOCID_DOCM_FOLDERNAME_MAXLENGTH);
        return false
    }
    return true
}

function showLocationConfirmDialog(locationUrl, folderName, isAddMode, isCreateFolder) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_confirmsharepointfolder.aspx");
    $v_0.get_query()["locationUrl"] = CrmEncodeDecode.CrmUrlEncode(locationUrl);
    $v_0.get_query()["folderName"] = folderName;
    $v_0.get_query()["isAddMode"] = isAddMode;
    $v_0.get_query()["isCreateFolder"] = isCreateFolder;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 500;
    $v_1.height = 200;
    var $v_2 = confirmFolderUrlCB;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2)
}

function confirmFolderUrlCB(returnValue) {
    if (!isNullOrEmptyString(returnValue["success"]) && returnValue["success"] === "false") return;
    var $v_0 = returnValue["locationUrl"],
        $v_1 = returnValue["folderName"],
        $v_2 = returnValue["isAddOrEditMode"],
        $v_3 = returnValue["isCreateFolder"];
    $6();
    Mscrm.DocumentLocationHelper.createOrUpdateSharePointLocation($v_1, $v_0, $v_2, $v_3)
}

function $6() {
    var $v_0 = $get("dialogContainer"),
        $v_1 = $get("showProgress"),
        $v_2 = $get("butBegin"),
        $v_3 = $get("cmdDialogCancel");
    $v_2.style.visibility = "hidden";
    $v_3.style.visibility = "hidden";
    $v_0.style.visibility = "hidden";
    $v_1.style.display = "block"
}

function $4($p0, $p1, $p2) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup"), $v_1 = "";
    if (isNullOrEmptyString(window._siteCollectionUrl) || isNullOrEmptyString(window._selectedLocationUrl)) {
        if (!$v_0.get_dataValue()) return;
        var $v_2 = $v_0.get_typedDataValue()[0].id;
        Xrm.Internal.messages.fetchSiteUrl($v_2, "", 0).then(function($p1_0) {
                var $v_3 = $p1_0, $v_4 = $v_3.siteAndLocationUrl;
                window._selectedLocationUrl = $v_4;
                $v_1 = window._selectedLocationUrl + "/" + $p0;
                Mscrm.DocumentLocationHelper._entityCentricPrimaryName = null;
                Mscrm.DocumentLocationHelper._entityCentricEntityName = null;
                Mscrm.DocumentLocationHelper._folderName = $p0;
                if ($v_0.get_typedDataValue()[0].type
                    .toString() ===
                    "9502") $v_1 = window._selectedLocationUrl + "/" + window._entityLogicalName + "/" + $p0;
                showLocationConfirmDialog($v_1, $p0, $p1, $p2)
            },
            $3)
    }
}

function $3($p0) {
    if (isNullOrEmptyString(window._selectedLocationUrl)) {
        alert(window.LOCID_GENERIC_MESSAGE);
        Mscrm.DocumentLocationHelper.hideNotification();
        return
    }
}

function $2($p0) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup");
    if (isNullOrEmptyString(window._siteCollectionUrl) || isNullOrEmptyString(window._selectedLocationUrl)) {
        if (!$v_0.get_dataValue()) return null;
        var $v_2 = new RemoteCommand("DocumentManagementWebService", "RetrieveAbsoluteAndSiteCollectionUrl");
        $v_2.SetParameter("logicalName", $v_0.get_typedDataValue()[0].typename);
        $v_2.SetParameter("entityId", $v_0.get_typedDataValue()[0].id);
        var $v_3 = $v_2.Execute(), $v_4 = $v_3.ReturnValue.string;
        window._siteCollectionUrl = $v_4[0];
        window._selectedLocationUrl = $v_4[1]
    }
    var $v_1 = Mscrm.CrmUri.create(window._siteCollectionUrl + "/crmgrid/createfolder.aspx");
    $v_1.get_query()["folderName"] = $p0;
    $v_1.get_query()["locationUrl"] = window._selectedLocationUrl;
    $v_1.get_query()["langId"] = window.LOCID_DOCM_LANGID;
    $v_1.get_query()["serverUrl"] = window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        window.location.port +
        "/tools/documentmanagement/crmproxy.html";
    if ($v_0.get_typedDataValue()[0].type.toString() === "9502") {
        $v_1.get_query()["dlName"] = window._entityLogicalName;
        $v_1.get_query()["dlDisplayName"] = window._entityBaseLanguageDisplayName;
        Mscrm.DocumentLocationHelper._dlName = window._entityLogicalName
    } else Mscrm.DocumentLocationHelper._dlName = null;
    return $v_1.toString()
}

function $5($p0, $p1) {
    window._siteCollectionUrl = null;
    window._selectedLocationUrl = null;
    $0(null)
}

function $0($p0) {
    var $v_0 = $get("relativeUrl"),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup"),
        $v_2 = $get("absoluteUrlTextSmallDialog");
    if (IsNull($v_2)) $v_2 = $get("absoluteUrlTextFullDialog");
    var $v_3 = $get("folderNameText"), $v_4 = $get("locationNameText"), $v_5 = $get("butBegin");
    if (!isNullOrEmptyString($v_4.value))
        if (!IsNull($v_0) && $v_0.checked) {
            if (!IsNull($v_1.get_dataValue()) &&
                !isNullOrEmptyString($v_1.get_dataValue()[0]) &&
                !IsNull($v_3.value) &&
                !isNullOrEmptyString($v_3.value.trim())) $v_5.disabled = false;
            else $v_5.disabled = true;
            $v_3.disabled = false;
            $v_1.set_disabled(false);
            $v_2.disabled = true
        } else {
            $v_5.disabled = isNullOrEmptyString($v_2.value);
            if (!IsNull($v_3)) $v_3.disabled = true;
            !IsNull($v_1) && $v_1.set_disabled(true);
            $v_2.disabled = false
        }
    else {
        $v_5.disabled = true;
        if (!IsNull($v_0) && $v_0.checked) {
            $v_3.disabled = false;
            $v_1.set_disabled(false);
            $v_2.disabled = true
        } else {
            if (!IsNull($v_3)) $v_3.disabled = true;
            !IsNull($v_1) && $v_1.set_disabled(true);
            $v_2.disabled = false
        }
    }
}