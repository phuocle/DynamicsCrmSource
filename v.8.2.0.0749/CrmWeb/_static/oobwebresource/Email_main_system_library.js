Type.registerNamespace("Mscrm");
Mscrm.EmailEngagement = {};
Mscrm.EmailEngagement.SaveAndCloseCalled = false;
Mscrm.Form_onload = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Internal
        .getResourceString("IS_EMAILENGAGEMENT_FEATURE_AVAILABLE"))) {
        var attachmentsGrid = Xrm.Page.ui.controls.get("attachmentsGrid");
        if (attachmentsGrid != null && Xrm.Page.getAttribute("statuscode").getValue() == 1) {
            console.log("attachments grid found");
            attachmentsGrid.addOnLoad(Mscrm.AttachmentsGridOnLoad)
        }
        if (!Mscrm._isSaveHandlerAdded) {
            var saveChangeHandler = Mscrm.Form_onsave;
            Xrm.Page.data.entity.addOnSave(saveChangeHandler);
            Mscrm._isSaveHandlerAdded = true
        }
    }
    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.EntityPageHandlerFactory) && Mscrm.EntityPageHandlerFactory.create()
};
Mscrm.AttachmentsGridOnLoad = function() {
    if (Mscrm.EmailEngagement.SaveAndCloseCalled == true) {
        Mscrm.EmailEngagement.SaveAndCloseCalled = false;
        return
    }
    if (parent == null || parent.document == null) return;
    var blockingMessageDiv = parent.document.querySelector(".ms-crm-Inline-Edit-email-body #trBlockMsg");
    if (blockingMessageDiv != null) {
        var cloudAttachmentsDiv = parent.document.getElementById("cloud_attachments");
        if (cloudAttachmentsDiv == null)
            cloudAttachmentsDiv = createCloudAttachmentsDiv(parent.document, blockingMessageDiv);
        Mscrm.GetCloudAttachments().then(function(response) {
            if (parent == null) return;
            var attachments = response.entityCollection.get_entities(),
                currentRow = parent.document.createElement("tr"),
                attachmentCell = parent.document.createElement("td"),
                attachmentCellDiv = parent.document.createElement("div");
            attachmentCellDiv.setAttribute("class", "ms-crm-cloudattachment-cell-div");
            attachmentCellDiv.setAttribute("aria-label",
                Xrm.Internal.getResourceString("Followed_Email_Attachments_Tooltip"));
            attachmentCellDiv.setAttribute("title",
                Xrm.Internal.getResourceString("Followed_Email_Attachments_Tooltip"));
            attachmentCell.appendChild(attachmentCellDiv);
            var tableRowsHtml = "";
            if (attachments.length == 0) cloudAttachmentsDiv.style.display = "none";
            else {
                var cloudAttachments = 0;
                for (var i in attachments)
                    if (attachments[i].getValue("isfollowed").get_ValueString() == "1") {
                        var cloudAttachmentDiv = parent.document.createElement("div");
                        cloudAttachmentDiv.setAttribute("class", "ms-crm-cloud-attachment");
                        var fileName = attachments[i].getValue("filename");
                        if (fileName.length > 50) {
                            cloudAttachmentDiv.innerText = fileName.length > 50
                                ? fileName.substring(0, 47) + "..."
                                : fileName;
                            cloudAttachmentDiv.setAttribute("aria-label", fileName);
                            cloudAttachmentDiv.setAttribute("title", fileName)
                        } else {
                            cloudAttachmentDiv.innerText = fileName;
                            cloudAttachmentDiv.setAttribute("aria-label", fileName);
                            cloudAttachmentDiv.setAttribute("title", fileName)
                        }
                        attachmentCellDiv.appendChild(cloudAttachmentDiv);
                        cloudAttachments++
                    }
                currentRow.appendChild(attachmentCell);
                cloudAttachmentsDiv.childNodes[0].innerHTML = currentRow.innerHTML;
                if (cloudAttachments > 0) cloudAttachmentsDiv.style.display = "block";
                else cloudAttachmentsDiv.style.display = "none"
            }
            parent.document.getElementById("description_d").style
                .height = parseInt(parent.document.getElementById("description_d").getAttribute("data-height")) +
                parent.document.getElementById("cloud_attachments").offsetHeight +
                "px"
        })
    }

    function createCloudAttachmentsDiv(emailBodyDocument, blockingMessageDiv) {
        var cloudAttachmentsDiv = emailBodyDocument.createElement("tr"),
            emailDescriptionTable = emailBodyDocument.querySelector(".ms-crm-Inline-Edit-email-body #description_i");
        emailDescriptionTable.childNodes[0].insertBefore(cloudAttachmentsDiv, blockingMessageDiv);
        cloudAttachmentsDiv.setAttribute("id", "cloud_attachments");
        var cloudAttachmentsTable = emailBodyDocument.createElement("table");
        cloudAttachmentsTable.setAttribute("class", "ms-crm-cloud_attachments");
        cloudAttachmentsDiv.insertBefore(cloudAttachmentsTable, cloudAttachmentsDiv.childNodes[0]);
        return cloudAttachmentsDiv
    }
};
Mscrm.GetCloudAttachments = function() {
    return Xrm.Internal.messages
        .retrieveMultiple("<fetch version='1.0' output-format='xml-platform' mapping='logical'><entity name='activitymimeattachment'><attribute name='filename' /><attribute name='filesize' /><attribute name='activitymimeattachmentid' /><attribute name='isfollowed' /><attribute name='anonymouslink' /><order attribute='filename' descending='false' /><filter><condition attribute='objectid' operator = 'eq' value='" + Xrm.Page.data.entity.getId() + "'></condition></filter></entity></fetch>")
};
Mscrm.Form_onsave = function(context) {
    if (context.getEventArgs().getSaveMode() == 2) Mscrm.EmailEngagement.SaveAndCloseCalled = true;
    console.log(context)
};
Mscrm._isSaveHandlerAdded = false;
Mscrm.Form_onsave = Mscrm.Form_onsave;
Mscrm.emailFormError = function(response) {
    var serviceFault = response.get_organizationServiceFault();
    if (!IsNull(serviceFault)) {
        var errorCode = serviceFault.get_errorCode();
        Xrm.Internal.openErrorDialog(errorCode, response.get_message())
    }
};
Mscrm.dateError = function() {
    var errorStrings = new Xrm.AlertDialogStrings;
    errorStrings.text = Xrm.Page.getAttribute("dateErrorText").getValue();
    Xrm.Dialog.openAlertDialog(errorStrings, null, null)
};
Mscrm.EmailEngagementFormatDate = function(rawDate) {
    var userSpecificShortDatePattern = Mscrm.InternalUtilities.DialogUtility.getDialogArguments()
            .UserSpecificShortDatePattern,
        userSpecificShortTimePattern = Mscrm.InternalUtilities.DialogUtility.getDialogArguments()
            .UserSpecificShortTimePattern;
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(userSpecificShortDatePattern) &&
        !Mscrm.InternalUtilities._Script
        .isNullOrUndefined(userSpecificShortTimePattern))
        return String.localeFormat("{0:" + userSpecificShortDatePattern + " " + userSpecificShortTimePattern + "}",
            rawDate);
    return String.localeFormat("{0:" +
        Sys.CultureInfo.CurrentCulture.dateTimeFormat.ShortDatePattern +
        " " +
        Sys.CultureInfo.CurrentCulture.dateTimeFormat.ShortTimePattern +
        "}",
        rawDate)
};
Mscrm.showDialogFooter = function(footerText) {
    var footer_attr = parent.document.getElementById("lbl_textFooter_d"),
        footer_div = parent.document.createElement("div");
    if (parent.document.getElementById("dialogFooter") != null) {
        footer_div = parent.document.getElementById("dialogFooter");
        footer_div.textContent = footerText
    } else {
        footer_div.id = "dialogFooter";
        footer_div.style.borderTop = "1px solid";
        footer_div.style.borderTopColor = "rgba(128, 128, 128, 0.47)";
        footer_div.textContent = footerText
    }
    footer_attr.appendChild(footer_div)
};
Mscrm.sendLaterOnLoad = function() {
    try {
        var sendDate = Xrm.Page.getAttribute("delayedSendTime").getValue();
        if (Xrm.Page.getAttribute("footerText") != null && sendDate != null) {
            var footer = Xrm.Page.getAttribute("footerText").getValue(),
                localeDateTime = Mscrm.EmailEngagementFormatDate(sendDate),
                footerText = String.format(footer, localeDateTime);
            Mscrm.showDialogFooter(footerText)
        }
        var delaySendAttribute = Xrm.Page.getAttribute("delayedSendTime");
        if (delaySendAttribute != undefined && delaySendAttribute != null
        ) sendDate && Xrm.Page.getAttribute("sendAtDate").setValue(sendDate.getTime());
        else console.log("attr not available")
    } catch (e) {
        alert(e);
        console.log(e)
    }
};
Mscrm.sendLaterClick = function() {
    try {
        var newSendDate = Xrm.Page.getAttribute("sendAtDate").getValue(),
            today = Xrm.Page.getAttribute("now").getValue();
        if (newSendDate.getTime() < today) {
            Mscrm.dateError();
            return
        }
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("delayedSendTime", newSendDate);
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("lastButtonClicked", "ok_id");
        window.setTimeout(function() { Xrm.Page.ui.close() }, 500)
    } catch (e) {
        console.log(e)
    }
};
Mscrm.sendLaterOnChange = function() {
    try {
        var SendDate = Xrm.Page.getAttribute("sendAtDate").getValue();
        if (Xrm.Page.getAttribute("footerText") != null && SendDate != null) {
            var footer = Xrm.Page.getAttribute("footerText").getValue(),
                localeDateTime = Mscrm.EmailEngagementFormatDate(SendDate),
                footerText = String.format(footer, localeDateTime);
            Mscrm.showDialogFooter(footerText)
        }
    } catch (e) {
        console.log(e)
    }
};
Mscrm.setReminderOnLoad = function() {
    try {
        var remindDate = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("reminderDateSelected"),
            setReminderTypeAttribute = Xrm.Page.getAttribute("reminderOptionSelected").getValue();
        if (remindDate != null && setReminderTypeAttribute != undefined && setReminderTypeAttribute != null) {
            var localeDateTime = Mscrm.EmailEngagementFormatDate(remindDate),
                recipientName = Xrm.Page.getAttribute("recipientName").getValue();
            Xrm.Page.getAttribute("reminderOption").setValue(setReminderTypeAttribute);
            Xrm.Page.getAttribute("reminderDate").setValue(remindDate.getTime());
            var oldRemindeText = Xrm.Page.getAttribute("reminderTextSelected").getValue();
            Xrm.Page.getAttribute("reminderText") != null &&
                Xrm.Page.getAttribute("reminderText").setValue(oldRemindeText);
            var footerText = Mscrm.GetReminderFooterText(recipientName, setReminderTypeAttribute, localeDateTime);
            Mscrm.showDialogFooter(footerText)
        } else console.log("attr not available")
    } catch (e) {
        console.log(e)
    }
};
Mscrm.GetReminderFooterText = function(recipientName, setReminderTypeAttribute, localeDateTime) {
    var footerText = "";
    if (recipientName != null && setReminderTypeAttribute == 0
    )
        footerText = String.format(Xrm.Page.getAttribute("footerTextOption1_single_recipient").getValue(),
            recipientName,
            localeDateTime);
    else if (recipientName == null && setReminderTypeAttribute == 0
    )
        footerText = String.format(Xrm.Page.getAttribute("footerTextOption1_ignore_recipient").getValue(),
            localeDateTime);
    else if (recipientName != null && setReminderTypeAttribute == 1
    )
        footerText = String.format(Xrm.Page.getAttribute("footerTextOption2_single_recipient").getValue(),
            recipientName,
            localeDateTime);
    else if (recipientName == null && setReminderTypeAttribute == 1
    )
        footerText = String.format(Xrm.Page.getAttribute("footerTextOption2_ignore_recipient").getValue(),
            localeDateTime);
    else if (setReminderTypeAttribute == 2)
        footerText = String.format(Xrm.Page.getAttribute("footerTextOption3").getValue(), localeDateTime);
    return footerText
};
Mscrm.setReminderClick = function() {
    try {
        if (Xrm.Page.getAttribute("reminderOption") != null) {
            var newReminderOption = Xrm.Page.getAttribute("reminderOption").getValue(),
                isEmailFollowedAttr = Xrm.Page.getAttribute("isEmailFollowedValue").getValue();
            if ((newReminderOption == 1 || newReminderOption == 0) && !isEmailFollowedAttr) {
                var errorStrings = new Xrm.AlertDialogStrings;
                errorStrings.text = Xrm.Page.getAttribute("invalidChoice").getValue();
                Xrm.Dialog.openAlertDialog(errorStrings, null, null);
                return
            } else Mscrm.InternalUtilities.DialogUtility.setAttributeValue("reminderOptionSelected", newReminderOption)
        }
        if (Xrm.Page.getAttribute("reminderText") != null) {
            var newReminderText = Xrm.Page.getAttribute("reminderText").getValue();
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("reminderTextSelected", newReminderText)
        }
        if (Xrm.Page.getAttribute("reminderDate") != null) {
            var newReminderDate = Xrm.Page.getAttribute("reminderDate").getValue(),
                today = Xrm.Page.getAttribute("now").getValue();
            if (newReminderDate.getTime() < today) {
                Mscrm.dateError();
                return
            }
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("reminderDateSelected", newReminderDate)
        }
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("lastButtonClicked", "ok_id");
        window.setTimeout(function() { Xrm.Page.ui.close() }, 500)
    } catch (e) {
        console.log(e)
    }
};
Mscrm.setReminderOnChange = function() {
    try {
        var reminderDate = Xrm.Page.getAttribute("reminderDate").getValue();
        if (reminderDate != null) {
            var localeDateTime = Mscrm.EmailEngagementFormatDate(reminderDate),
                recipientName = Xrm.Page.getAttribute("recipientName").getValue(),
                setReminderTypeAttribute = Xrm.Page.getAttribute("reminderOption").getValue(),
                footerText = Mscrm.GetReminderFooterText(recipientName, setReminderTypeAttribute, localeDateTime);
            Mscrm.showDialogFooter(footerText)
        }
    } catch (e) {
        console.log(e)
    }
};
Mscrm.viewPreferenceOnLoad = function() {
    try {
        var preferences = Xrm.Page.getAttribute("preferences").getValue(),
            dialogAttribute = parent.document.getElementById("description_id_d"),
            append_div = parent.document.createElement("div");
        append_div.style.maxHeight = "245px";
        append_div.style.overflow = "auto";
        var append_table = parent.document.createElement("table");
        append_table.style.width = "100%";
        append_table.style.borderCollapse = "collapse";
        var tr1 = parent.document.createElement("tr"), fontHead1 = parent.document.createElement("font");
        fontHead1.color = "rgba(128, 128, 128, 0.47)";
        fontHead1.textContent = Xrm.Page.getAttribute("tableHeaderLeft").getValue();
        fontHead1.title = Xrm.Page.getAttribute("tableHeaderLeft").getValue();
        fontHead1.setAttribute("aria-label", Xrm.Page.getAttribute("tableHeaderLeft").getValue());
        fontHead1.tabIndex = 0;
        var fontHead2 = parent.document.createElement("font");
        fontHead2.color = "rgba(128, 128, 128, 0.47)";
        fontHead2.textContent = Xrm.Page.getAttribute("tableHeaderRight").getValue();
        fontHead2.title = Xrm.Page.getAttribute("tableHeaderRight").getValue();
        fontHead2.setAttribute("aria-label", Xrm.Page.getAttribute("tableHeaderRight").getValue());
        fontHead2.tabIndex = 0;
        var th1 = parent.document.createElement("th");
        fontHead1.textContent = Xrm.Page.getAttribute("tableHeaderLeft").getValue();
        th1.style.borderTop = "1px solid";
        th1.style.borderBottom = "1px solid";
        th1.style.borderCollapse = "collapse";
        th1.style.borderBottomColor = "rgba(128, 128, 128, 0.47)";
        th1.style.borderTopColor = "rgba(128, 128, 128, 0.47)";
        th1.appendChild(fontHead1);
        var th2 = parent.document.createElement("th");
        fontHead2.textContent = Xrm.Page.getAttribute("tableHeaderRight").getValue();
        th2.style.borderTop = "1px solid";
        th2.style.borderBottom = "1px solid";
        th2.style.borderCollapse = "collapse";
        th2.style.borderBottomColor = "rgba(128, 128, 128, 0.47)";
        th2.style.borderTopColor = "rgba(128, 128, 128, 0.47)";
        th2.appendChild(fontHead2);
        tr1.appendChild(th1);
        tr1.appendChild(th2);
        append_table.appendChild(tr1);
        var condition = 0;
        while (condition >= 0)
            if (Mscrm.InternalUtilities._Script.isNullOrUndefined(preferences[condition])) break;
            else {
                var contactPrefData = preferences[condition],
                    name = contactPrefData.entityDisplayName,
                    preferenceValue = contactPrefData.emailPreference,
                    preference = "Allow",
                    entityName = contactPrefData.entityName,
                    entityId = contactPrefData.entityId;
                if (preferenceValue == 1) preference = Xrm.Page.getAttribute("followText").getValue();
                else preference = Xrm.Page.getAttribute("donotFollowText").getValue();
                var callOpenEntityForm = function(entityNameCopy, entityIdCopy) {
                        return function() {
                            Xrm.Utility.openEntityForm(entityNameCopy, entityIdCopy);
                            return false
                        }
                    },
                    trNext = parent.document.createElement("tr"),
                    tdName = parent.document.createElement("td"),
                    tdPreference = parent.document.createElement("td"),
                    tdClick = parent.document.createElement("a");
                tdClick.href = "#";
                tdClick.style.color = "#0059B2";
                tdClick.onclick = callOpenEntityForm(entityName, entityId);
                tdClick.textContent = name;
                tdClick.title = name;
                tdName.appendChild(tdClick);
                tdPreference.textContent = preference;
                tdPreference.title = preference;
                tdPreference.tabIndex = 0;
                trNext.appendChild(tdName);
                trNext.appendChild(tdPreference);
                append_table.appendChild(trNext);
                condition = condition + 1
            }
        append_div.appendChild(append_table);
        dialogAttribute.appendChild(append_div)
    } catch (e) {
        console.log(e)
    }
};
Mscrm.viewPreferenceClick = function() { Xrm.Page.ui.close() };
Mscrm.MapJSControl = function(containerDiv,
    interactionDiv,
    MicrosoftMaps,
    MscrmTurboForm,
    MscrmCrmBrowser,
    MscrmInlineEditUtilitiesProxy) {
    var map,
        searchManager,
        mapLocale,
        mapDiv = containerDiv,
        addressString = "",
        initialMapBounds,
        lastFocusedControl,
        mapDivTouchStartTime,
        mapDivClickIsValid = false,
        mapLoadedCallbackName,
        request_num = 0,
        currentAddress;
    Mscrm.MapJSControl.currentControl = this;
    this.getMapDiv = function() { return mapDiv };
    this.hideMap = function() { if (Exists(mapDiv)) mapDiv.style.display = "none" };

    function clearMap() { if (Exists(map)) map = null }

    function CallbackNullCheckAndExecute(callback) { callback != null && callback != undefined && callback() }

    this.RenderAsMap = function(address, mapLoadedCallback) {
        this.address = address;
        if (Exists(map)) {
            var address = this.address;
            if (address != addressString) {
                addressString = address;
                CallbackNullCheckAndExecute(mapLoadedCallback);
                if (IsStringAvailable(addressString))
                    MicrosoftMaps.loadModule("Microsoft.Maps.Search",
                        { callback: Mscrm.MapJSControl.geocodeRequestCallback });
                else {
                    map.setView({ bounds: initialMapBounds });
                    map.entities.clear()
                }
            }
        } else if (Exists(mapDiv)) {
            addressString = this.address;
            var bingMapKey = interactionDiv.getAttribute("data-bingmapAttr"),
                geocodeRequest = document.location.protocol +
                    "//dev.virtualearth.net/REST/v1/Locations?query=" +
                    CrmEncodeDecode.CrmUrlEncode(addressString) +
                    "&output=json&jsonp=Mscrm.MapJSControl.geocodeRequestCallback&key=" +
                    CrmEncodeDecode.CrmUrlEncode(bingMapKey),
                script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", geocodeRequest);
            document.body.appendChild(script)
        } else CallbackNullCheckAndExecute(mapLoadedCallback)
    };

    function Exists(object) { return typeof object != "undefined" && object != null }

    function IsStringAvailable(variable) { return !(variable === undefined || IsNull(variable) || variable == "") }

    function getAddress() { return this.address }

    function createSearchManager() {
        if (!searchManager) {
            map.addComponent("searchManager", new MicrosoftMaps.Search.SearchManager(map));
            searchManager = map.getComponent("searchManager")
        }
    }

    function configureMap(location) {
        if (Xrm.Internal.isTurboForm() && !MscrmTurboForm.Control.PageBootstrapper.hasPageLoaded || map == null) return;
        map.entities.clear();
        if (MscrmCrmBrowser.get_currentBrowser().get_isAndroid() &&
            MscrmCrmBrowser.get_currentBrowser().get_version() >= 29) map.setView({ center: location, zoom: 10 });
        else map.setView({ center: location, zoom: 15 });
        var pin1 = new MicrosoftMaps.Pushpin(location, null);
        map.entities.push(pin1);
        map.entities.push(new MicrosoftMaps.Infobox(location, { title: addressString, pushpin: pin1 }))
    }

    function handleClick(e) { e.mouseMoved == false && openBingWebsite() }

    function handleViewChangeStart(e) {
        if (mapDiv != null)
            for (var images = mapDiv.getElementsByTagName("img"), i = 0; i < images.length; i++) {
                images[i].removeEventListener("touchstart", handleMapDivTouchStart);
                images[i].removeEventListener("touchmove", handleMapDivTouchMove)
            }
    }

    function handleViewChangeEnd(e) {
        if (mapDiv != null)
            for (var images = mapDiv.getElementsByTagName("img"), i = 0; i < images.length; i++) {
                images[i].addEventListener("touchstart", handleMapDivTouchStart, false);
                images[i].addEventListener("touchmove", handleMapDivTouchMove, false)
            }
    }

    function handleMapDivTouchStart(e) {
        mapDivTouchStartTime = (new Date).getTime();
        mapDivClickIsValid = true
    }

    function handleMapDivTouchMove(e) { mapDivClickIsValid = false }

    function handleMapDivTouchEnd(e) {
        var currentTime = (new Date).getTime();
        mapDivClickIsValid && currentTime - mapDivTouchStartTime > 100 && openBingWebsite();
        mapDivClickIsValid = false
    }

    this.OpenBingWebsite = function() { openBingWebsite() };

    function openBingWebsite() { window.open(getAddressUrl()) }

    function getAddressUrl() {
        var addressParameter = MscrmInlineEditUtilitiesProxy.normalizeNewLineForTextArea(addressString),
            addressParameter = MscrmInlineEditUtilitiesProxy.normalizeNewLineForTextArea(addressString);
        addressParameter = addressParameter.split("\r").join(" ");
        return "http://www.bing.com/maps/?where1=" +
            CrmEncodeDecode.CrmUrlEncode(addressParameter) +
            "&mkt=" +
            CrmEncodeDecode.CrmUrlEncode(window.LOCID_MAP_LOCALE)
    }

    function geoCodeAndRender(address) {
        request_num = 0;
        sendRequest()
    }

    function onGeocodeSuccess(result, userData) {
        if (result) {
            var topResult = result.results && result.results[0];
            topResult && configureMap(topResult.location)
        }
        request_num = 0
    }

    function onGeocodeFailed(result, userData) {
        if (MscrmCrmBrowser.get_currentBrowser().get_isMobileSafari() && request_num <= 12) {
            request_num++;
            sendRequest()
        } else request_num = 0
    }

    this.geocodeRequestCallback = function(result) {
        var bingMapKey = interactionDiv.getAttribute("data-bingmapAttr");
        MicrosoftMaps.loadModule("Microsoft.Maps.Themes.BingTheme",
        {
            callback: function() {
                if (result &&
                    result.resourceSets &&
                    result.resourceSets.length > 0 &&
                    result.resourceSets[0].resources &&
                    result.resourceSets[0].resources.length > 0) {
                    var latitude = result.resourceSets[0].resources[0].point.coordinates[0],
                        longitude = result.resourceSets[0].resources[0].point.coordinates[1],
                        location = new MicrosoftMaps.Location(latitude, longitude),
                        mapOptions = {
                            credentials: bingMapKey,
                            theme: new MicrosoftMaps.Themes.BingTheme,
                            center: location,
                            enableSearchLogo: false,
                            showScalebar: false,
                            showDashboard: false
                        };
                    map = new MicrosoftMaps.Map(mapDiv, mapOptions);
                    CallbackNullCheckAndExecute(mapLoadedCallbackName);
                    configureMap(location);
                    AddMapEventHandlers()
                } else {
                    lastFocusedControl = document.activeElement;
                    map = new MicrosoftMaps.Map(mapDiv,
                    {
                        credentials: bingMapKey,
                        showDashboard: false,
                        enableSearchLogo: false,
                        showScalebar: false,
                        theme: new MicrosoftMaps.Themes.BingTheme
                    });
                    !IsNull(lastFocusedControl) && lastFocusedControl.focus();
                    CallbackNullCheckAndExecute(mapLoadedCallbackName);
                    AddMapEventHandlers();
                    MicrosoftMaps.loadModule("Microsoft.Maps.Search", { callback: geoCodeAndRender })
                }
            }
        })
    };

    function AddMapEventHandlers() {
        if (window.UseTabletExperience) {
            MicrosoftMaps.Events.addHandler(map, "viewchangestart", handleViewChangeStart);
            MicrosoftMaps.Events.addHandler(map, "viewchangeend", handleViewChangeEnd);
            mapDiv.addEventListener("touchend", handleMapDivTouchEnd, false)
        } else MicrosoftMaps.Events.addHandler(map, "click", handleClick);
        initialMapBounds = map.getBounds()
    }

    function sendRequest() {
        createSearchManager();
        var userData = { name: "Maps Test User", id: "XYZ" + request_num },
            request = {
                where: addressString,
                count: 5,
                bounds: map.getBounds(),
                callback: onGeocodeSuccess,
                errorCallback: onGeocodeFailed,
                userData: userData
            };
        searchManager.geocode(request)
    }
};
Mscrm.MapJSControl.currentControl = null;
Mscrm.MapJSControl.geocodeRequestCallback = function(result) {
    Mscrm.MapJSControl.currentControl.geocodeRequestCallback(result)
}