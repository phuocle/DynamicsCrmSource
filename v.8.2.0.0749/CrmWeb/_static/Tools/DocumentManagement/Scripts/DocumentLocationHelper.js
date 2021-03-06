Type.registerNamespace("Mscrm");
Mscrm.DocumentLocationHelper = function() {};
Mscrm.DocumentLocationHelper.loadLocationsArea = function(selectedNavLink, autoCreateLocation) {
    if (!Mscrm.FormNavControl.isNavLinkEnabled(selectedNavLink)) return;
    var $v_0 = false,
        $v_1 = $get("crmFormSubmit"),
        $v_2 = Mscrm.DocumentLocationHelper.$1($v_1),
        $v_3 = Mscrm.CrmUri.create("/tools/documentmanagement/areas.aspx");
    $v_3.get_query()["pagemode"] = "iframe";
    $v_3.get_query()["oId"] = $v_2;
    $v_3.get_query()["oType"] = $v_1.crmFormSubmitObjectType.value;
    $v_3.get_query()["rof"] = (!IsNull($get("rofContainer"))).toString();
    var $v_4 = $find("crmFormSelector");
    if ($v_4) $v_3.get_query()["formid"] = $v_4.get_currentFormId();
    var $v_5 = null;
    if ($v_2.length) $v_5 = Mscrm.DocumentLocationHelper.$P($v_2, $v_1.crmFormSubmitObjectType.value);
    Mscrm.DocumentLocationHelper.associatedLocationCount = IsNull($v_5)
        ? 0
        : Number.parseInvariant($v_5.associatedlocationcount);
    if (!Mscrm.DocumentLocationHelper.associatedLocationCount) {
        var $v_6 = Mscrm.DocumentLocationHelper.$4();
        if (!IsNull($v_6)) {
            $v_6 = Mscrm.DocumentLocationHelper.$3(Mscrm.DocumentLocationHelper.$M($v_5, $v_2, $v_6));
            if (CrmEncodeDecode.CrmUrlEncode($v_6).length > 288) {
                var $v_8 = $v_6.length > 32 ? 32 : $v_6.length;
                $v_6 = $v_6.substring(0, $v_8)
            }
        }
        var $v_7 = IsNull($v_5) ? false : $v_5.cancreatefolder;
        if (!IsNull($v_5) && !isNullOrEmptyString($v_5.siteCollectionUrl)) {
            $v_3.get_query()["autocreatelocation"] = true;
            $v_3.get_query()["defaultLocationId"] = $v_5.defaultLocationId;
            $v_3.get_query()["folderName"] = $v_6;
            $v_3.get_query()["defaultLocationUrl"] = $v_5.defaultLocationUrl;
            $v_3.get_query()["defaultLocationName"] = $v_5.defaultLocationName;
            $v_3.get_query()["defaultLocationType"] = $v_5.defaultLocationType;
            $v_3.get_query()["siteCollectionUrl"] = $v_5.siteCollectionUrl;
            $v_3.get_query()["entityLogicalName"] = Mscrm.DocumentLocationHelper.getEntityLogicalName($v_1);
            var $v_9 = $v_5.ecId, $v_A = $v_5.ecName, $v_B = $v_5.ecLogicalName, $v_C = $v_5.ecEtc;
            if (!isNullOrEmptyString($v_9)) {
                if (CrmEncodeDecode.CrmUrlEncode($v_A).length > 288) {
                    var $v_D = $v_A.length > 32 ? 32 : $v_A.length;
                    $v_A = $v_A.substring(0, $v_D)
                }
                $v_3.get_query()["ecId"] = $v_9;
                $v_3.get_query()["ecName"] = Mscrm.DocumentLocationHelper.$3($v_A);
                $v_3.get_query()["ecLogicalName"] = $v_B;
                $v_3.get_query()["ecEtc"] = $v_C
            }
        } else {
            $v_0 = true;
            var $v_E = [selectedNavLink, $v_3],
                $v_F = Mscrm.Utilities
                    .createCallbackFunctionObject("loadLocationsAreaCallback",
                        Mscrm.DocumentLocationHelper,
                        $v_E,
                        false);
            Mscrm.DocumentLocationHelper.$F(Mscrm.DocumentLocationHelper.$1($v_1),
                $v_1.crmFormSubmitObjectType.value,
                $v_6,
                "0",
                $v_7,
                null,
                $v_F)
        }
    }
    !$v_0 && Mscrm.Details.loadArea(selectedNavLink, "areaDocument", "", $v_3, false, false)
};
Mscrm.DocumentLocationHelper.loadLocationsAreaCallback = function(result, selectedNavLink, gridPageUrl) {
    if (!IsNull(result)) {
        var $v_0 = result.locationId;
        gridPageUrl.get_query()["locationId"] = $v_0
    }
    Mscrm.Details.loadArea(selectedNavLink, "areaDocument", "", gridPageUrl, false, false)
};
Mscrm.DocumentLocationHelper.autoCreateLocation = function(siteCollectionUrl,
    defaultLocationUrl,
    defaultLocationId,
    defaultLocationType,
    entityLogicalName,
    entityDisplayName,
    folderName,
    entityCentricPrimaryName,
    entityCentricEntityName,
    entityCentricPrimaryId,
    entityCentricEntityType) {
    Mscrm.DocumentLocationHelper.$0 = true;
    refreshRibbon();
    folderName = Mscrm.DocumentLocationHelper.$3(folderName);
    if (!isNullOrEmptyString(entityCentricPrimaryName))
        entityCentricPrimaryName = Mscrm.DocumentLocationHelper.$3(entityCentricPrimaryName);
    var $v_0 = Mscrm.CrmUri.create(siteCollectionUrl + "/crmgrid/createfolder.aspx");
    $v_0.get_query()["folderName"] = folderName;
    $v_0.get_query()["locationUrl"] = defaultLocationUrl;
    $v_0.get_query()["langId"] = window.LOCID_DOCM_LANGID;
    $v_0.get_query()["serverUrl"] = window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        window.location.port +
        "/tools/documentmanagement/crmproxy.html";
    $v_0.get_query()["dlName"] = entityLogicalName;
    $v_0.get_query()["dlDisplayName"] = entityDisplayName;
    $v_0.get_query()["ecName"] = entityCentricPrimaryName;
    $v_0.get_query()["ecLogicalName"] = entityCentricEntityName;
    var $v_1 = window.document.createElement("iframe");
    $v_1.style.display = "none";
    $v_1.id = "proxyFrame";
    $v_1.setAttribute("name", "proxyFrame");
    $v_1.src = $v_0.toString();
    $addHandler($v_1, "load", Mscrm.DocumentLocationHelper.validateGridPresence);
    window.document.body.appendChild($v_1);
    Mscrm.DocumentLocationHelper._folderName = folderName;
    Mscrm.DocumentLocationHelper._dlName = entityLogicalName;
    Mscrm.DocumentLocationHelper.$A = defaultLocationId;
    Mscrm.DocumentLocationHelper.$5 = defaultLocationType;
    Mscrm.DocumentLocationHelper.$C = entityCentricPrimaryId;
    Mscrm.DocumentLocationHelper.$B = entityCentricEntityType;
    Mscrm.DocumentLocationHelper._entityCentricPrimaryName = entityCentricPrimaryName;
    Mscrm.DocumentLocationHelper._entityCentricEntityName = entityCentricEntityName
};
Mscrm.DocumentLocationHelper.$3 = function($p0) {
    var $v_0 = new RegExp(Mscrm.DocumentLocationHelper.specialCharatersRegExString, "g");
    $p0 = $p0.replace($v_0, "-").trim();
    var $v_1 = "\\s+", $v_2 = new RegExp($v_1, "g");
    $p0 = $p0.replace($v_1, " ").trim();
    $p0 = $p0.substring(0, 128);
    return $p0
};
Mscrm.DocumentLocationHelper.pollForFolderCreationStatusOnSharePoint = function() {
    var $v_0 = $get("proxyFrame"),
        $v_1 = Mscrm.Utilities.getExternalIFrame($v_0, "crmProxyIframe"),
        $v_2 = Mscrm.Utilities.getExternalIFrame($v_0, "docmErrorFrameFromSharePoint");
    try {
        if (!IsNull($v_1)) {
            var $v_3 = $v_1.location.hash;
            if (!isNullOrEmptyString($v_3)) {
                var $v_4 = $v_3.split("#")[1];
                if (!isNullOrEmptyString($v_4)) {
                    window.clearInterval(Mscrm.DocumentLocationHelper.$2);
                    Mscrm.DocumentLocationHelper.$2 = -1;
                    var $v_5 = $v_4.split(":");
                    if ($v_5[0] === "1") {
                        var $v_6;
                        if (isNullOrEmptyString(Mscrm.DocumentLocationHelper._entityCentricPrimaryName) ||
                            isNullOrEmptyString(Mscrm.DocumentLocationHelper._entityCentricEntityName))
                            if (isNullOrEmptyString(Mscrm.DocumentLocationHelper
                                ._dlName)) $v_6 = Mscrm.DocumentLocationHelper._folderName;
                            else
                                $v_6 = Mscrm.DocumentLocationHelper._dlName +
                                    "/" +
                                    Mscrm.DocumentLocationHelper._folderName;
                        else if (Mscrm.DocumentLocationHelper
                            .$5 ===
                            9502)
                            $v_6 = Mscrm.DocumentLocationHelper._entityCentricEntityName +
                                "/" +
                                Mscrm.DocumentLocationHelper._entityCentricPrimaryName +
                                "/" +
                                Mscrm.DocumentLocationHelper._dlName +
                                "/" +
                                Mscrm.DocumentLocationHelper._folderName;
                        else
                            $v_6 = Mscrm.DocumentLocationHelper
                                ._dlName +
                                "/" +
                                Mscrm.DocumentLocationHelper._folderName;
                        if (IsNull(window._dialogMode)) {
                            var $v_7 = window.parent.document.getElementById("crmFormSubmit"),
                                $v_8 = Mscrm.DefaultLocationCount.getNextCount("DOCM_AUTO_CREATE_LOCATION_COUNT"),
                                $v_9 = String.format(window.LOCID_DOCM_AUTO_NAME_FORMAT,
                                    window.LOCID_DOCM_DEFAULT_AUTO_NAME,
                                    $v_8);
                            $v_9 = $v_9.substring(0, window.DOCM_LOCATIONNAME_MAXLENGTH);
                            var $v_A = {};
                            $v_A["locationName"] = $v_9;
                            $v_A["regardingType"] = $v_7.crmFormSubmitObjectType.value;
                            $v_A["regardingObjectId"] = Mscrm.DocumentLocationHelper.$1($v_7);
                            $v_A["locationRelativePath"] = $v_6;
                            $v_A["parentType"] = Mscrm.DocumentLocationHelper.$5;
                            $v_A["parentId"] = Mscrm.DocumentLocationHelper.$A;
                            $v_A["regardingIdForEntityCentric"] = Mscrm.DocumentLocationHelper.$C;
                            $v_A["regardingTypeForEntityCentric"] = Mscrm.DocumentLocationHelper.$B;
                            var $v_B = Mscrm.DocumentLocationHelper.createDocumentLocationRecord($v_A);
                            if (!IsNull($v_B)) {
                                Mscrm.DocumentLocationHelper.associatedLocationCount++;
                                Mscrm.DefaultLocationCount.incrementCount("DOCM_AUTO_CREATE_LOCATION_COUNT");
                                refreshRibbon();
                                var $v_C = $find("documentsGrid_DocumentLocationSelector");
                                $v_C.addLocationItemInMenu($v_B, $v_9);
                                $v_C.setSelectedLocationItemInMenu($v_B)
                            } else Mscrm.DocumentLocationHelper.showNotification("LOCID_GENERIC_MESSAGE", "");
                            window.document.body.removeChild($get("proxyFrame"))
                        } else if (window._dialogMode
                            .toString() ===
                            "0") Mscrm.DocumentLocationHelper.createDocumentLocation($v_6, "");
                        else Mscrm.DocumentLocationHelper.updateDocumentLocation($v_6, "")
                    } else if ($v_5[0] === "0") Mscrm.DocumentLocationHelper.showNotification($v_5[1], "");
                    else if ($v_5[0] === "2")
                        if (IsNull(window._dialogMode)) {
                            var $v_D = $get("errorMessageArea");
                            if (!IsNull($v_D)) $v_D.style.display = "inline";
                            var $v_E = $get("showProgress");
                            if (!IsNull($v_E)) $v_E.style.display = "none";
                            Mscrm.DocumentLocationHelper.$0 = false;
                            refreshRibbon()
                        } else Mscrm.DocumentLocationHelper.hideNotification()
                }
            }
        } else !IsNull($v_2) && Mscrm.DocumentLocationHelper.showNotification("LOCID_DOCM_AAM_ERROR", "")
    } catch ($$e_F) {
        window.clearInterval(Mscrm.DocumentLocationHelper.$2);
        Mscrm.DocumentLocationHelper.$2 = -1;
        Mscrm.DocumentLocationHelper.showNotification("LOCID_GENERIC_MESSAGE", "")
    }
};
Mscrm.DocumentLocationHelper.createDocumentLocation = function(locationRelativeUrl, absoluteUrl) {
    var $v_0 = $get("locationNameText"), $v_1 = $v_0.value, $v_2 = {};
    $v_2["locationName"] = $v_1;
    $v_2["absolutePath"] = absoluteUrl;
    $v_2["regardingType"] = window._regardingType;
    $v_2["regardingObjectId"] = window._regardingobjectid;
    if (absoluteUrl === "") {
        var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup");
        $v_2["locationRelativePath"] = locationRelativeUrl;
        $v_2["parentType"] = $v_4.get_typedDataValue()[0].type;
        $v_2["parentId"] = $v_4.get_typedDataValue()[0].id
    }
    var $v_3 = Mscrm.DocumentLocationHelper.createDocumentLocationRecord($v_2);
    if (!IsNull($v_3)) {
        var $v_5 = {};
        $v_5.locationId = $v_3;
        $v_5.locationName = $v_1;
        Mscrm.Utilities.setReturnValue($v_5);
        detachWindowOnBeforeUnload(Mscrm.DocumentLocationHelper.page_BeforeUnload, window.self);
        closeWindow()
    } else Mscrm.DocumentLocationHelper.hideNotification()
};
Mscrm.DocumentLocationHelper.page_BeforeUnload = function(domEvent) {
    if (Mscrm.DocumentLocationHelper.showConfirmationMessage()) window.event.returnValue = LOCID_CONFIRM_CANCEL
};
Mscrm.DocumentLocationHelper.showConfirmationMessage = function() {
    var $v_0 = $get("showProgress");
    if (!IsNull($v_0) && $v_0.style.display !== "none") return true;
    return false
};
Mscrm.DocumentLocationHelper
    .createOrUpdateSharePointLocation = function(locationRelativeUrl, absoluteUrl, isAddMode, isCreateFolder) {
        var $v_0 = $get("locationNameText"),
            $v_1 = $v_0.value,
            $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup"),
            $v_3 = -1,
            $v_4 = "",
            $v_5 = "";
        if (!isNullOrEmptyString(absoluteUrl)) {
            $v_3 = Number.parseInvariant($v_2.get_typedDataValue()[0].type);
            $v_4 = $v_2.get_typedDataValue()[0].id
        }
        if (!Boolean.parse(isAddMode.toString())) $v_5 = window._locationid;
        var $v_6 = Number.parseInvariant(window._regardingType.toString()), $v_7 = window._regardingobjectid;
        Mscrm.DocumentLocationHelper
            .createOrUpdateSharePointDocument($v_1,
                absoluteUrl,
                $v_7,
                locationRelativeUrl,
                $v_6,
                $v_3,
                $v_4,
                isAddMode,
                isCreateFolder,
                $v_5)
    };
Mscrm.DocumentLocationHelper
    .createOrUpdateSharePointDocument = function(locationName,
        absUrl,
        regardingObjectId,
        locationRelativePath,
        regardingType,
        parentType,
        parentId,
        isAddMode,
        isCreateFolder,
        docId) {
        Xrm.Internal.messages.addOrEditLocation(locationName,
            absUrl,
            regardingObjectId,
            locationRelativePath,
            regardingType,
            parentType,
            parentId,
            Boolean.parse(isAddMode.toString()),
            Boolean.parse(isCreateFolder.toString()),
            docId).then(function($p1_0) {
                var $v_0 = $p1_0, $v_1 = $v_0.locationId, $v_2 = {};
                $v_2.foldername = locationRelativePath;
                $v_2.locationname = locationName;
                $v_2.locationid = $v_1;
                Mscrm.Utilities.setReturnValue($v_2);
                var $v_3 = $get("folderNameText"), $v_4 = $get("locationNameText");
                !IsNull($v_3) && $clearHandlers($v_3);
                !IsNull($v_4) && $clearHandlers($v_4);
                detachWindowOnBeforeUnload(Mscrm.DocumentLocationHelper.page_BeforeUnload, window.self);
                closeWindow()
            },
            function($p1_0) {
                var $v_5 = -2147088628;
                if ($p1_0.get_organizationServiceFault()
                    .get_errorCode() ===
                    $v_5)
                    Mscrm.DocumentLocationHelper
                        .handleSharePointLocationDuplication(locationName,
                            absUrl,
                            regardingType,
                            regardingObjectId,
                            locationRelativePath,
                            parentType,
                            parentId,
                            isAddMode,
                            isCreateFolder,
                            docId);
                else Mscrm.DocumentLocationHelper.$N($p1_0)
            })
    };
Mscrm.DocumentLocationHelper
    .handleSharePointLocationDuplication = function(locationName,
        absUrl,
        regardingType,
        regardingObjectId,
        locationRelativePath,
        parentType,
        parentId,
        isAddMode,
        isCreateFolder,
        docId) {
        var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_updatesharepointfolder.aspx");
        $v_0.get_query()["locationName"] = locationName;
        $v_0.get_query()["absUrl"] = absUrl;
        $v_0.get_query()["regardingType"] = regardingType;
        $v_0.get_query()["regardingObjectId"] = regardingObjectId;
        $v_0.get_query()["locationRelativePath"] = locationRelativePath;
        $v_0.get_query()["parentType"] = parentType;
        $v_0.get_query()["parentId"] = parentId;
        $v_0.get_query()["isAddMode"] = isAddMode;
        $v_0.get_query()["isCreateFolder"] = isCreateFolder;
        $v_0.get_query()["docId"] = docId;
        var $v_1 = new Xrm.DialogOptions;
        $v_1.width = 500;
        $v_1.height = 200;
        var $v_2 = Mscrm.DocumentLocationHelper.updateSharePointFolderCallBack;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2)
    };
Mscrm.DocumentLocationHelper.$O = function() {
    var $v_0 = $get("dialogContainer"),
        $v_1 = $get("showProgress"),
        $v_2 = $get("butBegin"),
        $v_3 = $get("cmdDialogCancel");
    $v_2.style.visibility = "visible";
    $v_3.style.visibility = "visible";
    $v_0.style.visibility = "visible";
    $v_1.style.display = "none"
};
Mscrm.DocumentLocationHelper.updateSharePointFolderCallBack = function(returnValue) {
    if (returnValue["success"] === "false") {
        Mscrm.DocumentLocationHelper.$O();
        return
    }
    var $v_0 = returnValue["locationName"],
        $v_1 = returnValue["absUrl"],
        $v_2 = returnValue["regardingObjectId"],
        $v_3 = returnValue["locationRelativePath"],
        $v_4 = returnValue["regardingType"],
        $v_5 = returnValue["parentType"],
        $v_6 = returnValue["parentId"],
        $v_7 = returnValue["isAddOrEditMode"],
        $v_8 = returnValue["isCreateFolder"],
        $v_9 = returnValue["docId"];
    $v_8 = false;
    Mscrm.DocumentLocationHelper
        .createOrUpdateSharePointDocument($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9)
};
Mscrm.DocumentLocationHelper.$N = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.DocumentLocationHelper.updateDocumentLocation = function(locationRelativeUrl, absoluteUrl) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup"),
        $v_1 = new RemoteCommand("DocumentManagementWebService", "UpdateDocumentLocationRecord");
    $v_1.ErrorHandler = Mscrm.DocumentLocationHelper.errorHandler;
    var $v_2 = $get("locationNameText"), $v_3 = $v_2.value;
    $v_1.SetParameter("locationId", window._locationid);
    $v_1.SetParameter("locationName", $v_3);
    if (absoluteUrl === "") {
        $v_1.SetParameter("locationRelativePath", locationRelativeUrl);
        $v_1.SetParameter("parentType", $v_0.get_typedDataValue()[0].type);
        $v_1.SetParameter("parentId", $v_0.get_typedDataValue()[0].id)
    } else $v_1.SetParameter("absolutePath", absoluteUrl);
    var $v_4 = $v_1.Execute();
    if ($v_4.Success) {
        var $v_5 = {};
        $v_5.locationId = window._locationid;
        $v_5.locationName = $v_3;
        Mscrm.Utilities.setReturnValue($v_5);
        detachWindowOnBeforeUnload(Mscrm.DocumentLocationHelper.page_BeforeUnload, window.self);
        closeWindow()
    }
};
Mscrm.DocumentLocationHelper.showNotification = function(message, param, isError) {
    var $v_0 = $get("errorMessageLabel"), $v_1 = $get("documentGrid"), $v_2 = $get("errorImage");
    if (!IsNull($v_2))
        if (!IsNull(isError) && !isError) $v_2.style.display = "none";
        else $v_2.style.display = "inline";
    if (!IsNull($v_1)) $v_1.style.display = "none";
    if (!IsNull($v_0)) {
        $v_0.style.display = "inline";
        XUI.Html.SetText($v_0, formatString(window[message], param))
    }
    var $v_3 = $get("errorMessageArea");
    if (!IsNull($v_3)) $v_3.style.display = "inline";
    if (param === "") {
        var $v_4 = $get("showProgress");
        if (!IsNull($v_4)) $v_4.style.display = "none";
        Mscrm.DocumentLocationHelper.setAddLocationDialogControlsState(false)
    }
    Mscrm.DocumentLocationHelper.$0 = false;
    refreshRibbon()
};
Mscrm.DocumentLocationHelper.hideNotification = function() {
    Mscrm.DocumentLocationHelper.$9();
    var $v_0 = $get("errorMessageArea");
    if (!IsNull($v_0)) $v_0.style.display = "none";
    var $v_1 = $get("errorMessageLabel");
    if (!IsNull($v_1)) $v_1.style.display = "none";
    Mscrm.DocumentLocationHelper.setAddLocationDialogControlsState(false)
};
Mscrm.DocumentLocationHelper.showGrid = function(siteCollectionUrl, selectedLocationUrl, locationName, locationId) {
    Mscrm.DocumentLocationHelper.$0 = true;
    refreshRibbon();
    var $v_0 = $get("documentGrid");
    if (!IsNull($v_0)) {
        var $v_1 = $get("showProgress");
        if (!IsNull($v_1)) {
            $v_1.style.display = "inline";
            $v_0.style.display = "none"
        }
        var $v_2 = $get("errorMessageArea");
        if (!IsNull($v_2)) $v_2.style.display = "none";
        Mscrm.DocumentLocationHelper.$8++;
        window.setTimeout("Mscrm.DocumentLocationHelper.showErrorOnTimeout(" + Mscrm.DocumentLocationHelper.$8 + ")",
            6e4);
        var $v_3 = $get("gridIframe");
        if (!isNullOrEmptyString(siteCollectionUrl)) {
            Mscrm.DocumentLocationHelper.$G($v_3, Mscrm.DocumentLocationHelper.validateAndLoadGrid);
            Mscrm.DocumentLocationHelper.$7 = selectedLocationUrl;
            Mscrm.DocumentLocationHelper.$6 = locationId;
            Mscrm.DocumentLocationHelper.$D = locationName;
            var $v_4 = Mscrm.CrmUri.create(siteCollectionUrl + "/crmgrid/crmgridpage.aspx");
            $v_4.get_query()["locationUrl"] = selectedLocationUrl;
            $v_4.get_query()["langId"] = window.LOCID_DOCM_LANGID;
            $v_4.get_query()["pageSize"] = window.LOCID_DOCM_RECORDSPERPAGE;
            $v_3.src = $v_4.toString()
        } else Mscrm.DocumentLocationHelper.$E(selectedLocationUrl, $v_3)
    }
};
Mscrm.DocumentLocationHelper.showErrorOnTimeout = function(counter) {
    if (counter !== Mscrm.DocumentLocationHelper.$8) return;
    var $v_0 = $get("showProgress");
    !IsNull($v_0) &&
        $v_0.style.display !== "none" &&
        Mscrm.DocumentLocationHelper.showNotification("LOCID_DOCM_SP_NOTREACHABLE", "")
};
Mscrm.DocumentLocationHelper.$G = function($p0, $p1) {
    if (Mscrm.Utilities.isFirefox()) $addHandler(window, "DOMFrameContentLoaded", $p1);
    else $addHandler($p0, "load", $p1)
};
Mscrm.DocumentLocationHelper.$L = function($p0, $p1) {
    if (Mscrm.Utilities.isFirefox()) $removeHandler(window, "DOMFrameContentLoaded", $p1);
    else $removeHandler($p0, "load", $p1)
};
Mscrm.DocumentLocationHelper.validateGridPresence = function(eve) {
    var $v_0 = eve.target;
    $removeHandler($v_0, "load", Mscrm.DocumentLocationHelper.validateGridPresence);
    var $v_1 = Mscrm.Utilities.getExternalIFrame($v_0, "proxyFrame"),
        $v_2 = Mscrm.Utilities.getExternalIFrame($v_0, "crossBrowserFrame");
    if (IsNull($v_1))
        if (IsNull(window._dialogMode)) {
            var $v_3 = $get("gridIframe"),
                $v_4 = Mscrm.CrmUri.create($get("proxyFrame").src),
                $v_5 = "/crmgrid/createfolder.aspx",
                $v_6 = $v_4.toString();
            $v_6 = $v_6.substring(0, $v_6.length - ($v_4.get_queryString().length + $v_5.length));
            Mscrm.DocumentLocationHelper.$E($v_6, $v_3)
        } else Mscrm.DocumentLocationHelper.showNotification("LOCID_MESSAGE_GRIDNOTPRESENT", "");
    else if (IsNull($v_2) && !Mscrm.Utilities.get_ieBrowserVersion()
    ) Mscrm.DocumentLocationHelper.showNotification("LOCID_MESSAGE_CB_GRIDNOTPRESENT", "");
    else
        Mscrm.DocumentLocationHelper.$2 = window
            .setInterval(Mscrm.DocumentLocationHelper.pollForFolderCreationStatusOnSharePoint, 1e3)
};
Mscrm.DocumentLocationHelper.validateAndLoadGrid = function(eve) {
    var $v_0 = eve.target;
    Mscrm.DocumentLocationHelper.$L($v_0, Mscrm.DocumentLocationHelper.validateAndLoadGrid);
    if (Mscrm.Utilities.isFirefox()) {
        var $v_1 = Mscrm.Utilities.getExternalIFrame($v_0, "gridActionFrame");
        if (IsNull($v_1))
            window.setTimeout(function() { Mscrm.DocumentLocationHelper.validateAndLoadDocumentGrid($v_0) }, 1e4);
        else Mscrm.DocumentLocationHelper.validateAndLoadDocumentGrid($v_0)
    } else Mscrm.DocumentLocationHelper.validateAndLoadDocumentGrid($v_0)
};
Mscrm.DocumentLocationHelper.validateAndLoadDocumentGrid = function(gridFrame) {
    var $v_0 = window.ListComponentInstalled,
        $v_1 = Mscrm.Utilities.getExternalIFrame(gridFrame, "gridActionFrame"),
        $v_2 = Mscrm.Utilities.getExternalIFrame(gridFrame, "errorFrame"),
        $v_3 = Mscrm.Utilities.getExternalIFrame(gridFrame, "crossBrowserFrame");
    if (!IsNull($v_2)) {
        var $v_4 = Mscrm.CrmUri.create("/_grid/cmds/dlg_fixlocation.aspx");
        $v_4.get_query()["locationName"] = Mscrm.DocumentLocationHelper.$D;
        $v_4.get_query()["locationUrl"] = Mscrm.DocumentLocationHelper.$7;
        $v_4.get_query()["locationId"] = Mscrm.DocumentLocationHelper.$6;
        var $v_5 = openStdDlg($v_4, null, 500, 230, true, false, null);
        if (!IsNull($v_5)) Mscrm.DocumentLocationHelper.editLocation(Mscrm.DocumentLocationHelper.$6);
        else Mscrm.DocumentLocationHelper.$9()
    } else if (!$v_0 && (IsNull($v_1) || IsNull($v_3) && !Mscrm.Utilities.get_ieBrowserVersion())
    ) Mscrm.DocumentLocationHelper.$E(Mscrm.DocumentLocationHelper.$7, gridFrame);
    else Mscrm.DocumentLocationHelper.$9()
};
Mscrm.DocumentLocationHelper.$E = function($p0, $p1) {
    if (Mscrm.DocumentLocationHelper.validateUrlProtocol($p0)) {
        $p1.src = $p0;
        Mscrm.DocumentLocationHelper.$G($p1, Mscrm.DocumentLocationHelper.$J)
    } else {
        Mscrm.DocumentLocationHelper.showNotification("LOCID_DOCM__INVALID_PROTOCOL", "");
        return
    }
};
Mscrm.DocumentLocationHelper.validateUrlProtocol = function(url) {
    var $v_0 = 2;
    if (validateUrlProtocol(url) === $v_0) return false;
    else return true
};
Mscrm.DocumentLocationHelper.$J = function($p0) {
    var $v_0 = $p0.target;
    Mscrm.DocumentLocationHelper.$L($v_0, Mscrm.DocumentLocationHelper.$J);
    Mscrm.DocumentLocationHelper.$9()
};
Mscrm.DocumentLocationHelper.$9 = function() {
    var $v_0 = $get("showProgress"), $v_1 = $get("documentGrid");
    if (!IsNull($v_0)) $v_0.style.display = "none";
    if (!IsNull($v_1)) {
        $v_1.style.display = "";
        Mscrm.DocumentLocationHelper.$0 = false;
        refreshRibbon()
    }
};
Mscrm.DocumentLocationHelper.createDocumentLocationRecord = function(properties) {
    var $v_0 = new RemoteCommand("DocumentManagementWebService", "CreateDocumentLocationRecord");
    $v_0.ErrorHandler = Mscrm.DocumentLocationHelper.errorHandler;
    var $$dict_3 = properties;
    for (var $$key_4 in $$dict_3) {
        var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0.SetParameter($v_2.key, $v_2.value)
    }
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue.toString();
    else return null
};
Mscrm.DocumentLocationHelper.errorHandler = function(hResult, oXmlNode) {
    if (hResult === "0x0") alert(window.LOCID_INVALID_URL);
    else window.RemoteCommandDefaultErrorHandler(hResult, oXmlNode)
};
Mscrm.DocumentLocationHelper.setAddLocationDialogControlsState = function(disable) {
    var $v_0 = $get("relativeUrl"),
        $v_1 = $get("absoluteUrl"),
        $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("locationLookup"),
        $v_3 = $get("absoluteUrlText"),
        $v_4 = $get("folderNameText"),
        $v_5 = $get("butBegin"),
        $v_6 = $get("locationNameText");
    if (!IsNull($v_0)) $v_0.disabled = disable;
    if (!IsNull($v_1)) $v_1.disabled = disable;
    !IsNull($v_2) && $v_2.set_disabled(disable);
    if (!IsNull($v_3)) $v_3.disabled = disable;
    if (!IsNull($v_4)) $v_4.disabled = disable;
    if (!IsNull($v_5)) $v_5.disabled = disable;
    if (!IsNull($v_6)) $v_6.disabled = disable
};
Mscrm.DocumentLocationHelper.$I = function($p0) {
    if (IsNull($p0)) return false;
    if (!isNullOrEmptyString(XUI.Xml.GetText($p0))) return true;
    if (!IsNull($p0.childNodes))
        for (var $v_0 = $p0.childNodes
                .length -
                1;
            $v_0 >= 0;
            $v_0--) if (Mscrm.DocumentLocationHelper.$I($p0.childNodes[$v_0])) return true;
    return false
};
Mscrm.DocumentLocationHelper.$P = function($p0, $p1) {
    var $v_0 = new RemoteCommand("DocumentManagementWebService", "RetrieveAutoCreateInformation");
    $v_0.SetParameter("currentRecordId", $p0);
    $v_0.SetParameter("currentEntityOtc", $p1);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success && Object.getType($v_1.ReturnValue) === String) {
        var $v_2 = XUI.Xml.LoadXml($v_1.ReturnValue.toString());
        if (!IsNull($v_2) && Mscrm.DocumentLocationHelper.$I($v_2)) {
            var $v_3 = {}, $v_4 = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/associatedlocationcount", null);
            if (!IsNull($v_4)) $v_3.associatedlocationcount = XUI.Xml.GetText($v_4);
            var $v_5 = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/cancreatefolder", null);
            if (!IsNull($v_5)) $v_3.cancreatefolder = true;
            else $v_3.cancreatefolder = false;
            var $v_6 = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/makefoldernameunique", null);
            if (!IsNull($v_6)) $v_3.makefoldernameunique = XUI.Xml.GetText($v_6).toUpperCase() === "TRUE";
            var $v_7 = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/siteinfo", null);
            if (!IsNull($v_7)) {
                var $v_8 = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/siteinfo/defaultlocationid", null),
                    $v_9 = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/siteinfo/defaultlocationtype", null),
                    $v_A = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/siteinfo/defaultlocationurl", null),
                    $v_B = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/siteinfo/defaultlocationname", null),
                    $v_C = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/siteinfo/sitecollectionurl", null),
                    $v_D = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/entitycentric", null);
                $v_3.defaultLocationId = XUI.Xml.GetText($v_8);
                $v_3.defaultLocationUrl = XUI.Xml.GetText($v_A);
                $v_3.defaultLocationType = XUI.Xml.GetText($v_9);
                $v_3.defaultLocationName = XUI.Xml.GetText($v_B);
                $v_3.siteCollectionUrl = XUI.Xml.GetText($v_C);
                if ($v_D) {
                    var $v_E = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/entitycentric/entityobjectid", null),
                        $v_F = XUI.Xml.SelectSingleNode($v_2,
                            "autocreatedata/entitycentric/entityobjectrecordname",
                            null),
                        $v_G = XUI.Xml.SelectSingleNode($v_2, "autocreatedata/entitycentric/entityobjecttype", null),
                        $v_H = XUI.Xml.SelectSingleNode($v_2,
                            "autocreatedata/entitycentric/entityobjectlogicalname",
                            null);
                    $v_3.ecId = XUI.Xml.GetText($v_E);
                    $v_3.ecName = XUI.Xml.GetText($v_F);
                    $v_3.ecLogicalName = XUI.Xml.GetText($v_H);
                    $v_3.ecEtc = XUI.Xml.GetText($v_G)
                }
            }
            return $v_3
        }
    }
    return null
};
Mscrm.DocumentLocationHelper.$4 = function() { return Xrm.Page.data.getEntity().getPrimaryAttributeValue() };
Mscrm.DocumentLocationHelper.getEntityLogicalName = function(formSubmit) {
    if (!IsNull(formSubmit.crmFormSubmitObjectTypeName)) return formSubmit.crmFormSubmitObjectTypeName.value;
    else return window._etn
};
Mscrm.DocumentLocationHelper.addLocation = function() {
    var $v_0 = Mscrm.DocumentLocationHelper.$4();
    if (IsNull($v_0)) $v_0 = Mscrm.DocumentLocationHelper.$4();
    if (!IsNull($v_0)) $v_0 = Mscrm.DocumentLocationHelper.$3($v_0);
    var $v_1 = window.parent.document.getElementById("crmFormSubmit"), $v_2 = Mscrm.DocumentLocationHelper.$1($v_1);
    if (isNullOrEmptyString($v_2)) {
        var $v_5 = Mscrm.CrmUri.create(window.location.href);
        $v_2 = $v_5.get_query()["oId"]
    }
    var $v_3 = Mscrm.DocumentLocationHelper.$H(),
        $v_4 = Mscrm.Utilities.createCallbackFunctionObject("addLocationCallback",
            Mscrm.DocumentLocationHelper,
            null,
            false);
    Mscrm.DocumentLocationHelper.$F($v_2, $v_1.crmFormSubmitObjectType.value, $v_0, "0", $v_3, null, $v_4)
};
Mscrm.DocumentLocationHelper
    .editSharePointLocation = function(gridControl, documentLocationId, folderName, locationName) {
        var $v_0 = null, $v_1 = null;
        if (!IsNull(gridControl)) {
            var $v_5 = $find(gridControl.get_id()), $v_6 = $v_5.GetParameter("locationId"), $v_7 = window.frameElement;
            if (!IsNull($v_7.getAttribute("foldername"))) folderName = $v_7.getAttribute("foldername").toString();
            if (!IsNull($v_7.getAttribute("locationname"))) locationName = $v_7.getAttribute("locationname").toString();
            documentLocationId = $v_6
        }
        var $v_2 = window.parent.document.getElementById("crmFormSubmit");
        $v_0 = Mscrm.DocumentLocationHelper.$1($v_2);
        $v_1 = $v_2.crmFormSubmitObjectType.value;
        var $v_3 = [documentLocationId],
            $v_4 = Mscrm.Utilities
                .createCallbackFunctionObject("editSharePointLocationCallBack",
                    Mscrm.DocumentLocationHelper,
                    $v_3,
                    false);
        Mscrm.DocumentLocationHelper.$K($v_0, $v_1, null, "1", folderName, locationName, documentLocationId, $v_4)
    };
Mscrm.DocumentLocationHelper.editSharePointLocationCallBack = function(result) {
    var $v_0 = window.frameElement;
    $v_0.contentWindow.location.reload()
};
Mscrm.DocumentLocationHelper.addSharePointDocLocation = function() {
    var $v_0 = Mscrm.DocumentLocationHelper.$4();
    if (IsNull($v_0)) $v_0 = Mscrm.DocumentLocationHelper.$4();
    if (!IsNull($v_0)) $v_0 = Mscrm.DocumentLocationHelper.$3($v_0);
    var $v_1 = window.parent.document.getElementById("crmFormSubmit"), $v_2 = Mscrm.DocumentLocationHelper.$1($v_1);
    if (isNullOrEmptyString($v_2)) {
        var $v_4 = Mscrm.CrmUri.create(window.location.href);
        $v_2 = $v_4.get_query()["oId"]
    }
    var $v_3 = Mscrm.Utilities.createCallbackFunctionObject("addSharePointLocationCallback",
        Mscrm.DocumentLocationHelper,
        null,
        false);
    Mscrm.DocumentLocationHelper.$K($v_2, $v_1.crmFormSubmitObjectType.value, $v_0, "0", null, null, null, $v_3)
};
Mscrm.DocumentLocationHelper.addLocationCallback = function(result) {
    if (!IsNull(result)) {
        var $v_0 = result
                .locationId,
            $v_1 = result.locationName,
            $v_2 = $find("documentsGrid_DocumentLocationSelector");
        $v_2.addLocationItemInMenu($v_0, $v_1);
        $v_2.setSelectedLocationItemInMenu($v_0);
        refreshRibbon()
    }
};
Mscrm.DocumentLocationHelper.addSharePointLocationCallback = function(result) {
    var $v_0 = window.frameElement;
    $v_0.setAttribute("foldername", result.foldername);
    $v_0.setAttribute("locationname", result.locationname);
    var $v_1 = $v_0.contentWindow.location.href, $v_2 = Mscrm.CrmUri.create($v_1);
    $v_2.get_query()["locationId"] = result.locationid;
    $v_0.src = $v_2.toString()
};
Mscrm.DocumentLocationHelper.$F = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = Mscrm.CrmUri.create("/tools/documentmanagement/addlocation.aspx");
    if (!isNullOrEmptyString($p0)) $v_0.get_query()["oId"] = $p0;
    if (!isNullOrEmptyString($p1)) $v_0.get_query()["oType"] = $p1;
    if (!isNullOrEmptyString($p2)) $v_0.get_query()["oName"] = $p2;
    if (!isNullOrEmptyString($p5)) $v_0.get_query()["locationid"] = $p5;
    $v_0.get_query()["mode"] = $p3;
    var $v_1 = Mscrm.DefaultLocationCount.getNextCount("DOCM_LOCATION_COUNT"), $v_2 = 600, $v_3 = 380;
    if (!$p4) {
        $v_0.get_query()["cancreatefolder"] = "False";
        $v_3 = 270
    }
    var $v_4 = null, $v_5 = new Mscrm.CrmDialog($v_0, $v_1, $v_2, $v_3, null), $v_6 = [$p3, $p6];
    $v_4 = Mscrm.Utilities.createCallbackFunctionObject("openAddLocationDialogCallback",
        Mscrm.DocumentLocationHelper,
        $v_6,
        false);
    $v_5.setCallbackReference($v_4);
    $v_5.show()
};
Mscrm.DocumentLocationHelper.$K = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    var $v_0 = Mscrm.CrmUri.create("/tools/documentmanagement/addsharepointlocation.aspx");
    if (!isNullOrEmptyString($p0)) $v_0.get_query()["oId"] = $p0;
    if (!isNullOrEmptyString($p1)) $v_0.get_query()["oType"] = $p1;
    if (!isNullOrEmptyString($p2)) $v_0.get_query()["oName"] = $p2;
    if (!isNullOrEmptyString($p6)) $v_0.get_query()["locationid"] = $p6;
    if (!isNullOrEmptyString($p5)) $v_0.get_query()["locationname"] = $p5;
    if (!isNullOrEmptyString($p4)) $v_0.get_query()["foldername"] = $p4;
    $v_0.get_query()["mode"] = $p3;
    var $v_1 = Mscrm.DefaultLocationCount.getNextCount("DOCM_LOCATION_COUNT"),
        $v_2 = 800,
        $v_3 = 310,
        $v_4 = null,
        $v_5 = new Mscrm.CrmDialog($v_0, $v_1, $v_2, $v_3, null),
        $v_6 = [$p3, $p7];
    $v_4 = Mscrm.Utilities.createCallbackFunctionObject("openAddLocationDialogCallback",
        Mscrm.DocumentLocationHelper,
        $v_6,
        false);
    $v_5.setCallbackReference($v_4);
    $v_5.show()
};
Mscrm.DocumentLocationHelper.openAddLocationDialogCallback = function(result, mode, callback) {
    if (!IsNull(result)) {
        if (mode === "0") {
            Mscrm.DocumentLocationHelper.associatedLocationCount++;
            Mscrm.DefaultLocationCount.incrementCount("DOCM_LOCATION_COUNT")
        }
        Mscrm.Utilities.executeFunction(callback, result)
    }
};
Mscrm.DocumentLocationHelper.$H = function() {
    var $v_0 = new RemoteCommand("DocumentManagementWebService", "CanCreateFolder"), $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    return false
};
Mscrm.DocumentLocationHelper.editLocation = function(locationId) {
    var $v_0 = $find("documentsGrid_DocumentLocationSelector"), $v_1 = null, $v_2 = null;
    if (IsNull(locationId)) {
        var $v_6 = window.parent.document.getElementById("crmFormSubmit");
        locationId = $v_0.getSelectedLocationId();
        $v_1 = Mscrm.DocumentLocationHelper.$1($v_6);
        $v_2 = $v_6.crmFormSubmitObjectType.value
    }
    var $v_3 = Mscrm.DocumentLocationHelper.$H(),
        $v_4 = [locationId],
        $v_5 = Mscrm.Utilities.createCallbackFunctionObject("editLocationCallback",
            Mscrm.DocumentLocationHelper,
            $v_4,
            false);
    Mscrm.DocumentLocationHelper.$F($v_1, $v_2, null, "1", $v_3, locationId, $v_5)
};
Mscrm.DocumentLocationHelper.editLocationCallback = function(result, locationId) {
    var $v_0 = $find("documentsGrid_DocumentLocationSelector");
    if (!IsNull(result)) {
        var $v_1 = result.locationName;
        $v_0.updateLocationNameInMenu(locationId, $v_1);
        $v_0.setSelectedLocationItemInMenu(locationId, true)
    }
    $v_0.setSelectedLocationItemInMenu(locationId, true)
};
Mscrm.DocumentLocationHelper
    .isFolderCreationOrGridLoadInProgress = function() { return Mscrm.DocumentLocationHelper.$0 };
Mscrm.DocumentLocationHelper.enableEditLocationRibbonAction = function() {
    if ((window.parent.Mscrm.DocumentLocationHelper.associatedLocationCount > 0 ||
            Mscrm.DocumentLocationHelper.associatedLocationCount > 0) &&
        !Mscrm.DocumentLocationHelper.$0) return true;
    else return false
};
Mscrm.DocumentLocationHelper.$1 = function($p0) {
    var $v_0 = "";
    if (!isNullOrEmptyString($p0.crmFormSubmitId.value)) $v_0 = $p0.crmFormSubmitId.value;
    else
        try {
            var $v_1 = window._id;
            if (!IsNull($v_1)) $v_0 = $v_1;
            else {
                $v_1 = window.parent._id;
                if (!IsNull($v_1)) $v_0 = $v_1
            }
        } catch ($$e_3) {
        }
    return $v_0
};
Mscrm.DocumentLocationHelper.$M = function($p0, $p1, $p2) {
    if (!IsNull($p1)) {
        var $v_0 = IsNull($p0) ? false : $p0.makefoldernameunique;
        if ($v_0) {
            var $v_1 = "[{}-]", $v_2 = new RegExp($v_1, "g");
            $p1 = $p1.replace($v_2, "").trim().toUpperCase();
            $p2 = String.format("{0}_{1}", $p2, $p1)
        }
    }
    return $p2
};
Mscrm.DefaultLocationCount = function() {};
Mscrm.DefaultLocationCount.getNextCount = function(variableName) {
    try {
        var $v_0 = window.top.opener.parent[variableName];
        return IsNull($v_0) ? 1 : $v_0
    } catch ($$e_2) {
        return 1
    }
};
Mscrm.DefaultLocationCount.incrementCount = function(variableName) {
    try {
        var $v_0 = Mscrm.DefaultLocationCount.getNextCount(variableName);
        window.top.opener.parent[variableName] = $v_0 + 1
    } catch ($$e_2) {
    }
};
Mscrm.AddLocationDialogMode = function() {};
Mscrm.DocumentLocationHelper.registerClass("Mscrm.DocumentLocationHelper");
Mscrm.DefaultLocationCount.registerClass("Mscrm.DefaultLocationCount");
Mscrm.AddLocationDialogMode.registerClass("Mscrm.AddLocationDialogMode");
Mscrm.DocumentLocationHelper.$8 = 0;
Mscrm.DocumentLocationHelper.$A = null;
Mscrm.DocumentLocationHelper.$5 = 0;
Mscrm.DocumentLocationHelper.$C = null;
Mscrm.DocumentLocationHelper.$B = null;
Mscrm.DocumentLocationHelper._dlName = null;
Mscrm.DocumentLocationHelper._folderName = null;
Mscrm.DocumentLocationHelper._entityCentricPrimaryName = null;
Mscrm.DocumentLocationHelper._entityCentricEntityName = null;
Mscrm.DocumentLocationHelper.$7 = null;
Mscrm.DocumentLocationHelper.$D = null;
Mscrm.DocumentLocationHelper.$6 = null;
Mscrm.DocumentLocationHelper.$2 = 0;
Mscrm.DocumentLocationHelper.associatedLocationCount = 0;
Mscrm.DocumentLocationHelper.$0 = false;
Mscrm.DocumentLocationHelper.specialCharatersRegExString = '[:~"#%&*<>?/\\\\{|}.]';
Mscrm.DocumentLocationHelper.sP_FOLDERNAME_MAXLENGTH = 128;
Mscrm.DocumentLocationHelper.foldernamE_LENGTH_IFEXCEEDS_URLENCODEDLENGTH = 32;
Mscrm.DocumentLocationHelper.maX_URL_LENGTH = 2048;
Mscrm.DefaultLocationCount.docM_LOCATION_COUNT = "DOCM_LOCATION_COUNT";
Mscrm.DefaultLocationCount.docM_AUTO_CREATE_LOCATION_COUNT = "DOCM_AUTO_CREATE_LOCATION_COUNT";
Mscrm.AddLocationDialogMode.add = 0;
Mscrm.AddLocationDialogMode.edit = 1